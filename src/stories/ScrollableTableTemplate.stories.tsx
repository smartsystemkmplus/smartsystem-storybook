import { Meta, StoryObj } from "@storybook/react";
import ScrollableTableTemplate from "./ScrollableTableTemplate";

const meta = {
  title: "Example/ScrollableTableTemplate",
  component: ScrollableTableTemplate,
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
    ),
  },
  argTypes: {
    variant: {
      defaultValue: "default",
      control: "select",
      options: ["default", "outline"],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ScrollableTableTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
