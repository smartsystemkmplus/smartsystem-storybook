import { Icon } from "@iconify/react";
import { clsx } from "@mantine/core";

type NoItemsProps = {
  label: string;
  classNames?: {
    wrapper?: string;
    icon?: string;
    label?: string;
  };
};

export function NoItems({
  label = "No items",
  classNames = {
    wrapper: "",
    icon: "",
    label: "",
  },
}: NoItemsProps) {
  return (
    <div
      className={`mx-auto my-auto flex text-grey items-center justify-center flex-col gap-3 ${classNames.wrapper}`}
    >
      <Icon
        icon="fluent:target-edit-16-regular"
        className={clsx("w-32 h-32", classNames.icon)}
      />
      <p className={clsx("text-2xl font-normal", classNames.label)}>
        {label}
      </p>
    </div>
  );
}
