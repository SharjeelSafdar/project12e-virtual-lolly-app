import React from "react";
import { WrapRootElementBrowserArgs } from "gatsby";
import { ApolloProvider } from "@apollo/client";

import { apolloClient } from "../context/apolloClient";

export const wrapRootElement = ({ element }: WrapRootElementBrowserArgs) => (
  <ApolloProvider client={apolloClient}>{element}</ApolloProvider>
);
