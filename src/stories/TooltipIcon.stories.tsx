import { Meta, StoryObj } from "@storybook/react";
import TooltipIcon from "./TooltipIcon";

const meta = {
  title: "Example/TooltipIcon",
  component: TooltipIcon,
  parameters: {
    layout: "centered",
  },
  args: {
    label: "Hello World",
    variant: "question",
    color: "#016DB2",
    labelColor: undefined,
    labelWidth: "auto",
    position: "top",
    iconSize: 20,
    disableHover: false,
    onClick: () => {},
    classNames: {
      icon: "",
      tooltip: "",
    },
  },
  argTypes: {
    variant: {
      defaultValue: "question",
      control: "select",
      options: ["info", "question"],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TooltipIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
