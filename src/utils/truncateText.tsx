export function truncateText(length: number, text: string): string {
  if (length <= 0) throw new Error("Length of text cannot be shorter than 0");
  if (text.length < length) return text;
  return text.slice(0, length) + "...";
}
