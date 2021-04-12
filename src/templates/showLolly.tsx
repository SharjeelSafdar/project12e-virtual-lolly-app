import React, { FC } from "react";
import { PageProps } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import DisplayLolly from "../components/displayLolly";
import { Lolly } from "../types";

const FrozenLolly: FC<PageProps<object, Lolly>> = ({ pageContext: lolly }) => {
  return (
    <Layout>
      <SEO title="Frozen Lolly" />
      <DisplayLolly lolly={lolly} />
    </Layout>
  );
};

export default FrozenLolly;
