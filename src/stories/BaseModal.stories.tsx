import { Meta, StoryObj } from "@storybook/react";
 import BaseModal from "./BaseModal";

const meta = {
  title: "Example/BaseModal",
  component: BaseModal,
  parameters: {
    layout: "centered",
  },
  args: {
    isOpen: true,
    width: '60vw',
    children: (<div>Hello World</div>),
    onClose: () => false,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BaseModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
