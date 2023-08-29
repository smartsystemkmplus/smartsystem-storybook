import { RefObject, useEffect, useRef } from "react";

export default function useHorizontalScroll(
  ref?: RefObject<HTMLDivElement>,
  callback: (ref: HTMLDivElement) => void = () => {},
) {
  const newRef = useRef();
  const elRef = ref || newRef;
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e) => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 3,
          behavior: "smooth",
        });
        callback(el);
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}
