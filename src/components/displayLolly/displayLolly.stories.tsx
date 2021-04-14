import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import DisplayLolly, { DisplayLollyProps } from ".";

export default {
  title: "Components/Display Lolly",
  component: DisplayLolly,
  argTypes: {
    id: {
      control: {
        type: "text",
      },
      description: "A unique id of the lolly",
    },
    topColor: {
      control: {
        type: "color",
      },
      defaultValue: "#d52358",
      description: "Color/flavor of the top part of the lolly",
    },
    middleColor: {
      control: {
        type: "color",
      },
      defaultValue: "#e95946",
      description: "Color/flavor of the middle part of the lolly",
    },
    bottomColor: {
      control: {
        type: "color",
      },
      defaultValue: "#deaa43",
      description: "Color/flavor of the bottom part of the lolly",
    },
    recipientName: {
      control: {
        type: "text",
      },
      description: "Name of the recipient of the lolly",
    },
    message: {
      control: {
        type: "text",
      },
      description: "A message to the recipient",
    },
    sendersName: {
      control: {
        type: "text",
      },
      description: "Name of the sender of the lolly",
    },
  },
  decorators: [
    Story => (
      <div style={{ backgroundColor: "#21212b", padding: "3em" }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<DisplayLollyProps> = args => <DisplayLolly {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "1234",
  recipientName: "abc",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, eum? " +
    "Perspiciatis natus temporibus fuga nobis eveniet soluta et qui enim!",
  sendersName: "xyz",
};
