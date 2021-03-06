const { ApolloServer, gql } = require("apollo-server-lambda");
const faunaDB = require("faunadb");
const q = faunaDB.query;

const faunaClient = new faunaDB.Client({
  secret: process.env.FAUNADB_SERVER_SECRET,
});

const typeDefs = gql`
  type Lolly {
    id: ID!
    topColor: String!
    middleColor: String!
    bottomColor: String!
    recipientName: String!
    message: String!
    sendersName: String!
  }
  type Query {
    hi: String!
    getAllLollies: [Lolly]!
    getLolly(id: ID!): Lolly!
  }
  type Mutation {
    createLolly(
      topColor: String!
      middleColor: String!
      bottomColor: String!
      recipientName: String!
      message: String!
      sendersName: String!
    ): ID!
  }
`;

const resolvers = {
  Query: {
    hi: () => {
      return "Hello, World";
    },
    getAllLollies: async () => {
      const res = await faunaClient.query(
        q.Paginate(q.Match(q.Index("all_lollies")))
      );
      return res.data.map(
        ([
          ref,
          topColor,
          middleColor,
          bottomColor,
          recipientName,
          message,
          sendersName,
        ]) => ({
          id: ref.id,
          topColor,
          middleColor,
          bottomColor,
          recipientName,
          message,
          sendersName,
        })
      );
    },
    getLolly: async (_, { id }) => {
      const res = await faunaClient.query(
        q.Get(q.Ref(q.Collection("lollies"), id))
      );
      return {
        id: res.ref.id,
        ...res.data,
      };
    },
  },
  Mutation: {
    createLolly: async (
      _,
      {
        topColor,
        middleColor,
        bottomColor,
        recipientName,
        message,
        sendersName,
      }
    ) => {
      const res = await faunaClient.query(
        q.Create(q.Collection("lollies"), {
          data: {
            topColor,
            middleColor,
            bottomColor,
            recipientName,
            message,
            sendersName,
          },
        })
      );
      return res.ref.id;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: false,
  introspection: true,
});

exports.handler = server.createHandler();
