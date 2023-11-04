import Image from 'next/image';
import { FC } from 'react';
import { ROUTINES } from '../interfaces';

const DesktopPresentation: FC<{ routine: ROUTINES }> = ({ routine }) => {
  if (routine === ROUTINES.FULL) {
    return (
      <div className="mb-8 grid grid-cols-12 gap-8">
        <div className="col-span-8 flex flex-col gap-8">
          <div className="flex items-center rounded-2xl bg-neutral-10">
            <Image
              src="https://cdn.shopify.com/s/files/1/0755/1906/6456/files/facial-cleaner_png_334cd1b6-dee7-4fb9-951b-a21060f13ca9.webp?v=1699094684"
              alt="facial cleaner"
              className="aspect-square h-full shrink-0 rounded-l-2xl object-none object-top"
              unoptimized
              height={256}
              width={256}
            />
            <div className="flex flex-col gap-6 p-8">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-yellow px-8 py-1.5 text-xs font-semibold text-neutral-80">
                  Morning
                </div>
                <p className="font-header text-lg text-neutral-50">Step 1/3</p>
              </div>
              <p className="text-lg leading-6 text-neutral-100">
                Gently wash face with Facial Cleanser to clean skin without clogging pores to remove
                excess oil
              </p>
            </div>
          </div>
          <div className="flex items-center rounded-2xl bg-neutral-10">
            <div className="flex flex-col gap-6 p-8">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-yellow px-8 py-1.5 text-xs font-semibold text-neutral-80">
                  Morning
                </div>
                <p className="font-header text-lg text-neutral-50">Step 2/3</p>
              </div>
              <p className="text-lg leading-6 text-neutral-100">
                Apply 2-3 drops of our Antioxidant Face Gel Booster into our premium anti-age face
                cream before applying to your face to protect you skin against pollution and
                radicals
              </p>
            </div>
            <Image
              src="https://cdn.shopify.com/s/files/1/0755/1906/6456/files/antioxidant_png.webp?v=1699094685"
              alt="antioxidant gace gel booster"
              className="aspect-square h-full shrink-0 rounded-r-2xl object-none object-top"
              unoptimized
              height={256}
              width={256}
            />
          </div>
          <div className="flex items-center rounded-2xl bg-neutral-10">
            <Image
              src="https://cdn.shopify.com/s/files/1/0755/1906/6456/files/anti-age-face_png.webp?v=1699094684"
              alt="anti age face day cream image"
              className="aspect-square h-full w-64 shrink-0 rounded-l-2xl object-none object-top"
              unoptimized
              height={256}
              width={256}
            />
            <div className="flex flex-col gap-6 p-8">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-yellow px-8 py-1.5 text-xs font-semibold text-neutral-80">
                  Morning
                </div>
                <p className="font-header text-lg text-neutral-50">Step 3/3</p>
              </div>
              <p className="text-lg leading-6 text-neutral-100">
                Apply premium Anti-age Face Day Cream gently to your skin for a youthful and
                revitalized appearance. Your fine lines fade and your skin becomes firmer with a
                radiant glow together with our anti-age formula
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="flex h-full flex-col rounded-2xl bg-neutral-10">
            <Image
              src="https://cdn.shopify.com/s/files/1/0755/1906/6456/files/oil-free-hydrating-evening_png.webp?v=1699094685"
              alt="oil free hydratuing face gel"
              className="h-full max-h-[584px] w-full rounded-t-2xl object-cover"
              unoptimized
              height={584}
              width={320}
            />
            <div className="flex w-full flex-col gap-6 p-8">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-blue px-8 py-1.5 text-xs font-semibold text-neutral-80">
                  Evening
                </div>
                <p className="font-header text-lg text-neutral-50">Step 1/1</p>
              </div>
              <p className="text-lg leading-6 text-neutral-100">
                Apply our Oil- free Hydrating Face Gel to you face for no more dry, tired-looking
                skin - this gel deeply hydrates, leaving it looking fresh and revitalized
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-8 grid grid-cols-12 gap-8">
      <div className="col-span-8 flex flex-col gap-8">
        <div className="flex items-center rounded-2xl bg-neutral-10">
          <Image
            src="https://cdn.shopify.com/s/files/1/0755/1906/6456/files/anti-age-face_png.webp?v=1699094684"
            alt="facial cleaner"
            className="aspect-square h-full shrink-0 rounded-l-2xl object-none object-top"
            unoptimized
            height={256}
            width={256}
          />
          <div className="flex flex-col gap-6 p-8">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-yellow px-8 py-1.5 text-xs font-semibold text-neutral-80">
                Morning
              </div>
              <p className="font-header text-lg text-neutral-50">Step 1/1</p>
            </div>
            <p className="text-lg leading-6 text-neutral-100">
              Apply premium Anti-age Face Day Cream gently to your skin for a youthful and
              revitalized appearance. Your fine lines fade and your skin becomes firmer with a
              radiant glow together with our anti-age formula
            </p>
          </div>
        </div>
        <Image
          src="https://cdn.shopify.com/s/files/1/0755/1906/6456/files/routine-full-plant_png.webp?v=1699094634"
          alt="simple routine plant"
          className="aspect-video h-full max-h-[300px] w-full shrink-0 rounded-2xl object-none object-top"
          width={744}
          height={300}
        />
      </div>
      <div className="col-span-4">
        <div className="flex h-full flex-col justify-between rounded-2xl bg-neutral-10">
          <div className="flex w-full flex-col gap-6 p-8">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-blue px-8 py-1.5 text-xs font-semibold text-neutral-80">
                Evening
              </div>
              <p className="font-header text-lg text-neutral-50">Step 1/1</p>
            </div>
            <p className="text-lg leading-6 text-neutral-100">
              Apply our Oil- free Hydrating Face Gel to you face for no more dry, tired-looking skin
              - this gel deeply hydrates, leaving it looking fresh and revitalized.
            </p>
          </div>
          <Image
            src="https://cdn.shopify.com/s/files/1/0755/1906/6456/files/oil-free-evening-step-2_png.webp?v=1699094684"
            alt="oil free hydratuing face gel"
            className="h-full max-h-[332px] w-full rounded-b-2xl object-none xl:object-[0%_10%]"
            unoptimized
            height={332}
            width={320}
          />
        </div>
      </div>
    </div>
  );
};

export default DesktopPresentation;
