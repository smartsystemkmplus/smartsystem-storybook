import { Meta, StoryObj } from "@storybook/react";
import ListText from "./ListText";

const meta: Meta = {
  title: "Example/ListText",
  component: ListText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ListText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Other",
    array: [
      "Item 1",
      "Item 2",
      "Item 3",
      "Item 4",
      "Item 5",
    ],
    shownCount: 2,
  },
};
