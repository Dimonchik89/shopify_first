import useCart from '@common/cart/use-cart';
import { createCheckout, getCheckoutQuery } from '@framework/utils';
import { useMemo } from 'react';

export default useCart;

export const handler = {
  fetchOptions: {
    query: getCheckoutQuery,
  },
  async fetcher({ fetch, options, input: { checoutId } }: any) {
    let checkout;

    if (checoutId) {
      const { data } = await fetch({
        ...options,
        variables: {
          checoutId,
        },
      });

      checkout = data.node;
    } else {
      checkout = await createCheckout(fetch);
    }

    // Normalize checkout!
    return checkout;
  },
  useHook: ({ useData }: any) => {
    const data = useData({
      swrOptions: {
        revalidateOnFocus: false,
      },
    });

    return useMemo(() => {
      return data;
    }, [data]);
  },
};
