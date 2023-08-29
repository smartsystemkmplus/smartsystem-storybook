/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import { Accordion, NavLink, Text, clsx } from "@mantine/core";
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
type MenuParent = {
  label: string;
  menus: Menu[];
};
export type AccordionMenuList = MenuParent[];

type AccordionAsideProps = {
  title?: string;
  onClick?: ((path: string) => void) | null;
  activeMenu?: string | null;
  exact?: boolean;
  menus: AccordionMenuList;
  classNames?: {
    root?: string;
    title?: string;
    menuTitle?: string;
  };
};

// 'menus' props example:
// [
//   {
//     label: "Assessment",
//     menus: [
//       {
//         label: "All Assessment",
//         path: "/headquarter",
//       },
//       {
//         label: "Penilaian Perilaku",
//         path: "/headquarter/score",
//       },
//     ],
//   },
//   {
//     label: "SmartPlan KPI",
//     menus: [
//       {
//         label: "All KPI",
//         path: "/headquarter/kpi",
//       },
//       {
//         label: "Common KPI",
//         path: "/headquarter/kpi/common",
//       },
//       {
//         label: "Data Historis KPI",
//         path: "/headquarter/kpi/history",
//       },
//       {
//         label: "Lakhar & Job Sharing",
//         path: "/headquarter/kpi/lakhar-job-sharing",
//       },
//     ],
//   },
// ]

export function AccordionAside({
  title,
  onClick,
  exact = true,
  menus = [],
  activeMenu = null,
  classNames = { root: "", title: "", menuTitle: "" },
}: AccordionAsideProps) {
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
          className={clsx(
            "font-bold text-base border-b p-4 text-primary3",
            classNames.title,
          )}
        >
          {title}
        </Text>
      )}
      {menus?.map((menu) => (
        <Accordion
          key={menu?.label}
          classNames={{ label: "font-semibold text-sm" }}
          defaultValue={menu?.label}
        >
          <Accordion.Item value={menu?.label} className="border-0">
            <Accordion.Control className={clsx(classNames.menuTitle)}>
              {menu?.label}
            </Accordion.Control>
            <Accordion.Panel className="[&>div>.mantine-Accordion-content]:pb-1 [&>div>.mantine-Accordion-content]:pt-0">
              {menu.menus.map((m, i) => (
                <NavLink
                  key={`${m?.label}-${i}`}
                  className="px-4 py-3 my-2 font-medium rounded-md"
                  styles={{
                    root: {
                      "&[data-active]": {
                        background: color.bg2,
                        color: color.primary3,
                      },
                      "&[data-active]:hover": {
                        background: color.bg2,
                        color: color.primary3,
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
                            document
                              .getElementById(id)
                              .scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                              });
                          }
                        }
                  }
                />
              ))}
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      ))}
    </div>
  );
}
