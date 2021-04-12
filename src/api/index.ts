import {
  gql,
  useQuery,
  QueryHookOptions,
  useMutation,
  MutationHookOptions,
} from "@apollo/client";
import { Lolly, NewLollyFormValues } from "../types";

// **************************************
// Get Lolly by Id Query
// **************************************
export const GET_LOLLY_BY_ID = gql`
  query GetLollyById($id: ID!) {
    getLolly(id: $id) {
      id
      topColor
      middleColor
      bottomColor
      recipientName
      message
      sendersName
    }
  }
`;

export type GetLollyByIdQueryResponse = {
  getLolly: Lolly;
};

export type GetLollyByIdQueryVariables = {
  id: string;
};

export const useGetLollyByIdQuery = (
  baseOptions?: QueryHookOptions<
    GetLollyByIdQueryResponse,
    GetLollyByIdQueryVariables
  >
) => {
  return useQuery<GetLollyByIdQueryResponse, GetLollyByIdQueryVariables>(
    GET_LOLLY_BY_ID,
    baseOptions
  );
};

// **************************************
// Create New Lolly Mutation
// **************************************
export const CREATE_NEW_LOLLY = gql`
  mutation CreateNewBookmark(
    $topColor: String!
    $middleColor: String!
    $bottomColor: String!
    $recipientName: String!
    $message: String!
    $sendersName: String!
  ) {
    createLolly(
      topColor: $topColor
      middleColor: $middleColor
      bottomColor: $bottomColor
      recipientName: $recipientName
      message: $message
      sendersName: $sendersName
    )
  }
`;

export type CreateNewLollyMutationResponse = {
  createLolly: string;
};

export type CreateNewLollyMutationVariables = NewLollyFormValues;

export const useCreateLollyMutation = (
  baseOptions?: MutationHookOptions<
    CreateNewLollyMutationResponse,
    CreateNewLollyMutationVariables
  >
) => {
  return useMutation<
    CreateNewLollyMutationResponse,
    CreateNewLollyMutationVariables
  >(CREATE_NEW_LOLLY, { ...baseOptions });
};
