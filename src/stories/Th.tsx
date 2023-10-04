import React, { ReactNode } from "react";
import { Icon } from "@iconify/react";
import { color } from "../utils/constants";
import TooltipIcon from "../stories/TooltipIcon";

interface ThProps {
  children: ReactNode;
  sortValue: "ASC" | "DESC" | null;
  tooltipLabel: string;
  sortValueKeys?: { ASC: string; DESC: string };
  onClickSort?: (newSortValue: "ASC" | "DESC") => void;
  className?: string;
  withSort?: boolean;
  withTooltip?: boolean;
}

export default function Th({
  children,
  sortValue,
  tooltipLabel,
  sortValueKeys = { ASC: "ASC", DESC: "DESC" },
  onClickSort = () => {},
  className = "",
  withSort = true,
  withTooltip = false,
}: ThProps) {
  const handleClickSort = () => {
    const newSortValue =
      sortValue === sortValueKeys.ASC
        ? sortValueKeys.DESC
        : sortValueKeys.ASC;
    onClickSort(newSortValue);
  };

  return (
    <th className={className}>
      <div className="flex justify-between gap-2">
        {withTooltip ? (
          <div className="flex items-center gap-2">
            {children}
            <TooltipIcon
              label={tooltipLabel}
              classNames={{
                tooltip: "normal-case text-center max-w-[250px]",
              }}
            />
          </div>
        ) : (
          children
        )}
        {withSort && (
          <button type="button" onClick={handleClickSort}>
            <Icon
              icon="bxs:up-arrow"
              width={9}
              color={
                sortValue === sortValueKeys.ASC
                  ? color.primary3
                  : color.grey
              }
            />
            <Icon
              icon="bxs:down-arrow"
              width={9}
              color={
                sortValue === sortValueKeys.DESC
                  ? color.primary3
                  : color.grey
              }
            />
          </button>
        )}
      </div>
    </th>
  );
}
