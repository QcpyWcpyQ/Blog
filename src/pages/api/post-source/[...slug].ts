import { readFile } from "node:fs/promises";
import type { APIRoute, GetStaticPaths } from "astro";
import { getSortedPosts } from "@/utils/content-utils";
import { removeFileExtension } from "@/utils/url-utils";

export const prerender = true;

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await getSortedPosts();
	return Promise.all(
		posts
			.filter((entry) => !entry.data.password)
			.map(async (entry) => {
				const source = await readFile(
					entry.filePath ??
						new URL(`../../../content/posts/${entry.id}`, import.meta.url),
					"utf8",
				);
				return {
					params: { slug: removeFileExtension(entry.id) },
					props: { source },
				};
			}),
	);
};

export const GET: APIRoute = ({ props }) => {
	return new Response(props.source, {
		headers: {
			"Content-Type": "text/markdown; charset=utf-8",
			"X-Content-Type-Options": "nosniff",
		},
	});
};
