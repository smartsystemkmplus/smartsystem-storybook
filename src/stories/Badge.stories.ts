import { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta = {
  title: "Example/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  args: {
    variant: "primary",
    rounded: "none",
    value: "Badge",
    customClasses: "",
    customTextClasses: "",
  },
  argTypes: {
    variant: {
      defaultValue: "primary",
      control: "select",
      options: [
        "primary",
        "primary-border",
        "primary-outline",
        "green",
        "yellow",
        "red",
        "purple",
        "gray",
        "white",
      ],
    },
    rounded: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
