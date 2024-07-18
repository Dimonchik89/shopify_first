import { ProductVariant, ProductOption } from './product';

export interface Discount {
  value: number;
}

export interface LineItem {
  id: string;
  variantId: string;
  productId: string;
  name: string;
  path: string;
  quantity: number;
  discounts: Discount[];
  options?: ProductOption[];
  variant: Partial<ProductVariant>;
}

export interface Cart {
  id: string;
  createdAt: string;
  currency: {
    code: string;
  };
  taxesIncluded: boolean;
  // taxes, discounts excluded
  lineItemsSubtotalPrice: number;
  // taxes, discounts included
  totalPrice: number;
  lineItems: any[];
  discounts: Discount[];
}
