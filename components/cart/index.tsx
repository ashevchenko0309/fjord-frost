import {getCart, getProductById} from 'lib/shopify';
import { cookies } from 'next/headers';
import CartModal from './modal';
import {BUNDLED_PRODUCTS_TAG} from "../../constants/products";
import {Product} from "../../lib/shopify/types";

export default async function Cart() {
  const cartId = cookies().get('cartId')?.value;
  let cart;

  if (cartId) {
    cart = await getCart(cartId);
  }

  const bundledProductIndex = cart?.lines?.findIndex((next) => next.merchandise.product.tags.includes(BUNDLED_PRODUCTS_TAG) && next.merchandise.product.bundledProducts)

  const lines = cart?.lines?.reduce<Promise<Product>[]>((acc, next) => {
    if(next.merchandise.product.tags.includes(BUNDLED_PRODUCTS_TAG) && next.merchandise.product.bundledProducts) {

      const products = JSON.parse(next.merchandise.product.bundledProducts.value) as Array<string>

      return [...acc, ...products.map((id) => getProductById(id) as unknown as Promise<Product>)]
    }

    return acc
  }, [])

  const innerBundledProducts = await Promise.all(lines ?? [])

  if(bundledProductIndex !== undefined && bundledProductIndex >= 0 && cart?.lines[bundledProductIndex]) {
    cart.lines[bundledProductIndex]!.merchandise.bundled = innerBundledProducts
  }

  return <CartModal cart={cart} />;
}
