import fetch from "node-fetch";
import { JSDOM } from "jsdom";

export async function getTikTokTrends() {
  const url = "https://www.tiktok.com/trending";
  const response = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0" },
  });
  const html = await response.text();
  const dom = new JSDOM(html);
  const document = dom.window.document;

  const results = [];
  const blocks = document.querySelectorAll("div[data-e2e='trending-item']");
  blocks.forEach((block) => {
    const title = block.textContent;
    const link = block.querySelector("a")?.href;
    if (title && link) {
      results.push({ platform: "TikTok", title, url: link });
    }
  });

  return results;
}

export async function getRedditPsychTrends() {
  const url = "https://www.reddit.com/r/psychology/top/?t=day";
  const response = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0" },
  });
  const html = await response.text();
  const dom = new JSDOM(html);
  const document = dom.window.document;

  const results = [];
  const posts = document.querySelectorAll("h3");

  posts.forEach((post) => {
    const title = post.textContent;
    const link = post.closest("a")?.href || "";
    if (title) {
      results.push({
        platform: "Reddit",
        title,
        url: "https://reddit.com" + link,
      });
    }
  });

  return results;
}
