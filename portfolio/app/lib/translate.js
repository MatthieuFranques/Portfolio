export function tr(field, language) {
  if (typeof field === "string") return field;
  return field?.[language] ?? field?.FR ?? "";
}