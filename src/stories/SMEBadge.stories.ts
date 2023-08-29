import type { Meta, StoryObj } from "@storybook/react";
import { SMEBadge } from "./SMEBadge";

const meta = {
  title: "Example/SMEBadge",
  component: SMEBadge,
  parameters: {
    layout: "centered",
  },
  args: {
    size: 18,
  },
  argTypes: {
    size: {
      defaultValue: 18,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SMEBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
