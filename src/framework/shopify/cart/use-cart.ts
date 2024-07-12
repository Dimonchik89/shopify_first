import useCart from '@common/cart/use-cart';
import { createCheckout } from '@framework/utils';

export default useCart;

export const handler = {
  fetchOptions: {
    // get checout query
    query: 'query { hello }',
  },
  async fetcher({ fetch, options, input: { checoutId } }: any) {
    let checkout;

    if (checoutId) {
      const { data } = await fetch({
        ...options,
      });

      checkout = data.node;
    } else {
      checkout = await createCheckout(fetch);
    }

    return checkout;
  },
  useHook: ({ useData }: any) => {
    const data = useData();
    return {
      data,
    };
  },
};
