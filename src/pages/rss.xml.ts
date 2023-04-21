import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const get: APIRoute = async function get({ site }) {
  const posts = await getCollection("blog");
  const items = posts
    .sort((a, b) => Date.parse(b.data.date) - Date.parse(a.data.date))
    .map(({ data: { date, title, description }, slug }) => ({
      title: title,
      description,
      link: `${site}${slug}`,
      pubDate: new Date(date),
    }));

  return rss({
    title: "Novelty Cycles",
    description: "Novelty Cycles Blog Posts",
    site: site.toString(),
    customData: "<language>en</language>",
    items,
  });
};
