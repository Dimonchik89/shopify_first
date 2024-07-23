import useCart, { UseCart } from '@common/cart/use-cart';
import { Cart } from '@common/types/cart';
import { SWRHook } from '@common/types/hooks';
import { Checkout } from '@framework/schema';
import {
  checkoutToCart,
  createCheckout,
  getCheckoutQuery,
} from '@framework/utils';
import { useMemo } from 'react';

export type UseCartHookDescriptor = {
  fetcherInput: {
    checoutId: string;
  };
  fetcherOutput: {
    node: Checkout;
  };
  data: Cart;
};

export default useCart as UseCart<typeof handler>;

export const handler: SWRHook<UseCartHookDescriptor> = {
  fetcherOptions: {
    query: getCheckoutQuery,
  },
  async fetcher({ fetch, options, input: { checoutId } }) {
    let checkout: Checkout;

    if (checoutId) {
      const { data } = await fetch({
        ...options,
        variables: {
          checoutId,
        },
      });

      checkout = data.node;
    } else {
      checkout = await createCheckout(fetch as any);
    }

    const cart = checkoutToCart(checkout);
    return cart;
  },
  useHook:
    ({ useData }) =>
    () => {
      const result = useData({
        swrOptions: {
          revalidateOnFocus: false,
        },
      });

      return useMemo(() => {
        return {
          ...result,
          isEmpty: (result.data?.lineItems.length ?? 0) <= 0,
        };
      }, [result]);
    },
};
