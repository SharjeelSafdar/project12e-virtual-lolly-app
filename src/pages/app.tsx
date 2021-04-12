import React, { FC } from "react";
import { PageProps } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import DisplayLolly from "../components/displayLolly";
import { useGetLollyByIdQuery } from "../api";

const FrozenLolly: FC<PageProps> = ({ location, navigate }) => {
  const id = location.search.slice(4);
  const { data, error, loading } = useGetLollyByIdQuery({
    variables: { id },
  });

  if (error) {
    navigate("/404");
  }

  return (
    <Layout>
      <SEO title="Frozen Lolly" />
      {loading && <p>Loading...</p>}
      {!loading && !error && data && <DisplayLolly lolly={data?.getLolly} />}
    </Layout>
  );
};

export default FrozenLolly;
