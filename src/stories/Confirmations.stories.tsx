import { Meta, StoryObj } from "@storybook/react";
import Confirmations from "./Confirmations";

const meta = {
  title: "Example/Confirmations",
  component: Confirmations,
  parameters: {
    layout: "centered",
  },
  args: {
    isOpen: true,
    variant: "danger",
    message: "Are you sure want to perform this action?",
    subMessage: "",
    withCancel: true,
    withConfirm: true,
    handleClose: () => {},
    handleConfirm: () => {},
    labelCancel: "Tidak",
    labelConfirm: "Iya",
    isLoadingConfirm: false,
    width: "22vw",
    buttonWidth: "100px",
  },
  argTypes: {
    variant: {
      defaultValue: "safe",
      control: "select",
      options: ["safe", "warning", "danger"],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Confirmations>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
