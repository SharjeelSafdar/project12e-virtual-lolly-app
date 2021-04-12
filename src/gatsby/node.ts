import { GatsbyNode } from "gatsby";
import { Lolly } from "../types";

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { data }: QueryResponse = await graphql(`
    query GetAllLollies {
      lolly {
        getAllLollies {
          id
          topColor
          middleColor
          bottomColor
          recipientName
          message
          sendersName
        }
      }
    }
  `);
  const lollies = data?.lolly.getAllLollies;

  if (lollies) {
    lollies.forEach(lolly => {
      actions.createPage({
        path: `/lolly/${lolly.id}`,
        component: require.resolve("../templates/showLolly"),
        context: {
          ...lolly,
        },
      });
    });
  }
};

type QueryResponse = {
  data?: {
    lolly: {
      getAllLollies: Lolly[];
    };
  };
  errors?: any;
};
