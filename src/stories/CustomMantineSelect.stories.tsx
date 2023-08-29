import { Meta, StoryObj } from "@storybook/react";
import { CustomMantineSelect } from "./CustomMantineSelect";

const meta = {
  title: "Example/CustomMantineSelect",
  component: CustomMantineSelect,
  parameters: {
    layout: "centered",
  },
  args: {
    label: "Label",
    placeholder: "Pick something...",
    emptyLabel: "Nothing found",
    data: [
      { label: "Item 1", value: 1 },
      { label: "Item 2", value: 2 },
      { label: "Item 3", value: 3 },
    ],
    classNames: {
      root: "w-full",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CustomMantineSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Single",
  args: {
    value: 1,
  },
};

export const Multiple: Story = {
  args: {
    value: [1, 2],
    multiple: true,
    renderValueOutside: true,
  },
};

export const MultipleSearchable: Story = {
  args: {
    value: [1, 2],
    multiple: true,
    renderValueOutside: true,
    searchable: true,
  },
};
