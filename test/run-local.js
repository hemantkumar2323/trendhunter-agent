import { getTikTokTrends, getRedditPsychTrends } from "../utils/scraper.js";
import { scoreContent } from "../utils/scorer.js";

(async () => {
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

  console.log("🧠 Approved Trends:", allTrends);
})();
