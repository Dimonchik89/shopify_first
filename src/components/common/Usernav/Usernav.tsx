'use client';
import { FC } from 'react';
import s from './Usernav.module.css';
import Link from 'next/link';
import { Bag as Cart, Heart } from '@components/icons';
import { useUi } from '@components/ui/context';
import useCart from '@framework/cart/use-cart';

const Usernav: FC = () => {
  const { openSidebar } = useUi();
  const { data } = useCart();

  console.log('data', data);

  return (
    <nav>
      <ul className={s.list}>
        <li className={s.item}>
          <Cart onClick={openSidebar} />
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
