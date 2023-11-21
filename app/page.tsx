import About from '../features/Home/About';
import Futures from '../features/Home/Futures';
import Products from '../features/Home/Products';
import CallToAction from '../features/Home/CallToAction';
import Steps from '../features/Home/Steps';
import Reviews from '../features/Home/Reviews';
import Banner from '../features/Home/Banner';
import { getProducts } from '../lib/shopify';
import {BUNDLED_PRODUCTS_TAG, FULL_PACK_BUNDLE_TAG, SIMPLE_PACK_BUNDLE_TAG} from "../constants/products";

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
    const fullPack = bundledProduct.filter(({ tags }) => tags.includes(FULL_PACK_BUNDLE_TAG))
    const simplePack = bundledProduct.filter(({ tags }) => tags.includes(SIMPLE_PACK_BUNDLE_TAG))

  return (
    <>
      <Banner products={products} bundledProduct={bundledProduct} />
      <About />
      <Futures />
      <Products products={products} />
      <CallToAction />
      <Steps products={products} fullPack={fullPack} simplePack={simplePack} />
      <Reviews />
    </>
  );
}
