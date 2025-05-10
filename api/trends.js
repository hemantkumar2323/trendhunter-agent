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

    res.status(200).json({ results: allTrends });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch trends", details: error.message });
  }
}
