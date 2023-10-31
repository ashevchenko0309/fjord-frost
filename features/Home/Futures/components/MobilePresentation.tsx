'use client';
import OilFreeHydratingFaceGelImage from '../../../../assets/products/on-grass/face-gel.png';
import AntioxidantImage from '../../../../assets/products/on-grass/antioxidant.png';
import AntiAgeFaceDayCreamImage from '../../../../assets/products/on-grass/anti-age-face-day-cream.png';
import FacialCleanserImage from '../../../../assets/products/on-grass/facial-cleanser.png';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { OutlineButton } from '../../../../components/uiKit/Button/Button';
import { useState } from 'react';
import clsx from 'clsx';

const MobilePresentation = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  return (
    <>
      <Swiper
        slidesPerView={1.8}
        spaceBetween={24}
        breakpoints={{
          768: {
            slidesPerView: 2.4
          }
        }}
        onSlideChange={(swiper) => {
          setProgress(swiper.progress);
          setActiveSlide(swiper.realIndex);
        }}
      >
        <SwiperSlide>
          <div className="pb-8">
            <div className="relative mb-4">
              <Image
                src={OilFreeHydratingFaceGelImage}
                alt="Oil-free hydrating face gel"
                className="md:w-full"
              />
              <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black to-60%" />
              <p className="absolute bottom-8 w-full text-center font-header text-2xl font-semibold leading-10 text-neutral-10">
                Hydrating
              </p>
            </div>
            <OutlineButton text="Discover" className="mx-auto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pb-8">
            <div className="relative mb-4">
              <Image
                src={AntioxidantImage}
                alt="Antioxidant face gel booster"
                className="md:w-full"
              />
              <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black to-60%" />
              <p className="absolute bottom-8 w-full text-center font-header text-2xl font-semibold leading-10 text-neutral-10">
                Moisturizing
              </p>
            </div>
            <OutlineButton text="Discover" className="mx-auto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pb-8">
            <div className="relative mb-4">
              <Image
                src={AntiAgeFaceDayCreamImage}
                alt="Anti-age face day cream"
                className="md:w-full"
              />
              <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black to-60%" />
              <p className="absolute bottom-8 w-full text-center font-header text-2xl font-semibold leading-10 text-neutral-10">
                Anti-aging
              </p>
            </div>
            <OutlineButton text="Discover" className="mx-auto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pb-8">
            <div className="relative mb-4">
              <Image src={FacialCleanserImage} alt="Facial cleanser" className="md:w-full" />
              <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black to-60%" />
              <p className="absolute bottom-8 w-full text-center font-header text-2xl font-semibold leading-10 text-neutral-10">
                Cleansing
              </p>
            </div>
            <OutlineButton text="Discover" className="mx-auto" />
          </div>
        </SwiperSlide>
      </Swiper>
      <ul className="flex h-1 items-center justify-center gap-8">
        <li className="relative">
          <span
            className={clsx(
              'absolute w-5',
              activeSlide === 0 ? '-mt-px h-1 bg-primary-main' : 'h-0.5 bg-primary-border'
            )}
          />
        </li>
        <li className="relative">
          <span
            className={clsx(
              'absolute w-5',
              activeSlide > 0 && progress < 0.9
                ? '-mt-px h-1 bg-primary-main'
                : 'h-0.5 bg-primary-border'
            )}
          />
        </li>
        <li className="relative">
          <span
            className={clsx(
              'absolute w-5',
              progress >= 0.9 ? '-mt-px h-1 bg-primary-main' : 'h-0.5 bg-primary-border'
            )}
          />
        </li>
      </ul>
    </>
  );
};

export default MobilePresentation;
