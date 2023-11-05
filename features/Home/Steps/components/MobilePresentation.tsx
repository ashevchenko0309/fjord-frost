import Image from 'next/image';
import { FC } from 'react';
import { ROUTINES } from '../interfaces';
import useAddSetToCart from '../hooks';
import { Product } from '../../../../lib/shopify/types';
import ActionButton from './ActionButton';

const MobilePresentation: FC<{ routine: ROUTINES; products: Product[] }> = ({
  routine,
  products
}) => {
  const { message, actionWithVariant } = useAddSetToCart({ routine, products });
  if (routine === ROUTINES.FULL) {
    return (
      <div>
        <div className="mb-8 grid gap-6">
          <div className="flex flex-col rounded-2xl bg-neutral-10 md:flex-row md:items-center">
            <div className="flex flex-col gap-6 px-4 py-8 md:order-1 md:px-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-yellow px-8 py-1.5 text-xs font-semibold text-neutral-80">
                  Morning
                </div>
                <p className="font-header text-lg text-neutral-50">Step 1/3</p>
              </div>
              <p className="pr-10">
                Gently wash face with Facial Cleanser to clean skin without clogging pores to remove
                excess oil{' '}
              </p>
            </div>
            <Image
              src="https://cdn.shopify.com/s/files/1/0755/1906/6456/files/facial-cleaner-mobile_png.webp?v=1699094684"
              unoptimized
              alt="facial cleaner"
              className="h-full w-full rounded-b-2xl object-none md:rounded-l-2xl md:rounded-r-none"
              height={320}
              width={343}
            />
          </div>
          <div className="flex flex-col rounded-2xl bg-neutral-10 md:flex-row md:items-center">
            <div className="flex w-full flex-col gap-6 px-4 py-8 md:px-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-yellow px-8 py-1.5 text-xs font-semibold text-neutral-80">
                  Morning
                </div>
                <p className="font-header text-lg text-neutral-50">Step 2/3</p>
              </div>
              <p className="pr-10">
                Apply 2-3 drops of our Antioxidant Face Gel Booster into our premium anti-age face
                cream before applying to your face to protect you skin against pollution and
                radicals
              </p>
            </div>
            <Image
              unoptimized
              src="https://cdn.shopify.com/s/files/1/0755/1906/6456/files/antioxidant-face-gel-mobile_png.webp?v=1699094684"
              alt="antioxidant gace gel booster"
              className="h-full w-full rounded-b-2xl object-none md:rounded-l-none md:rounded-r-2xl"
              height={320}
              width={343}
            />
          </div>
          <div className="flex flex-col rounded-2xl bg-neutral-10 md:flex-row md:items-center">
            <div className="flex w-full flex-col gap-6 px-4 py-8 md:order-1 md:px-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-yellow px-8 py-1.5 text-xs font-semibold text-neutral-80">
                  Morning
                </div>
                <p className="font-header text-lg text-neutral-50">Step 3/3</p>
              </div>
              <p className="pr-10">
                Apply premium Anti-age Face Day Cream gently to your skin for a youthful and
                revitalized appearance. Your fine lines fade and your skin becomes firmer with a
                radiant glow together with our anti-age formula
              </p>
            </div>
            <Image
              unoptimized
              src="https://cdn.shopify.com/s/files/1/0755/1906/6456/files/anti-age-face-day-cream-mobile_png.webp?v=1699094685"
              alt="anti age face day cream image"
              className="h-full w-full rounded-b-2xl object-none md:rounded-l-2xl md:rounded-r-none"
              height={320}
              width={343}
            />
          </div>
          <div className="flex flex-col rounded-2xl bg-neutral-10 md:flex-row md:items-center">
            <div className="flex w-full flex-col gap-6 px-4 py-8 md:px-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-blue px-8 py-1.5 text-xs font-semibold text-neutral-80">
                  Evening
                </div>
                <p className="font-header text-lg text-neutral-50">Step 1/1</p>
              </div>
              <p className="pr-10">
                Apply our Oil- free Hydrating Face Gel to you face for no more dry, tired-looking
                skin - this gel deeply hydrates, leaving it looking fresh and revitalized
              </p>
            </div>
            <Image
              unoptimized
              src="https://cdn.shopify.com/s/files/1/0755/1906/6456/files/oil-free-hydrating-face-gel-mobile_png.webp?v=1699094684"
              alt="oil free hydratuing face gel"
              className="h-full w-full rounded-b-2xl object-none md:rounded-l-none md:rounded-r-2xl"
              height={320}
              width={343}
            />
          </div>
        </div>
        <form action={actionWithVariant}>
          <ActionButton />
          <p aria-live="polite" className="sr-only" role="status">
            {message}
          </p>
        </form>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8 grid gap-6">
        <div className="flex flex-col rounded-2xl bg-neutral-10 md:flex-row md:items-center">
          <div className="flex flex-col gap-6 px-4 py-8 md:order-1 md:px-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-yellow px-8 py-1.5 text-xs font-semibold text-neutral-80">
                Morning
              </div>
              <p className="font-header text-lg text-neutral-50">Step 1/1</p>
            </div>
            <p className="pr-10">
              Apply premium Anti-age Face Day Cream gently to your skin for a youthful and
              revitalized appearance. Your fine lines fade and your skin becomes firmer with a
              radiant glow together with our anti-age formula
            </p>
          </div>
          <Image
            unoptimized
            src="https://cdn.shopify.com/s/files/1/0755/1906/6456/files/anti-age-face-day-cream-mobile_png.webp?v=1699094685"
            alt="facial cleaner"
            className="h-full w-full rounded-b-2xl object-none md:rounded-l-2xl md:rounded-r-none"
            height={320}
            width={343}
          />
        </div>
        <div className="flex flex-col rounded-2xl bg-neutral-10 md:flex-row md:items-center">
          <div className="flex w-full flex-col gap-6 px-4 py-8 md:px-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-blue px-8 py-1.5 text-xs font-semibold text-neutral-80">
                Evening
              </div>
              <p className="font-header text-lg text-neutral-50">Step 1/1</p>
            </div>
            <p className="pr-10">
              Apply our Oil- free Hydrating Face Gel to you face for no more dry, tired-looking skin
              - this gel deeply hydrates, leaving it looking fresh and revitalized.
            </p>
          </div>
          <Image
            unoptimized
            src="https://cdn.shopify.com/s/files/1/0755/1906/6456/files/oil-free-hydrating-face-gel-mobile_png.webp?v=1699094684"
            alt="oil free hydratuing face gel"
            className="h-full w-full rounded-b-2xl object-none md:rounded-l-none md:rounded-r-2xl"
            height={320}
            width={343}
          />
        </div>
        <div className="relative">
          <Image
            src="https://cdn.shopify.com/s/files/1/0755/1906/6456/files/simple-routine-plant_png.webp?v=1699094633"
            alt="simple routine plant"
            className="w-full rounded-2xl"
            height={320}
            width={343}
            unoptimized
          />
        </div>
      </div>
      <form action={actionWithVariant}>
        <ActionButton />
        <p aria-live="polite" className="sr-only" role="status">
          {message}
        </p>
      </form>
    </div>
  );
};

export default MobilePresentation;
