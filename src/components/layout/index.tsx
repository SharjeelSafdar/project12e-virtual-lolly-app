import React, { FC } from "react";
// import { useStaticQuery, graphql } from "gatsby";

import Header from "../header";

const Layout: FC = ({ children }) => {
  // const data = useStaticQuery<QueryResponse>(
  //   graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           author {
  //             github
  //             name
  //           }
  //         }
  //       }
  //     }
  //   `
  // );
  const data: QueryResponse = {
    site: {
      siteMetadata: {
        author: {
          name: `Mian Muhammad Sharjeel Safdar`,
          github: `https://github.com/SharjeelSafdar/`,
        },
      },
    },
  };
  const author = data.site.siteMetadata.author;

  return (
    <>
      <Header />
      <div className="container">
        <main>{children}</main>
        <footer>
          <p>
            Hosted with{" "}
            <a
              href="https://netlify.com?utm_source=vlolly&amp;utm_medium=staticfirst-pnh&amp;utm_campaign=devex"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify
            </a>{" "}
            by{" "}
            <a href={author.github} target="_blank" rel="noopener noreferrer">
              {author.name}
            </a>
          </p>
          <p>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a
              href="https://www.gatsbyjs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gatsby
            </a>
          </p>
        </footer>
      </div>
    </>
  );
};

export default Layout;

type QueryResponse = {
  site: {
    siteMetadata: {
      author: {
        github: string;
        name: string;
      };
    };
  };
};
