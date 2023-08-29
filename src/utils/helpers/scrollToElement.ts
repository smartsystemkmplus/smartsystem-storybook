export default function scrollToElement(
  id: string,
  focus: string = "top", // "top" | "bottom" | "center"
) {
  const el = document.getElementById(id);
  if (!el) return;

  const top = (() => {
    switch (focus) {
      case "top":
        return el.offsetTop;
      case "bottom":
        return el.offsetTop - el.offsetHeight;
      case "center":
        return el.offsetTop - el.offsetHeight / 2;
      default:
        return el.offsetTop;
    }
  })();
  window.scrollTo({
    top,
    behavior: "smooth",
  });
}
