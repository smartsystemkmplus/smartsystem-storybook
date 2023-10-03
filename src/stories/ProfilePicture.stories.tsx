import { Meta, StoryObj } from "@storybook/react";
import ProfilePicture from "./ProfilePicture";

const meta = {
  title: "Example/Profile",
  component: ProfilePicture,
  parameters: {
    layout: "centered",
  },
  args: {
    className: "",
    alt: "",
    style: {},
    img: "",
    name: "John Doe",
    noImgVariant: "light",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProfilePicture>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
