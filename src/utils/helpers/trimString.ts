export default function trimString(
  str: string,
  length: number = 25,
): string {
  if (str.length > length) {
    return `${str.substring(0, length)}...`;
  }
  return str;
}
