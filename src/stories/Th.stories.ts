import { Meta, StoryObj } from "@storybook/react";
import Th from "./Th";

const meta: Meta = {
  title: "Example/Th",
  component: Th,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Th>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Column Header",
    sortValue: null,
    tooltipLabel: "Tooltip Label",
    onClickSort: (newSortValue: string) => {
      console.log(`Sorting direction changed to: ${newSortValue}`);
    },
  },
};

export const Asc: Story = {
  args: {
    children: "Column Header (ASC)",
    sortValue: "ASC",
    tooltipLabel: "Tooltip Label",
    onClickSort: (newSortValue: string) => {
      console.log(`Sorting direction changed to: ${newSortValue}`);
    },
  },
};

export const Desc: Story = {
    args: {
      children: "Column Header (DESC)",
      sortValue: "DESC",
      tooltipLabel: "Tooltip Label",
      onClickSort: (newSortValue: string) => {
        console.log(`Sorting direction changed to: ${newSortValue}`);
      },
    },
  };