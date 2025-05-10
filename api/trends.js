import { getTikTokTrends, getRedditPsychTrends } from "../utils/scraper.js";
import { scoreContent } from "../utils/scorer.js";

export default async function handler(req, res) {
  try {
    const allTrends = [];

    const sources = [
      await getTikTokTrends(),
      await getRedditPsychTrends(),
    ];

    sources.flat().forEach((item) => {
      if (scoreContent(item)) {
        allTrends.push(item);
      }
    });

    return res.status(200).json({ results: allTrends });
  } catch (err) {
    return res.status(500).json({ error: err.message || "Unknown error" });
  }
}
