import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import CreateNew from "../pages/create-new";

export default {
  title: "Pages/Create New Lolly Page",
  component: CreateNew,
  decorators: [
    Story => (
      <div style={{ backgroundColor: "#21212b", padding: "3em" }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story = args => <CreateNew {...args} />;

export const Default = Template.bind({});
