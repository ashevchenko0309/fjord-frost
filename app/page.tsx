import About from '../features/Home/About';
import Futures from '../features/Home/Futures';
import Products from '../features/Home/Products';
import CallToAction from '../features/Home/CallToAction';
import Steps from '../features/Home/Steps';
import Reviews from '../features/Home/Reviews';
import Banner from '../features/Home/Banner';
import { getProducts } from '../lib/shopify';
import {BUNDLED_PRODUCTS_TAG} from "../constants/products";

export const runtime = 'edge';

export const metadata = {
  title: 'Premium Skin Care Products | Frost-Fjord: Transform Your Skin',
  description:
    'Discover a range of luxurious skin care products at Frost-Fjord. Enhance your beauty routine with our premium creams, serums, and treatments. Transform your skin today!',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  const rawProducts = await getProducts({});
  const products = rawProducts.filter(({ tags }) => !tags.includes(BUNDLED_PRODUCTS_TAG))
  const bundledProduct = rawProducts.filter(({ tags }) => tags.includes(BUNDLED_PRODUCTS_TAG))

  return (
    <>
      <Banner products={products} bundledProduct={bundledProduct} />
      <About />
      <Futures />
      <Products products={products} />
      <CallToAction />
      <Steps products={products} bundledProduct={bundledProduct} />
      <Reviews />
    </>
  );
}
