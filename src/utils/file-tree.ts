import { getPostUrlBySlug } from "@/utils/url-utils";

export type FileTreePost = {
	id: string;
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

function sortTree(nodes: FileTreeNode[]): void {
	nodes.sort((a, b) => {
		if (a.kind !== b.kind) return a.kind === "folder" ? -1 : 1;
		return a.name.localeCompare(b.name, undefined, { numeric: true });
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

		let current = root;
		for (const part of parts) {
			const path = current.path ? `${current.path}/${part}` : part;
			let folder = current.children.find(
				(child): child is FileTreeFolder =>
					child.kind === "folder" && child.path === path,
			);

			if (!folder) {
				folder = {
					kind: "folder",
					path,
					name: part,
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
			name: fileName,
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
