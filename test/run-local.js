import { getTikTokTrends, getRedditPsychTrends } from "../utils/scraper.js";

(async () => {
  const reddit = await getRedditPsychTrends();
  console.log("🔬 Raw Reddit Trends:", reddit);

  const tiktok = await getTikTokTrends();
  console.log("🎥 Raw TikTok Trends:", tiktok);
})();
