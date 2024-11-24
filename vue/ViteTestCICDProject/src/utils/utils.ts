export function getCurrentDateString(): string {
  const now = new Date();
  const year = now.getFullYear(); // 年4桁
  const month = String(now.getMonth() + 1).padStart(2, "0"); // 月 (2桁)
  const day = String(now.getDate()).padStart(2, "0"); // 日 (2桁)

  return `${year}-${month}-${day}`;
}
