import ProfilePicture from "./ProfilePicture";

type ProfilePictureWithBadgeProps = {
  className?: string;
  alt?: string;
  style?: React.CSSProperties;
  img?: string;
  name?: string;
  noImgVariant?: string;
  badgeIcon: React.ReactNode;
};

export default function ProfilePictureWithBadge({
  className = "",
  alt = "",
  style = {},
  img = "",
  name = "",
  noImgVariant = "light",
  badgeIcon,
 }: ProfilePictureWithBadgeProps) {
  if (!img) {
    return (
      <div className="relative">
        <ProfilePicture
          className={className}
          alt={alt}
          img={img}
          style={style}
          name={name}
          noImgVariant={noImgVariant}
        />
        <div className="absolute bottom-0 right-0">{badgeIcon}</div>
      </div>
    );
  }

  return (
    <div className="relative">
      <ProfilePicture
        className={className}
        alt={alt}
        img={img}
        style={style}
        name={name}
      />
      <div className="absolute bottom-0 right-0">{badgeIcon}</div>
    </div>
  );
}

 

 
