import { Meta, StoryObj } from "@storybook/react";
import ProfilePictureWithBadge from "./ProfilePictureWithBadge";
 
const meta = {
  title: "Example/ProfilePictureWithBadge",
  component: ProfilePictureWithBadge,
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
} satisfies Meta<typeof ProfilePictureWithBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
