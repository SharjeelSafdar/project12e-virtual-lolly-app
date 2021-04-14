import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Layout from ".";

export default {
  title: "Components/Layout",
  component: Layout,
  decorators: [
    Story => (
      <div style={{ backgroundColor: "#21212b" }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story = args => <Layout {...args} />;

export const Default = Template.bind({});
