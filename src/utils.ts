export function formatAsJsonBlock(obj: unknown): string {
  return "```json\n" + JSON.stringify(obj, null, 2) + "\n```";
}
