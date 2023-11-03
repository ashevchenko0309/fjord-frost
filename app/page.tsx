import About from "../features/Home/About";
import Futures from "../features/Home/Futures";
import Products from "../features/Home/Products";
import CallToAction from "../features/Home/CallToAction";
import Steps from "../features/Home/Steps";
import Reviews from "../features/Home/Reviews";
import Banner from "../features/Home/Banner";
import {getProducts} from "../lib/shopify";

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
    const products = await getProducts({});

  return (
    <>
      <Banner />
      <About />
      <Futures />
      <Products products={products} />
      <CallToAction />
      <Steps />
      <Reviews />
    </>
  );
}
