import { Meta, StoryObj } from "@storybook/react";
import TextAccordion from "./TextAccordion";

const meta: Meta = {
  title: "Example/TextAccordion",
  component: TextAccordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextAccordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args : {
    children: "Accordion Header",
    childs: [
      {
        name: "Child 1",
        description: "Description for Child 1",
      },
      {
        name: "Child 2",
        description: "Description for Child 2",
      },
    ],
  },
};