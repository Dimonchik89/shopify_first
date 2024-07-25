import { checkoutDetailsFragment } from '../common';

const checkoutLineItemsAdd = `mutation(
  $checkoutId: ID!,
  $lineItems: [CheckoutLineItemInput!]!) {
  checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {
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

export default checkoutLineItemsAdd;
