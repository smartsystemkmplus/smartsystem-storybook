import type { Meta, StoryObj } from "@storybook/react";
import { SimpleBreadcrumb } from "./SimpleBreadcrumb";

const meta = {
  title: "Example/SimpleBreadcrumb",
  component: SimpleBreadcrumb,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    tooltipPosition: {
      defaultValue: "bottom",
      control: "select",
      options: [
        "top",
        "right",
        "bottom",
        "left",
        "bottom-end",
        "bottom-start",
        "top-end",
        "top-start",
        "right-end",
        "right-start",
        "left-end",
        "left-start",
      ],
    },
    maxLabelLength: {
      defaultValue: 22,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SimpleBreadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    crumbs: [
      { label: "Previous Page", path: "/prev-page" },
      { label: "Current Page", path: "/" },
    ],
    tooltipPosition: "bottom",
    className: "",
    maxLabelLength: 22,
  },
};

export const LongLabel: Story = {
  args: {
    crumbs: [
      { label: "Previous Page", path: "/prev-page" },
      { label: "Current Page With Really Long Label", path: "/" },
    ],
    tooltipPosition: "bottom",
    className: "",
    maxLabelLength: 22,
  },
};

export const MoreThan2Crumbs: Story = {
  args: {
    crumbs: [
      { label: "Previous Page 1", path: "/prev-page" },
      { label: "Previous Page 2", path: "/prev-page2" },
      { label: "Previous Page 3", path: "/prev-page3" },
      { label: "Current Page With Really Long Label", path: "/" },
    ],
    tooltipPosition: "bottom",
    className: "",
    maxLabelLength: 22,
  },
};
