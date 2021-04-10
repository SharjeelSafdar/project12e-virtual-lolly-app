import React, { FC } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Lolly from "../components/lolly";

const IndexPage: FC = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="thumbs">
        <div className="lolly example">
          <Lolly
            topColor="#e97393"
            middleColor="#d23a62"
            bottomColor="#bb1161"
          />
        </div>
        <div className="lolly example">
          <Lolly
            topColor="#d52358"
            middleColor="#e95946"
            bottomColor="#deaa43"
          />
        </div>
        <div className="lolly example">
          <Lolly
            topColor="#97e665"
            middleColor="#8ccb4c"
            bottomColor="#a8d838"
          />
        </div>
        <div className="lolly example">
          <Lolly
            topColor="#feefd6"
            middleColor="#b65ae4"
            bottomColor="#c116c1"
          />
        </div>
        <div className="lolly example">
          <Lolly
            topColor="#cd2753"
            middleColor="#d5cfd1"
            bottomColor="#5ba3da"
          />
        </div>
      </div>
      <p>
        <Link to="/create-new" className="btn">
          Make a new lolly to send to a friend
        </Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
