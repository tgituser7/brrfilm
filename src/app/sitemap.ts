import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/artists", priority: 0.8, changeFrequency: "monthly" },
  { path: "/team", priority: 0.6, changeFrequency: "monthly" },
  { path: "/sponsors", priority: 0.5, changeFrequency: "monthly" },
  { path: "/supporters", priority: 0.5, changeFrequency: "monthly" },
  { path: "/merchandise", priority: 0.6, changeFrequency: "monthly" },
  { path: "/donate", priority: 0.7, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
