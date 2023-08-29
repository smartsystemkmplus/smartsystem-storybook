import { MantineSize, Tooltip, clsx } from "@mantine/core";
import { useMemo } from "react";
import trimString from "../utils/helpers/trimString";

type BadgeVariant =
  | "primary"
  | "primary-border"
  | "primary-outline"
  | "green"
  | "yellow"
  | "red"
  | "purple"
  | "gray"
  | "white";

type BadgeProps = {
  variant: BadgeVariant;
  rounded: MantineSize | "none";
  value?: string;
  customClasses?: string;
  customTextClasses?: string;
  maxLength?: number;
  withTooltip?: boolean;
  rootFitContent?: boolean;
};

export function Badge({
  variant = "primary",
  rounded = "none",
  value,
  customClasses = "",
  customTextClasses = "",
  maxLength = 50,
  withTooltip = false,
  rootFitContent = true,
}: BadgeProps) {
  const roundedClass = useMemo(() => {
    const classes = "";
    if (rounded !== "none") return `rounded-${rounded}`;
    return classes;
  }, [rounded]);

  const variantClass = useMemo(() => {
    let classes = "";
    switch (variant) {
      case "primary":
        classes = "bg-[#C9F3FB] text-[#016DB2] border-[#C9F3FB]";
        break;
      case "primary-border":
        classes = "bg-[#C9F3FB] text-[#016DB2] border-[#016DB2]";
        break;
      case "primary-outline":
        classes = "bg-white text-[#016DB2] border-[#016DB2]";
        break;
      case "green":
        classes = "bg-[#F4FBF4] text-[#4BB543]  border-[#B8E3B5]";
        break;
      case "yellow":
        classes = "bg-[#FEF9F1] text-[#F5BB5C] border-[#F9D79F]";
        break;
      case "red":
        classes = "bg-[#FFF4F2] text-[#CB3A31] border-[#EEB4B0]";
        break;
      case "purple":
        classes = "bg-[#F0F3FF] text-[#3267E3] border-[#B1C5F6]";
        break;
      case "gray":
        classes = "bg-[#F2F4F8] text-darkGrey border-darkGrey";
        break;
      case "white":
        classes = "bg-white text-darkGrey border-darkGrey";
        break;
      default:
        classes = "bg-[#C9F3FB] text-[#016DB2] border-[#C9F3FB]";
    }

    return classes;
  }, [variant]);

  if (withTooltip) {
    return (
      <Tooltip
        label={value}
        classNames={{
          tooltip: "max-w-[350px] whitespace-normal text-center",
        }}
        color="primary"
      >
        <div
          className={clsx(
            "flex flex-col items-center",
            rootFitContent ? "w-fit" : "",
          )}
        >
          <div
            className={clsx(
              "py-1 px-2 font-medium rounded w-fit border text-center",
              variantClass,
              roundedClass,
              customTextClasses,
            )}
          >
            {value ? trimString(value, maxLength) : ""}
          </div>
        </div>
      </Tooltip>
    );
  }

  return (
    <div
      className={clsx(
        "flex flex-col items-center",
        rootFitContent ? "w-fit" : "",
        customClasses,
      )}
    >
      <div
        className={clsx(
          "py-1 px-2 font-medium rounded w-fit border text-center",
          variantClass,
          roundedClass,
          customTextClasses,
        )}
      >
        {value ? trimString(value, maxLength) : ""}
      </div>
    </div>
  );
}
