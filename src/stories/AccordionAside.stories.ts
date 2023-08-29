import { Meta, StoryObj } from "@storybook/react";
import { AccordionAside } from "./AccordionAside";

const meta = {
  title: "Example/AccordionAside",
  component: AccordionAside,
  parameters: {
    layout: "centered",
  },
  args: {
    onClick: () => {},
    classNames: { root: "", title: "", menuTitle: "" },
    exact: true,
  },
  argTypes: {
    exact: {
      defaultValue: true,
      description:
        "Determine whether the path in 'activeMenu' has to be exactly same as the one in 'menus'",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AccordionAside>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Menus",
    menus: [
      {
        label: "Menu 1",
        menus: [
          {
            label: "Sub Menu 1.1",
            path: "/1.1",
          },
          {
            label: "Sub Menu 1.2",
            path: "/1.2",
          },
        ],
      },
      {
        label: "Menu 2",
        menus: [
          {
            label: "Sub Menu 2.1",
            path: "/2.1",
          },
          {
            label: "Sub Menu 2.2",
            path: "/2.2",
          },
        ],
      },
    ],
  },
};

export const Active: Story = {
  args: {
    title: "Menus",

    menus: [
      {
        label: "Menu 1",
        menus: [
          {
            label: "Sub Menu 1.1",
            path: "/1.1",
          },
          {
            label: "Sub Menu 1.2",
            path: "/1.2",
          },
        ],
      },
      {
        label: "Menu 2",
        menus: [
          {
            label: "Sub Menu 2.1",
            path: "/2.1",
          },
          {
            label: "Sub Menu 2.2",
            path: "/2.2",
          },
        ],
      },
    ],
    activeMenu: "/1.1",
  },
};
