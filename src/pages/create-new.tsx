import React, { FC } from "react";
import { ApolloProvider } from "@apollo/client";

import { apolloClient } from "../context/apolloClient";
import Layout from "../components/layout";
import SEO from "../components/seo";
import NewLollyForm from "../components/newLollyForm";

const CreateNew: FC = () => {
  return (
    <Layout>
      <SEO title="Create New Lolly" />
      <ApolloProvider client={apolloClient}>
        <NewLollyForm />
      </ApolloProvider>
    </Layout>
  );
};

export default CreateNew;
