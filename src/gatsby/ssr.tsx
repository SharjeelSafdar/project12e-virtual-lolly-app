import React from "react";
import { GatsbyBrowser } from "gatsby";
import { ApolloProvider } from "@apollo/client";

import { apolloClient } from "../context/apolloClient";

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => <ApolloProvider client={apolloClient}>{element}</ApolloProvider>;
