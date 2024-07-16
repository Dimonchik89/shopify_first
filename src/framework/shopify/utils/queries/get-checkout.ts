import { checkoutDetailsFragment } from '../common';

const getCheckoutQuery = `
query($checkoutId: ID!){
  node(id: $checkoutId) {
    ... on Checkout {
      ${checkoutDetailsFragment}
    }
  }
}
`;

export default getCheckoutQuery;
