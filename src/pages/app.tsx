import React, { FC } from "react";
import { PageProps } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import App from "../components/app";

const FrozenLolly: FC<PageProps> = ({ location }) => {
  const id = location.search.slice(4);

  return (
    <Layout>
      <SEO title="Frozen Lolly" />
      <App lollyId={id} />
    </Layout>
  );
};

export default FrozenLolly;
