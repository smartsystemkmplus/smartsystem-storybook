import { ReactNode } from "react";
import scrollToElement from "../utils/helpers/scrollToElement";
import { AccordionAside, AccordionMenuList } from "./AccordionAside";
import { CrumbList, SimpleBreadcrumb } from "./SimpleBreadcrumb";
import { MenuList, SingleMenuBar } from "./SingleMenuBar";

type CreationLayoutProps = {
  children: ReactNode;
  footer?: ReactNode | null;
  crumbs: CrumbList;
  menus: MenuList | AccordionMenuList;
  asideTitle?: string;
  accordionAside?: boolean;
  activeMenu?: string;
  onClickMenu?: (menu: string) => void;
};

export function CreationLayout({
  children,
  footer = null,
  crumbs = [],
  menus = [],
  asideTitle = "",
  accordionAside = false,
  activeMenu = "",
  onClickMenu = () => {},
}: CreationLayoutProps) {
  return (
    <div className="bg-white flex flex-col gap-5 pt-10 w-[100vw] min-h-[calc(100vh-56px)]">
      {crumbs.length > 0 && (
        <SimpleBreadcrumb
          className="p-0 ml-10 border-0 z-[2]"
          crumbs={crumbs}
          maxLabelLength={99}
        />
      )}

      <div className="flex gap-5 px-10 pb-20">
        <aside className="sticky top-[5rem] z-1 w-fit self-start">
          {accordionAside ? (
            <AccordionAside
              title={asideTitle}
              activeMenu={activeMenu}
              onClick={(menu) => {
                onClickMenu(menu);
                scrollToElement(menu.replace("#", ""));
              }}
              menus={menus as AccordionMenuList}
            />
          ) : (
            <SingleMenuBar
              title={asideTitle}
              activeMenu={activeMenu}
              onClick={(menu) => {
                onClickMenu(menu);
                scrollToElement(menu.replace("#", ""));
              }}
              menus={menus as MenuList}
            />
          )}
        </aside>

        <div className="flex flex-col w-full gap-8 pl-6 border-l">
          {children}
        </div>
      </div>

      {footer && (
        <div className="bg-white fixed bottom-0 w-[calc(100%-4rem)] p-5 border-t right-0 z-[3]">
          {footer}
        </div>
      )}
    </div>
  );
}
