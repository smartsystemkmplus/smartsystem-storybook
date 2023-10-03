import { Icon } from "@iconify/react";
import { Tooltip, clsx } from "@mantine/core";
 
type TooltipIconProps = {
    label: string;
    variant: string;
    color?: string;
    labelColor?: string;
    labelWidth?: string;
    position?: string;
    iconSize?: number;
    disableHover?: boolean;
    onClick?: () => void;
    classNames?: {
        icon: string;
        tooltip: string;
    };
}

export default function TooltipIcon({
  label,
  variant = "question",
  color = "#016DB2",
  labelColor = null,
  labelWidth = "auto",
  position = "top",
  iconSize = 20,
  disableHover = false,
  onClick = () => {},
  classNames = {
    icon: "",
    tooltip: "",
  },
}: TooltipIconProps) {
  const icon = {
    question: "ph:question-bold",
    info: "material-symbols:info-outline",
    "info-filled": "material-symbols:info",
  };
  return (
    <Tooltip
      label={label}
      withArrow
      multiline
      width={labelWidth || "auto"}
      color={labelColor}
      position={position}
      styles={{
        tooltip: {
          maxWidth: "400px",
        },
      }}
      disabled={disableHover}
      onClick={onClick}
      classNames={{
        tooltip: clsx("whitespace-normal", classNames.tooltip),
      }}
    >
      <Icon
        icon={icon[variant]}
        color={color}
        width={iconSize}
        className={classNames.icon}
      />
    </Tooltip>
  );
}

 

 
