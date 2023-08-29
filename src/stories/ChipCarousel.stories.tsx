import { Meta, StoryObj } from "@storybook/react";
import { ChipCarousel } from "./ChipCarousel";

const meta = {
  title: "Example/ChipCarousel",
  component: ChipCarousel,
  parameters: {
    layout: "centered",
  },
  args: {
    onClick: () => {},
  },

  tags: ["autodocs"],
} satisfies Meta<typeof ChipCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: Array.from({ length: 8 }).map((_, i: number) => ({
      label: `Item ${i + 1}`,
      value: i,
    })),
  },
  render: (args) => (
    <div className="w-[80vw]">
      <ChipCarousel {...args} />
    </div>
  ),
};

export const Selected: Story = {
  args: {
    data: Array.from({ length: 8 }).map((_, i: number) => ({
      label: `Item ${i + 1}`,
      value: i,
    })),
    value: 1,
  },
  render: (args) => (
    <div className="w-[80vw]">
      <ChipCarousel {...args} />
    </div>
  ),
};
