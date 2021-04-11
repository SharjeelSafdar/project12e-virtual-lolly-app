import {
  gql,
  // useQuery,
  // QueryHookOptions,
  useMutation,
  MutationHookOptions,
} from "@apollo/client";
import { NewLollyFormValues } from "../types";

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
