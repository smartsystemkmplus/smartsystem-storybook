import { useEffect, useMemo, useRef } from "react";

type ProfilePictureProps = {
    className?: string;
    style?: React.CSSProperties;
    alt?: string;
    img?: string;
    name?: string;
    noImgVariant?: string;
}

export default function ProfilePicture({
  className = "",
  alt = "",
  style = {},
  img = "",
  name = "Unknown",
  noImgVariant = "light",
}: ProfilePictureProps) {
  const ref = useRef();
  useEffect(() => {
    if (ref?.current) {
      ref.current.style.fontSize = `${ref.current.offsetWidth / 2}px`;
    }
  }, [ref]);

  const pickNoImageVariant = useMemo(() => {
    if (img) {
      return "";
    }

    let returnedVal;
    switch (noImgVariant) {
      case "default":
        returnedVal = "bg-primary3 text-white";
        break;
      case "light":
        returnedVal = "bg-accent1 text-black font-medium";
        break;
      default:
        returnedVal = "bg-primary3 text-white";
        break;
    }
    return returnedVal;
  }, [noImgVariant, img]);

  if (!img) {
    return (
      <div
        ref={ref}
        className={`flex items-center justify-center text-center ${className} cursor-default ${pickNoImageVariant}`}
      >
        {name
          ?.split(" ")
          ?.slice(0, 2)
          ?.map((item) => item[0])
          ?.join("")
          ?.toUpperCase()}
      </div>
    );
  }

  return (
    <img
      src={img}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
    />
  );
}
 
