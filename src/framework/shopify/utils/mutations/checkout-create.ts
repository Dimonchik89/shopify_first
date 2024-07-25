import { checkoutDetailsFragment } from '../common';

const checkoutCreate = `
    mutation checkoutCreate($input: CheckoutCreateInput = {}) {
        checkoutCreate(input: $input) {
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
export default checkoutCreate;
