import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";

import Lolly, { LollyProps } from ".";

export default {
  title: "Components/Lolly",
  component: Lolly,
  argTypes: {
    topColor: {
      control: {
        type: "color",
      },
      defaultValue: "#d52358",
      description: "Color/flavor of the top part of the lolly.",
    },
    middleColor: {
      control: {
        type: "color",
      },
      defaultValue: "#e95946",
      description: "Color/flavor of the middle part of the lolly.",
    },
    bottomColor: {
      control: {
        type: "color",
      },
      defaultValue: "#deaa43",
      description: "Color/flavor of the bottom part of the lolly.",
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

const Template: Story<LollyProps> = args => <Lolly {...args} />;

export const Default = Template.bind({});

export const Red = Template.bind({});
Red.args = {
  topColor: "#e97393",
  middleColor: "#d23a62",
  bottomColor: "#bb1161",
};

export const Green = Template.bind({});
Green.args = {
  topColor: "#97e665",
  middleColor: "#8ccb4c",
  bottomColor: "#a8d838",
};

export const Mixed = Template.bind({});
Mixed.args = {
  topColor: "#feefd6",
  middleColor: "#b65ae4",
  bottomColor: "#c116c1",
};

export const French = Template.bind({});
French.args = {
  topColor: "#cd2753",
  middleColor: "#d5cfd1",
  bottomColor: "#5ba3da",
};

export const Tropical = Template.bind({});
Tropical.args = {
  topColor: "#ed265b",
  middleColor: "#f77249",
  bottomColor: "#f5c64d",
};
