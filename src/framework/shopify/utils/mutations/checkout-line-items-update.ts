import { checkoutDetailsFragment } from '../common';

const checkoutLineItemUpdateMutation = /* GraphQL */ `
  mutation($checkoutId: ID!, $lineItems: [CheckoutLineItemUpdateInput!]!) {
    checkoutLineItemsUpdate(checkoutId: $checkoutId, lineItems: $lineItems) {
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
export default checkoutLineItemUpdateMutation;
