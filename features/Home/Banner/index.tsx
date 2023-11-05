'use client';
import {FC, useState} from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Controller, EffectFade } from 'swiper/modules';

import { Transition } from '@headlessui/react';
import { MAIN_SLIDES, SECONDARY_SLIDES, SLIDER_DESCRIPTIONS } from './constants';
import { SecondaryBannerItem } from './components/SecondaryBannerItem';
import { MainBannerItem } from './components/MainBannerItem';
import { LeftBannerArrow, RightBannerArrow } from '../../../components/icons/navigation';
import { useSwiper } from 'swiper/swiper-react';
import {Product} from "../../../lib/shopify/types";

const Banner: FC<{ products: Product[] }> = ({ products }) => {
  const [controlledSwiper, setControlledSwiper] = useState<ReturnType<typeof useSwiper> | null>(
    null
  );
  const [activeSlide, setActiveSlide] = useState(0);
  const onMainSlideChange: SwiperProps['onSlideChange'] = (swiper) => {
    setActiveSlide(swiper.realIndex);
  };

  return (
    <section>
      <div className="relative mb-8 bg-white pt-11 md:grid md:grid-cols-[40%_60%] md:pt-0 xl:grid-cols-[30%_70%]">
        <div className="relative xl:flex xl:items-center xl:pl-24">
          <ul className="hidden h-1 items-center gap-8 xl:absolute xl:top-[38%] xl:flex xl:flex-col">
            <li className="relative">
              <p
                className={`${
                  activeSlide === 0
                    ? '-mt-px h-1 w-5 bg-primary-main'
                    : 'h-0.5 w-2.5 bg-primary-border'
                }`}
              />
            </li>
            <li className="relative">
              <p
                className={`${
                  activeSlide > 0 && activeSlide < MAIN_SLIDES.length - 1
                    ? '-mt-px h-1 w-5 bg-primary-main'
                    : 'h-0.5 w-2.5 bg-primary-border'
                }`}
              />
            </li>
            <li className="relative">
              <p
                className={`${
                  activeSlide === MAIN_SLIDES.length - 1
                    ? '-mt-px h-1 w-5 bg-primary-main'
                    : 'h-0.5 w-2.5 bg-primary-border'
                }`}
              />
            </li>
          </ul>
          <div className="w-full xl:absolute xl:right-[-186px] xl:z-20">
            <Swiper
              loop={true}
              effect="fade"
              modules={[EffectFade, Controller]}
              onSwiper={(swiper) => setControlledSwiper(swiper)}
              onSlideChange={onMainSlideChange}
              className="titles-slider"
            >
              {MAIN_SLIDES.map(({ entry, title, button, description, link, addToCartAction }, index) => (
                <SwiperSlide key={entry}>
                  <MainBannerItem
                    entry={entry}
                    title={title}
                    button={button}
                    description={description}
                    link={link}
                    index={index}
                    addToCartAction={addToCartAction}
                    products={products}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="banner-gradient relative z-10 pb-6 pt-8 xl:pl-48 xl:pt-20">
          <Swiper
            slidesPerView={1.8}
            spaceBetween={24}
            breakpoints={{
              480: {
                slidesPerView: 3,
                spaceBetween: 10
              },
              768: {
                slidesPerView: 2.4,
                spaceBetween: 10
              },
              1024: {
                slidesPerView: 3.3,
                spaceBetween: 10
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 32
              }
            }}
          >
            {SECONDARY_SLIDES[activeSlide]?.map(({ src, alt, priority, title, link }) => (
              <SwiperSlide key={`${activeSlide}_${alt}`}>
                <Transition
                  appear={true}
                  show
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <SecondaryBannerItem src={src} alt={alt} priority={priority} title={title} link={link} />
                </Transition>
              </SwiperSlide>
            ))}
          </Swiper>
          {SLIDER_DESCRIPTIONS[activeSlide - 1] && (
            <Transition
              appear={true}
              show
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <p className="px-4 text-lg font-medium leading-6 text-neutral-10 xl:pb-4 xl:pl-0">
                {SLIDER_DESCRIPTIONS[activeSlide - 1]}
              </p>
            </Transition>
          )}
          <div className="mt-4 flex justify-center gap-2 xl:hidden">
            <LeftBannerArrow
              onClick={() => controlledSwiper?.slidePrev()}
              className="h-8 w-8 cursor-pointer fill-neutral-10 xl:h-10 xl:w-10"
            />
            <RightBannerArrow
              onClick={() => controlledSwiper?.slideNext()}
              className="h-8 w-8 cursor-pointer fill-neutral-10 xl:h-10 xl:w-10"
            />
          </div>
        </div>
        <div className="hidden xl:absolute xl:bottom-[120px] xl:left-[35%] xl:z-20 xl:flex xl:gap-3">
          <LeftBannerArrow
            onClick={() => controlledSwiper?.slidePrev()}
            className="h-8 w-8 cursor-pointer fill-neutral-10 xl:h-10 xl:w-10"
          />
          <RightBannerArrow
            onClick={() => controlledSwiper?.slideNext()}
            className="h-8 w-8 cursor-pointer fill-neutral-10 xl:h-10 xl:w-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
