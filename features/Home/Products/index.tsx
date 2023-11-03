import dynamic from 'next/dynamic';
import Card from './components/Card';
import {FC} from "react";
import {Product} from "../../../lib/shopify/types";

const MobilePresentation = dynamic(() => import('./components/MobilePresentation'));

const Products: FC<{ products: Product[] }> = ({ products }) => {
  return (
    <section id="products" className="px-4 py-16 lg:pb-36 lg:pt-14 lg:px-20 xl:py-40">
      <h2 className="mb-8 text-center font-header text-4xl font-semibold leading-10 md:mb-12 md:text-5xl lg:mb-14">
        Products
      </h2>
      <div className="hidden lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-10 xl:gap-20">
          {products.map(({ id, title, handle, presentation, priceRange: { maxVariantPrice: { amount, currencyCode } } }) => (
              <div key={id}>
                  <Card
                      title={title}
                      description="It's designed to effortlessly clean your face"
                      price={`${currencyCode} ${amount}`}
                      src={presentation?.value ?? ''}
                      alt={title}
                      url={`/product/${handle}`}
                  />
              </div>
          ))}
        {/*<div>*/}
        {/*  <Card*/}
        {/*    title="Facial Cleanser especially for men"*/}
        {/*    description="It's designed to effortlessly clean your face"*/}
        {/*    price="€35.00"*/}
        {/*    src={FacialCleanserImage}*/}
        {/*    alt="Facial Cleanser especially for men"*/}
        {/*    url="#"*/}
        {/*  />*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <Card*/}
        {/*    title="Oil-Free Hydrating Face Gel"*/}
        {/*    description="Nordic-inspired, no-fuss face gel"*/}
        {/*    price="€35.00"*/}
        {/*    src={OilFreeHydratingFaceGelImage}*/}
        {/*    alt="Oil-Free Hydrating Face Gel"*/}
        {/*    url="#"*/}
        {/*  />*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <Card*/}
        {/*    title="Premium anti-Age face Day Cream "*/}
        {/*    description="Fine lines appear diminished"*/}
        {/*    price="€59.00"*/}
        {/*    src={AntiAgeFaceDayCreamImage}*/}
        {/*    alt="Premium anti-Age face Day Cream "*/}
        {/*    url="#"*/}
        {/*  />*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <Card*/}
        {/*    title="Antioxidant Face Gel Booster"*/}
        {/*    description="Hydrating and fresh"*/}
        {/*    price="€49.00"*/}
        {/*    src={AntioxidantImage}*/}
        {/*    alt="Antioxidant Face Gel Booster"*/}
        {/*    url="#"*/}
        {/*  />*/}
        {/*</div>*/}
      </div>
      <div className="lg:hidden">
        <MobilePresentation />
      </div>
    </section>
  );
};

export default Products;
