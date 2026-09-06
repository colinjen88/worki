import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const siteUrl = "https://let.gowork.run";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages: MetadataRoute.Sitemap = projects
    .filter((project) => project.slug)
    .map((project) => ({
      url: `${siteUrl}/work/${project.slug}/`,
      changeFrequency: "monthly",
      priority: project.featured ? 0.8 : 0.6,
      images: project.images.map((image) => new URL(image, siteUrl).toString()),
    }));

  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projectPages,
  ];
}
