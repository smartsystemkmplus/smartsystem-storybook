/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import { NavLink, Text, clsx } from "@mantine/core";
import { useMemo } from "react";
import {
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { color } from "../utils/constants";

type Menu = {
  label: string;
  path: string;
};
export type MenuList = Menu[];

type SingleMenuBarProps = {
  title?: string;
  onClick?: ((path: string) => void) | null;
  activeMenu?: string | null;
  exact?: boolean;
  menus: MenuList;
  classNames?: {
    root?: string;
    title?: string;
    menuTitle?: string;
  };
};

// 'menus' props example:
// [
//   {
//     label: "All Assessment",
//     path: "/headquarter",
//   },
//   {
//     label: "All KPI",
//     path: "/headquarter/kpi",
//   },
//   {
//     label: "Common KPI",
//     path: "/headquarter/kpi/common",
//   },
// ];

export function SingleMenuBar({
  title,
  onClick = null,
  activeMenu = null,
  exact = true,
  menus = [],
  classNames = { root: "", title: "", menuTitle: "" },
}: SingleMenuBarProps) {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const parsedPathname = useMemo(() => {
    const search = searchParams.toString();
    const { pathname } = location;
    if (search) {
      return `${pathname}?${search}`;
    }
    return pathname;
  }, [location.pathname]);

  return (
    <div
      className={clsx(
        "bg-white border rounded-md h-fit w-[300px]",
        classNames.root,
      )}
    >
      {title && (
        <Text
          size="lg"
          style={{
            color: color.primary3,
          }}
          className={clsx(
            "font-semibold border-b p-4",
            classNames.title,
          )}
        >
          {title}
        </Text>
      )}
      <div className="p-5">
        {menus?.map((m, i) => (
          <NavLink
            key={`${m?.label}-${i}`}
            className="rounded-md font-medium"
            styles={{
              root: {
                "&[data-active]": {
                  background: color.primary1,
                  color: color.primary3,
                  fontWeight: 700,
                },
                "&[data-active]:hover": {
                  background: color.primary1,
                  color: color.primary3,
                  fontWeight: 700,
                },
              },
            }}
            active={
              activeMenu === m?.path ||
              (exact
                ? parsedPathname === m?.path
                : parsedPathname.includes(m?.path))
            }
            label={m?.label}
            onClick={
              onClick
                ? () => onClick(m?.path)
                : () => {
                    navigate(m?.path);
                    if (m?.path?.includes("#")) {
                      const id = m?.path?.split("#")[1];
                      document.getElementById(id).scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                    }
                  }
            }
          />
        ))}
      </div>
    </div>
  );
}
