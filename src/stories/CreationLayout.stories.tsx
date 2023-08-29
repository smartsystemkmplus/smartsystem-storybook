import { Button } from "@mantine/core";
import { Meta, StoryObj } from "@storybook/react";
import { CreationLayout } from "./CreationLayout";

const meta = {
  title: "Example/CreationLayout",
  component: CreationLayout,
  parameters: {
    layout: "centered",
  },
  args: {
    onClickMenu: () => {},
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CreationLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Non Accordion Aside",
  args: {
    crumbs: [
      { label: "Previous Page", path: "/prev-page" },
      { label: "Current Page", path: "/" },
    ],
    asideTitle: "Page Name",
    activeMenu: "/1",
    menus: [
      {
        label: "Section 1",
        path: "/1",
      },
      {
        label: "Section 2",
        path: "/2",
      },
    ],
    children: <p>Your content here</p>,
    footer: (
      <div className="flex items-center justify-between bg-white fixed bottom-0 w-[calc(100%-4rem)] text-end p-5 border-t right-0 z-[3]">
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </div>
    ),
  },
  render: (args) => (
    <CreationLayout {...args}>
      <p>Your content here</p>
    </CreationLayout>
  ),
};

export const AccordionAside: Story = {
  args: {
    crumbs: [
      { label: "Previous Page", path: "/prev-page" },
      { label: "Current Page", path: "/" },
    ],
    asideTitle: "Page Name",
    activeMenu: "/1.1",
    menus: [
      {
        label: "Section 1",
        menus: [
          {
            label: "Sub Section 1.1",
            path: "/1.1",
          },
          {
            label: "Sub Section 1.2",
            path: "/1.2",
          },
        ],
      },
      {
        label: "Section 2",
        menus: [
          {
            label: "Sub Section 2.1",
            path: "/2.1",
          },
          {
            label: "Sub Section 2.2",
            path: "/2.2",
          },
        ],
      },
    ],
    accordionAside: true,
    children: <p>Your content here</p>,
    footer: (
      <div className="flex items-center justify-between bg-white fixed bottom-0 w-[calc(100%-4rem)] text-end p-5 border-t right-0 z-[3]">
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </div>
    ),
  },
};
