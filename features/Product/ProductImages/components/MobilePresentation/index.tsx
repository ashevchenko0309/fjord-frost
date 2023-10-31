'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import FrontImage from '../../../../../assets/products/gallery/anti-age-face-day-cream/front.png';
import BackWithBoxImage from '../../../../../assets/products/gallery/anti-age-face-day-cream/back-with-box.png';
import FrontWithBoxImage from '../../../../../assets/products/gallery/anti-age-face-day-cream/front-with-box.png';
import StudioImage from '../../../../../assets/products/gallery/anti-age-face-day-cream/studio.png';
import clsx from 'clsx';
import { useState } from 'react';
import Image from 'next/image';
import {useSwiper} from "swiper/swiper-react";
import {LeftBannerArrow, RightBannerArrow} from "../../../../../components/icons/navigation";

const PRODUCTS_LENGTH = 4;

const MobilePresentation = () => {
  const [controlledSwiper, setControlledSwiper] = useState<ReturnType<typeof useSwiper> | null>(
      null
  );
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <>
      <div className="relative">
        <Swiper
            loop
            slidesPerView={1}
            onSwiper={setControlledSwiper}
            onSlideChange={(swiper) => {
              setActiveSlide(swiper.realIndex);
            }}
        >
          <SwiperSlide>
            <Image
                className="w-full"
                src={FrontImage}
                alt="anti age face day cream front image"
                height={440}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
                className="w-full"
                src={BackWithBoxImage}
                alt="anti age face day cream back with box image"
                height={440}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
                className="w-full"
                src={FrontWithBoxImage}
                alt="anti age face day cream front with box image"
                height={440}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
                className="w-full"
                src={StudioImage}
                alt="anti age face day cream studio image"
                height={440}
            />
          </SwiperSlide>
        </Swiper>
        <div className="bottom-0 flex justify-center gap-2 absolute z-10 left-1/2 -translate-x-1/2">
          <LeftBannerArrow
              onClick={() => controlledSwiper?.slidePrev()}
              className={clsx('h-8 w-8 fill-neutral-100')}
          />
          <RightBannerArrow
              onClick={() => controlledSwiper?.slideNext()}
              className={clsx('h-8 w-8 fill-neutral-100')}
          />
        </div>
      </div>
      <ul className="my-6 flex h-1 items-center justify-center gap-4">
        <li className="relative">
          <span
            className={clsx(
              'block',
              activeSlide === 0 ? '-mt-px h-1 w-5 bg-primary-main' : 'h-0.5 w-2.5 bg-primary-border'
            )}
          />
        </li>
        <li className="relative">
          <span
            className={clsx(
              'block',
              activeSlide > 0 && activeSlide < PRODUCTS_LENGTH - 1
                ? '-mt-px h-1 w-5 bg-primary-main'
                : 'h-0.5 w-2.5 bg-primary-border'
            )}
          />
        </li>
        <li className="relative">
          <span
            className={clsx(
              'block',
              activeSlide === PRODUCTS_LENGTH - 1
                ? '-mt-px h-1 w-5 bg-primary-main'
                : 'h-0.5 w-2.5 bg-primary-border'
            )}
          />
        </li>
      </ul>
    </>
  );
};

export default MobilePresentation;
