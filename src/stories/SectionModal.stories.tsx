import { Meta, StoryObj } from "@storybook/react";
import SectionModal from "./SectionModal";

const meta = {
  title: "Example/SectionModal",
  component: SectionModal,
  parameters: {
    layout: "centered",
  },
  args: {
    isOpen: true,
    handleClose: () => false,
    withCloseButton: false,
    withFooter: true,
    title: 'Title Modal',
    footerElement: <div />,
    children: (<div>Hello World</div>),
    height: '40vh',
    width: '50vw',
    classNames: {
      modal: "",
      body: "",
    },
    isNotOverflow: false,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SectionModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
