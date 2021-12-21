export type HideChar = "...";

export function computePage(
  total: number,
  curPage: number
): (HideChar | number)[] {
  total = Math.ceil(total);

  if (total < 11) return Array.from({ length: total }, (_, i) => i + 1);

  if (curPage <= 8) return [1, 2, 3, 4, 5, 6, 7, 8, 9, "...", total];
  if (curPage >= total - 8)
    return [
      1,
      "...",
      total - 9,
      total - 8,
      total - 7,
      total - 6,
      total - 5,
      total - 4,
      total - 3,
      total - 2,
      total - 1,
      total,
    ];

  return [
    1,
    "...",
    ...Array.from({ length: 7 }, (_, i) => curPage - 3 + i),
    "...",
    total,
  ];
}
