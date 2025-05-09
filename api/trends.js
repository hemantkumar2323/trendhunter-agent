import { getTikTokTrends, getRedditPsychTrends } from "../utils/scraper.js";
import { scoreContent } from "../utils/scorer.js";

export default async function handler(req, res) {
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
}

