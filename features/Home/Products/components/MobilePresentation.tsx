'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import FacialCleanserImage from '../../../../assets/products/studio/facial-cleaner.png';
import OilFreeHydratingFaceGelImage from '../../../../assets/products/studio/oil-free-hydrating-face-gel.png';
import AntiAgeFaceDayCreamImage from '../../../../assets/products/studio/anti-age-face-day-cream.png';
import AntioxidantImage from '../../../../assets/products/studio/antioxidant-face-gel-booster.png';
import clsx from 'clsx';
import Card from './Card';
import { useState } from 'react';

const MobilePresentation = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={24}
        breakpoints={{
          768: {
            slidesPerView: 2
          }
        }}
        onSlideChange={(swiper) => {
          setProgress(swiper.progress);
          setActiveSlide(swiper.realIndex);
        }}
      >
        <SwiperSlide>
          <Card
            title="Facial Cleanser especially for men"
            description="It's designed to effortlessly clean your face"
            price="€35.00"
            src={FacialCleanserImage}
            alt="Facial Cleanser especially for men"
            url="#"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            title="Oil-Free Hydrating Face Gel"
            description="Nordic-inspired, no-fuss face gel"
            price="€35.00"
            src={OilFreeHydratingFaceGelImage}
            alt="Oil-Free Hydrating Face Gel"
            url="#"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            title="Premium anti-Age face Day Cream "
            description="Fine lines appear diminished"
            price="€59.00"
            src={AntiAgeFaceDayCreamImage}
            alt="Premium anti-Age face Day Cream "
            url="#"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            title="Antioxidant Face Gel Booster"
            description="Hydrating and fresh"
            price="€49.00"
            src={AntioxidantImage}
            alt="Antioxidant Face Gel Booster"
            url="#"
          />
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
