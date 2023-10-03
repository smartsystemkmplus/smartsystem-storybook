import { Meta, StoryObj } from "@storybook/react";
import ConfirmationModal from "./ConfirmationModal";

const meta = {
  title: "Example/ConfirmationModal",
  component: ConfirmationModal,
  parameters: {
    layout: "centered",
  },
  args: {
    isOpen: true,
    variant : "danger",
    message : "Are you sure want to perform this action?",
    subMessage : "",
    withCancel : true,
    withConfirm : true,
    handleClose : () => {},
    handleConfirm : () => {},
    labelCancel : "Tidak",
    labelConfirm : "Iya",
    isLoadingConfirm : false,
    width : "22vw",
    buttonWidth: '100px',
  },
  argTypes: {
    variant: {
      defaultValue: "safe",
      control: "select",
      options: [
        "safe",
        "warning",
        "danger",
      ],
    },
     
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ConfirmationModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
