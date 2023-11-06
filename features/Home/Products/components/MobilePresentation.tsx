'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import clsx from 'clsx';
import Card from './Card';
import { FC, useState } from 'react';
import { Product } from '../../../../lib/shopify/types';
import {MAIN_SLIDES} from "../../Banner/constants";

const MobilePresentation: FC<{ products: Product[] }> = ({ products }) => {
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
        {products.map(
          ({
            id,
            title,
            handle,
            presentation,
            priceRange: {
              maxVariantPrice: { amount, currencyCode }
            }
          }) => (
            <SwiperSlide key={id}>
              <Card
                title={title}
                description="It's designed to effortlessly clean your face"
                price={`${currencyCode} ${amount}`}
                src={presentation?.value ?? ''}
                alt={title}
                url={`/product/${handle}`}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
        <div className="flex items-center justify-center">
        <div className="flex h-1 items-center gap-5 xl:hidden overflow-hidden w-[75px] relative">
            {products.map(({ id }, index) => {
                return (
                    <div key={id} className="absolute transition-all w-5 flex items-center justify-center top-1/2 -translate-y-1/2"  style={{ left: activeSlide > 1 ? `${(index - (activeSlide - 1)) * 25}px` : index * 25 }}>
                        <div className={clsx(
                            activeSlide === index
                                ? 'h-1 w-5 bg-primary-main'
                                : 'h-0.5 w-2.5 bg-primary-border top-0',
                        )} />
                    </div>
                )
            })}
        </div>
        </div>
      {/*<ul className="flex h-1 items-center justify-center gap-8">*/}
      {/*  <li className="relative">*/}
      {/*    <span*/}
      {/*      className={clsx(*/}
      {/*        'absolute w-5',*/}
      {/*        activeSlide === 0 ? '-mt-px h-1 bg-primary-main' : 'h-0.5 bg-primary-border'*/}
      {/*      )}*/}
      {/*    />*/}
      {/*  </li>*/}
      {/*  <li className="relative">*/}
      {/*    <span*/}
      {/*      className={clsx(*/}
      {/*        'absolute w-5',*/}
      {/*        activeSlide > 0 && progress < 0.9*/}
      {/*          ? '-mt-px h-1 bg-primary-main'*/}
      {/*          : 'h-0.5 bg-primary-border'*/}
      {/*      )}*/}
      {/*    />*/}
      {/*  </li>*/}
      {/*  <li className="relative">*/}
      {/*    <span*/}
      {/*      className={clsx(*/}
      {/*        'absolute w-5',*/}
      {/*        progress >= 0.9 ? '-mt-px h-1 bg-primary-main' : 'h-0.5 bg-primary-border'*/}
      {/*      )}*/}
      {/*    />*/}
      {/*  </li>*/}
      {/*</ul>*/}
    </>
  );
};

export default MobilePresentation;
