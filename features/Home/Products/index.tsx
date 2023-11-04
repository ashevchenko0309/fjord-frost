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
          {products.map(({ id, title, handle, presentation, presentation_title, presentation_description, priceRange: { maxVariantPrice: { amount, currencyCode } } }) => (
              <div key={id}>
                  <Card
                      title={presentation_title?.value ?? title}
                      description={presentation_description?.value ?? ''}
                      price={`${currencyCode} ${amount}`}
                      src={presentation?.value ?? ''}
                      alt={title}
                      url={`/product/${handle}`}
                  />
              </div>
          ))}
      </div>
      <div className="lg:hidden">
        <MobilePresentation products={products} />
      </div>
    </section>
  );
};

export default Products;
