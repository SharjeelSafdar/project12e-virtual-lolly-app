import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import GithubCornor, { GithubCornorProps } from ".";

export default {
  title: "Components/Github Cornor",
  component: GithubCornor,
  argTypes: {
    repoUrl: {
      defaultValue:
        "https://github.com/SharjeelSafdar/project12e-virtual-lolly-app",
      description: "URL of the Github Repository",
    },
  },
  decorators: [
    Story => (
      <div style={{ padding: "3em" }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<GithubCornorProps> = args => <GithubCornor {...args} />;

export const Default = Template.bind({});
Default.args = {
  repoUrl: "https://github.com/SharjeelSafdar/project12e-virtual-lolly-app",
};
