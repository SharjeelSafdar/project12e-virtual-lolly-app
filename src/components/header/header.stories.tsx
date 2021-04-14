import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Header from ".";

export default {
  title: "Components/Header",
  component: Header,
  decorators: [
    Story => (
      <div style={{ backgroundColor: "#21212b" }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story = args => <Header {...args} />;

export const Default = Template.bind({});
