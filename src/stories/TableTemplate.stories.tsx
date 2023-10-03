import { Meta, StoryObj } from "@storybook/react";
import TableTemplate from "./TableTemplate";

const meta = {
  title: "Example/TableTemplate",
  component: TableTemplate,
  parameters: {
    layout: "centered",
  },
  args: {
    isLoading: false,
    isNoItem: false,
    noItemLabel: "No items yet",
    variant: "default",
    classNames: { table: "", thead: "", tbody: "" },
    tRows: (
        <>
            <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
            </tr>
            <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
            </tr>
        </>
    ),
    tHeads: (
        <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
        </tr>
    )
  },
  argTypes: {
    variant: {
      defaultValue: "default",
      control: "select",
      options: [
        "default",
        "outline",
      ],
    },
     
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TableTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
