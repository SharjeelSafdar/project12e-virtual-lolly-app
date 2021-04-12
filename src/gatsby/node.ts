// import { GatsbyNode } from "gatsby";
import { Lolly } from "../types";

// export const createPages: GatsbyNode["createPages"] = async ({
//   graphql,
//   actions,
// }) => {
//   const { data }: QueryResponse = await graphql(`
//     query GetAllLollies {
//       lolly {
//         getAllLollies {
//           id
//           topColor
//           middleColor
//           bottomColor
//           recipientName
//           message
//           sendersName
//         }
//       }
//     }
//   `);

//   if (data && data.lolly) {
//     const lollies = data.lolly.getAllLollies;
//     lollies.forEach(lolly => {
//       actions.createPage({
//         path: `/lolly/${lolly.id}`,
//         component: require.resolve("../templates/showLolly"),
//         context: {
//           ...lolly,
//         },
//       });
//     });
//   }
// };

export type QueryResponse = {
  data?: {
    lolly: {
      getAllLollies: Lolly[];
    };
  };
  errors?: any;
};
