import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import Footer from 'components/layout/footer';
import ProductDescription from 'features/Product/ProductDescription';
import { HIDDEN_PRODUCT_TAG } from 'lib/constants';
import { getProduct } from 'lib/shopify';
import { Image } from 'lib/shopify/types';
import ProductImages from 'features/Product/ProductImages';
import ProductCertificates from '../../../features/Product/ProductCertificates';
import CallToAction from '../../../features/Home/CallToAction';

export const runtime = 'edge';

export async function generateMetadata({
  params
}: {
  params: { handle: string };
}): Promise<Metadata> {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable
      }
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt
            }
          ]
        }
      : null
  };
}

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      '@type': 'AggregateOffer',
      availability: product.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd)
        }}
      />
      <div className="lg:flex lg:flex-row lg:gap-[72px] xl:px-24">
        <div className="lg:w-1/2">
          <ProductImages
            images={product.images.map((image: Image) => ({
              src: image.url,
              altText: image.altText
            }))}
          />
          <div className="hidden lg:block">
            {product.certificates && (
                <ProductCertificates certificates={product.certificates.value} />
            )}
          </div>
        </div>
        <div className="lg:w-1/2 lg:pt-16">
          <ProductDescription product={product} />
        </div>
        <div className="block lg:hidden">
          {product.certificates && (
              <ProductCertificates certificates={product.certificates.value} />
          )}
        </div>
      </div>
      <div className="my-16">
        <CallToAction />
      </div>
    </>
  );
}
