import { Icon } from "@iconify/react";
import { Tooltip, clsx } from "@mantine/core";
import { FloatingPosition } from "@mantine/core/lib/Floating";
import { Fragment, useCallback } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import trimString from "../utils/helpers/trimString";

type Crumb = { path: string; label: string };
export type CrumbList = Crumb[];

type SimpleBreadcrumbProps = {
  crumbs: CrumbList;
  tooltipPosition?: FloatingPosition;
  className?: string;
  maxLabelLength?: number;
};

// * Breadcrumb items exp
//  crumbs = [{ path: "", label: "" }];

export function SimpleBreadcrumb({
  crumbs = [],
  tooltipPosition = "bottom",
  className = "",
  maxLabelLength = 22,
}: SimpleBreadcrumbProps) {
  const { pathname, search } = useLocation();
  const [searchParams] = useSearchParams();
  const params = searchParams.toString();

  const getCrumbStyle = useCallback(
    (path: string) => {
      let tempPathname = pathname;
      if (search) {
        tempPathname += `?${params}`;
      }
      if (tempPathname === path) {
        return "text-primary3 cursor-default";
      }
      return "text-gray-400 cursor-pointer";
    },
    [pathname, search, params],
  );

  return (
    <div
      className={clsx(
        "flex items-center gap-1 bg-white w-fit py-2 px-3 rounded font-semibold",
        className,
      )}
    >
      {crumbs?.map((item, i) => (
        <Fragment key={item.path}>
          <Tooltip
            color="primary"
            withArrow
            label={item.label}
            classNames={{
              tooltip:
                "w-fit max-w-[350px] whitespace-normal text-center",
            }}
            position={tooltipPosition}
            disabled={item?.label?.length < maxLabelLength}
          >
            {!item.path.trim() ||
            `${pathname}${params ? `?${params}` : ""}` ===
              item.path ? (
              <span className={getCrumbStyle(item.path)}>
                {trimString(item?.label || "", maxLabelLength)}
              </span>
            ) : (
              <Link to={item.path}>
                <span className={getCrumbStyle(item.path)}>
                  {trimString(item?.label || "", maxLabelLength)}
                </span>
              </Link>
            )}
          </Tooltip>
          {i !== crumbs?.length - 1 && (
            <Icon
              icon="material-symbols:chevron-right-rounded"
              width={20}
              className="text-gray-400"
            />
          )}
        </Fragment>
      ))}
    </div>
  );
}
