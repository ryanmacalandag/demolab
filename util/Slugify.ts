export function Slugify(original: string) {
  const slugified: string = original.trim().toLowerCase().replace(/[^a-zA-Z0-9\s]/g, "").replaceAll(" ","-");
  return slugified;
}