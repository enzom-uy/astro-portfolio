import type { CollectionEntry } from "astro:content";
import path from "path";

export function sortMDByDate<T extends CollectionEntry<"blog" | "projects">>(posts: T[] = []) {
  return posts.sort(
    (a, b) =>
      new Date(b.data.publishDate).valueOf() -
      new Date(a.data.publishDate).valueOf()
  );
}

export function getImage(slug: string, fileName: string, collection: "blog" | "projects" = "blog") {
  const collectionPath = collection === "projects" ? "projects" : "blog";
  const ext = path.extname(fileName);
  const basename = path.basename(fileName, ext);

  switch (ext.toLowerCase()) {
    case ".webp":
      return import(`../content/${collectionPath}/${slug}/${basename}.webp`);
    case ".jpg":
      return import(`../content/${collectionPath}/${slug}/${basename}.jpg`);
    case ".png":
      return import(`../content/${collectionPath}/${slug}/${basename}.png`);
    case ".svg":
      return import(`../content/${collectionPath}/${slug}/${basename}.svg`);
    case ".gif":
      return import(`../content/${collectionPath}/${slug}/${basename}.gif`);
    case ".avif":
      return import(`../content/${collectionPath}/${slug}/${basename}.avif`);
    case ".jpeg":
      return import(`../content/${collectionPath}/${slug}/${basename}.jpeg`);
    default:
      return import(`../content/${collectionPath}/${slug}/${basename}.png`);
  }
}

export function getBlogImage(slug: string, fileName: string) {
  return getImage(slug, fileName, "blog");
}

export function getProjectImage(slug: string, fileName: string) {
  return getImage(slug, fileName, "projects");
}
