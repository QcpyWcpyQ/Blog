import { getPostUrlBySlug } from "@/utils/url-utils";

export type FileTreePost = {
	id: string;
	filePath?: string;
	data: {
		title: string;
	};
};

export type FileTreeFile = {
	kind: "file";
	id: string;
	name: string;
	title: string;
	url: string;
};

export type FileTreeFolder = {
	kind: "folder";
	path: string;
	name: string;
	children: FileTreeNode[];
	fileCount: number;
};

export type FileTreeNode = FileTreeFile | FileTreeFolder;

function compareNames(a: string, b: string): number {
	const aHex = a.match(/^0x([0-9a-f]+)(?:[_-]|$)/i);
	const bHex = b.match(/^0x([0-9a-f]+)(?:[_-]|$)/i);
	if (aHex && bHex) {
		const difference = Number.parseInt(aHex[1], 16) - Number.parseInt(bHex[1], 16);
		if (difference !== 0) return difference;
	}

	const naturalOrder = a.localeCompare(b, undefined, {
		numeric: true,
		sensitivity: "base",
	});
	return naturalOrder || a.localeCompare(b, undefined, { numeric: true });
}

function sortTree(nodes: FileTreeNode[]): void {
	nodes.sort((a, b) => {
		if (a.kind !== b.kind) return a.kind === "folder" ? -1 : 1;
		return compareNames(a.name, b.name);
	});

	for (const node of nodes) {
		if (node.kind === "folder") sortTree(node.children);
	}
}

export function buildFileTree(
	posts: FileTreePost[],
): FileTreeFolder {
	const root: FileTreeFolder = {
		kind: "folder",
		path: "",
		name: "posts",
		children: [],
		fileCount: 0,
	};

	for (const post of posts) {
		const id = post.id.replaceAll("\\", "/");
		const parts = id.split("/").filter(Boolean);
		const fileName = parts.pop();
		if (!fileName) continue;

		const sourcePath = post.filePath?.replaceAll("\\", "/") ?? "";
		const contentRoot = "src/content/posts/";
		const contentRootIndex = sourcePath.lastIndexOf(contentRoot);
		const sourceRelativePath =
			contentRootIndex >= 0
				? sourcePath.slice(contentRootIndex + contentRoot.length)
				: "";
		const sourceParts = sourceRelativePath
			.replace(/\.(?:md|mdx)$/i, "")
			.split("/")
			.filter(Boolean);
		const displayParts =
			sourceParts.length === parts.length + 1
				? sourceParts
				: [...parts, fileName];
		const displayFileName = displayParts.at(-1) ?? fileName;

		let current = root;
		for (const [index, part] of parts.entries()) {
			const path = current.path ? `${current.path}/${part}` : part;
			let folder = current.children.find(
				(child): child is FileTreeFolder =>
					child.kind === "folder" && child.path === path,
			);

			if (!folder) {
				folder = {
					kind: "folder",
					path,
					name: displayParts[index] ?? part,
					children: [],
					fileCount: 0,
				};
				current.children.push(folder);
			}
			current = folder;
		}

		current.children.push({
			kind: "file",
			id,
			name: displayFileName,
			title: post.data.title,
			url: getPostUrlBySlug(id),
		});
	}

	function countFiles(folder: FileTreeFolder): number {
		folder.fileCount = folder.children.reduce(
			(count, child) =>
				count + (child.kind === "file" ? 1 : countFiles(child)),
			0,
		);
		return folder.fileCount;
	}

	sortTree(root.children);
	countFiles(root);
	return root;
}
