import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import {
  SHOPIFY_CHECKOUT_ID_COOKIE,
  SHOPIFY_CHECKOUT_URL_COOKIE,
} from '@framework/const';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const cookieStore = cookies();
  const checkoutUrl = cookieStore.get(SHOPIFY_CHECKOUT_URL_COOKIE);
  console.log('cookies', res);

  if (checkoutUrl) {
    redirect(checkoutUrl.value);
  } else {
    redirect('/');
  }

  return NextResponse.json({ message: 'hello' });
}
