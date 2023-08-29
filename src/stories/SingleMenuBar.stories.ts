import { Meta, StoryObj } from "@storybook/react";
import { SingleMenuBar } from "./SingleMenuBar";

const meta = {
  title: "Example/SingleMenuBar",
  component: SingleMenuBar,
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
} satisfies Meta<typeof SingleMenuBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Menus",
    menus: [
      {
        label: "Menu 1",
        path: "/1",
      },
      {
        label: "Menu 2",
        path: "/2",
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
        path: "/1",
      },
      {
        label: "Menu 2",
        path: "/2",
      },
    ],
    activeMenu: "/2",
  },
};
