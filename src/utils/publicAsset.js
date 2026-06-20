export function publicAsset(fileName) {
  return `${import.meta.env.BASE_URL}${fileName.replace(/^\/+/, "")}`;
}
