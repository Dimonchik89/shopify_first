'use client';
import { FC, useEffect } from 'react';
import s from './Usernav.module.css';
import Link from 'next/link';
import { Bag as Cart, Heart } from '@components/icons';
import { useUi } from '@components/ui/context';
import useCart from '@framework/cart/use-cart';
import { LineItem } from '@common/types/cart';

const Usernav: FC = () => {
  const { openSidebar } = useUi();
  const { data } = useCart();

  useEffect(() => {
    console.log('data', data);
  }, [data]);

  const itemsCount =
    data?.lineItems.reduce((count: number, item: LineItem) => {
      return count + item.quantity;
    }, 0) ?? 0;

  return (
    <nav>
      <ul className={s.list}>
        <li className={s.item}>
          <Cart onClick={openSidebar} />
          {itemsCount > 0 && <span className={s.bagCount}>{itemsCount}</span>}
        </li>
        <li className={s.item}>
          <Link href="/wishlist">
            <Heart />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Usernav;
