import Image from 'next/image';
import FacialCleanerImage from '../../../../assets/steps/facial-cleaner-mobile.png';
import AntioxidantImage from '../../../../assets/steps/antioxidant-face-gel-mobile.png';
import AntiAgeFaceDayCreamImage from '../../../../assets/steps/anti-age-face-day-cream-mobile.png';
import OilFreeHydrationFaceGelImage from '../../../../assets/steps/oil-free-hydrating-face-gel-mobile.png';
import RoutineFullPlantImage from '../../../../assets/routines/routine-full-plant.png';
import { FC } from 'react';
import { ROUTINES } from '../interfaces';

const MobilePresentation: FC<{ routine: ROUTINES }> = ({ routine }) => {
  if (routine === ROUTINES.FULL) {
    return (
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
            src={FacialCleanerImage}
            alt="facial cleaner"
            className="h-full w-full rounded-b-2xl object-cover md:rounded-l-2xl md:rounded-r-none"
            height={320}
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
              cream before applying to your face to protect you skin against pollution and radicals
            </p>
          </div>
          <Image
            src={AntioxidantImage}
            alt="antioxidant gace gel booster"
            className="h-full w-full rounded-b-2xl object-cover md:rounded-l-none md:rounded-r-2xl"
            height={320}
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
            src={AntiAgeFaceDayCreamImage}
            alt="anti age face day cream image"
            className="h-full w-full rounded-b-2xl object-cover md:rounded-l-2xl md:rounded-r-none"
            height={320}
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
              - this gel deeply hydrates, leaving it looking fresh and revitalized
            </p>
          </div>
          <Image
            src={OilFreeHydrationFaceGelImage}
            alt="oil free hydratuing face gel"
            className="h-full w-full rounded-b-2xl object-cover md:rounded-l-none md:rounded-r-2xl"
            height={320}
          />
        </div>
      </div>
    );
  }

  return (
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
            Apply premium Anti-age Face Day Cream gently to your skin for a youthful and revitalized
            appearance. Your fine lines fade and your skin becomes firmer with a radiant glow
            together with our anti-age formula
          </p>
        </div>
        <Image
          src={AntiAgeFaceDayCreamImage}
          alt="facial cleaner"
          className="h-full w-full rounded-b-2xl object-cover md:rounded-l-2xl md:rounded-r-none"
          height={300}
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
            Apply our Oil- free Hydrating Face Gel to you face for no more dry, tired-looking skin -
            this gel deeply hydrates, leaving it looking fresh and revitalized.
          </p>
        </div>
        <Image
          src={OilFreeHydrationFaceGelImage}
          alt="oil free hydratuing face gel"
          className="h-full w-full rounded-b-2xl object-cover md:rounded-l-none md:rounded-r-2xl"
          height={332}
        />
      </div>
      <div className="relative">
        <Image src={RoutineFullPlantImage} alt="simple routine plant" className="w-full rounded-2xl" height={300} />
      </div>
    </div>
  );
};

export default MobilePresentation;
