import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ApolloProvider } from "@apollo/client";

import NewLollyForm from ".";
import { apolloClient } from "../../context/apolloClient";

export default {
  title: "Components/New Lolly Form",
  component: NewLollyForm,
  decorators: [
    Story => (
      <ApolloProvider client={apolloClient}>
        <Story />
      </ApolloProvider>
    ),
  ],
} as Meta;

const Template: Story = args => <NewLollyForm {...args} />;

export const Default = Template.bind({});
Default.decorators = [
  Story => (
    <div style={{ padding: "3em", backgroundColor: "#21212b" }}>
      <Story />
    </div>
  ),
];
