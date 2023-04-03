import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function get({ site }) {
  const posts = await getCollection("blog");

  return rss({
    title: "Novelty Cycles",
    description: "Novelty Cycles Blog Posts",
    site,
    customData: `<language>en</language>`,
    items: posts
      .sort((a, b) => Date.parse(b.data.date!) - Date.parse(a.data.date!))
      .map(({ data: { date, title, description }, slug }) => ({
        title: title,
        description,
        link: `${site}${slug}/`,
        pubDate: new Date(date),
      })),
  });
}
