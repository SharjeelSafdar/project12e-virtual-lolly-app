import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import IndexPage from "../pages";

export default {
  title: "Pages/Home Page",
  component: IndexPage,
  decorators: [
    Story => (
      <div style={{ backgroundColor: "#21212b", padding: "3em" }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story = args => <IndexPage {...args} />;

export const Default = Template.bind({});
