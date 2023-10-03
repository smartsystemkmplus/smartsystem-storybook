import ProfilePictureWithBadge from "./ProfilePictureWithBadge";


type ProfileProps = {
    alt?: string;
    img?: string;
    name: React.ReactNode | string;
    subName?: React.ReactNode | string;
    subSubName?: React.ReactNode | string;
    badgeIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    withImage?: boolean;
    noImgVariant?: string;
    classNames?: {
        root?: string;
        textWrapper?: string;
        name?: string;
        subName?: string;
        profilePicture?: string;
    };
}

export default function Profile({
    alt = "",
    img = "",
    subName = "",
    subSubName = "",
    badgeIcon = null,
    rightIcon = null,
    withImage = true,
    noImgVariant = "light",
    classNames = {
        root: "",
        textWrapper: "",
        name: "",
        subName: "",
        profilePicture: "",
    },
}: ProfileProps) {
  return (
    <div className={`flex gap-3 ${classNames.root}`}>
      {withImage && (
        <ProfilePictureWithBadge
          noImgVariant={noImgVariant}
          alt={alt}
          name={name}
          img={img}
          badgeIcon={badgeIcon}
          className={`h-[40px] w-[40px] rounded-full shrink-0 ${classNames.profilePicture}`}
        />
      )}
      <div
        className={`flex flex-col items-start justify-center ${classNames.textWrapper}`}
      >
        <div className="flex items-center gap-2">
          <p className={`font-medium ${classNames.name}`}>{name}</p>
          {rightIcon}
        </div>
        <p
          className={`font-normal text-sm text-darkGrey ${classNames.subName}`}
        >
          {subName}
        </p>
        <p
          className={`font-normal text-sm text-darkGrey ${classNames.subSubName}`}
        >
          {subSubName}
        </p>
      </div>
    </div>
  );
}

 