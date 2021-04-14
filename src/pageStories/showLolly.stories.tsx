import React from "react";
import { PageProps } from "gatsby";
import { Story, Meta } from "@storybook/react/types-6-0";

import ShowLolly from "../templates/showLolly";
import { Lolly } from "../types";

export default {
  title: "Pages/Show Lolly Page",
  component: ShowLolly,
  decorators: [
    Story => (
      <div style={{ backgroundColor: "#21212b" }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<PageProps<object, Lolly>> = args => (
  <ShowLolly {...args} />
);

export const Default = Template.bind({});
Default.args = {
  pageContext: {
    id: "1234",
    topColor: "#d52358",
    middleColor: "#e95946",
    bottomColor: "#deaa43",
    recipientName: "abc",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, eum? " +
      "Perspiciatis natus temporibus fuga nobis eveniet soluta et qui enim!",
    sendersName: "xyz",
  },
};
