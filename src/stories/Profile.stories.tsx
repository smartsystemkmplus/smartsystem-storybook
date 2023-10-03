import { Meta, StoryObj } from "@storybook/react";
import Profile from "./Profile";

const meta = {
  title: "Example/Profile",
  component: Profile,
  parameters: {
    layout: "centered",
  },
  args: {
    name: "John Doe",
    alt: "",
    img: "",
    subName: "",
    subSubName: "",
    badgeIcon: null,
    rightIcon: null,
    withImage: true,
    noImgVariant: "light",
    classNames: {
        root: "",
        textWrapper: "",
        name: "",
        subName: "",
        profilePicture: "",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
