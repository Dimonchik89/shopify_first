import { checkoutDetailsFragment } from '../common';

const checkoutLineItemRemoveMutation = /* GraphQL */ `
  mutation($checkoutId: ID!, $lineItemIds: [ID!]!) {
    checkoutLineItemsRemove(
      checkoutId: $checkoutId
      lineItemIds: $lineItemIds
    ) {
      checkoutUserErrors {
        field
        message
      }
      checkout {
       ${checkoutDetailsFragment}
      }
    }
  }
`;
export default checkoutLineItemRemoveMutation;
