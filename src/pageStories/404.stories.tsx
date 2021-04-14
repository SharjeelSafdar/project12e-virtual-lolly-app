import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import PageNotFound from "../pages/404";

export default {
  title: "Pages/404 Page",
  component: PageNotFound,
  decorators: [
    Story => (
      <div style={{ backgroundColor: "#21212b", padding: "3em" }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story = args => <PageNotFound {...args} />;

export const Default = Template.bind({});
