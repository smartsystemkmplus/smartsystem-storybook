import { Meta, StoryObj } from "@storybook/react";
import TableTemplate from "./TableTemplate";

const meta = {
  title: "Example/TableTemplate",
  component: TableTemplate,
  parameters: {
    layout: "centered",
  },
  args: {
    label: 'Hello World',
    variant: 'question',
    color: "#016DB2",
    labelColor: null,
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
      options: [
        "info",
        "question",
      ],
    },
     
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TableTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
