export function scoreContent(item) {
  const title = item.title.toLowerCase();
  let score = 0;
  if (title.includes("psychology")) score += 2;
  if (title.includes("study")) score += 1;
  if (title.includes("habit") || title.includes("motivation")) score += 1;
  if (title.includes("mind") || title.includes("behavior") || title.includes("mental")) score += 1;
  return score >= 0; // Lowered from 2 → 1
}
 
