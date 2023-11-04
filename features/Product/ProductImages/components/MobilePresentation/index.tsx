'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import clsx from 'clsx';
import { FC, useState } from 'react';
import Image from 'next/image';
import { useSwiper } from 'swiper/swiper-react';
import { LeftBannerArrow, RightBannerArrow } from '../../../../../components/icons/navigation';

const MobilePresentation: FC<{ images: { src: string; altText: string }[] }> = ({ images }) => {
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
          {images.map(({ src, altText }) => (
            <SwiperSlide key={src}>
              <Image unoptimized className="w-full" src={src} alt={altText} height={720} width={670} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute bottom-0 left-1/2 z-10 flex -translate-x-1/2 justify-center gap-2 lg:hidden">
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
      <div className="my-6">
        <ul className="hidden cursor-pointer lg:flex lg:gap-6">
          {images.map(({ src, altText }, index) => (
            <li key={src} onClick={() => controlledSwiper?.slideTo(index)}>
              <Image
                className={clsx(
                  'w-full',
                  index === activeSlide ? 'border border-primary-border' : ''
                )}
                src={src}
                alt={altText}
                height={400}
                width={1061}
              />
            </li>
          ))}
        </ul>
        <ul className="my-6 flex h-1 items-center justify-center gap-4 lg:hidden">
          <li className="relative">
            <span
              className={clsx(
                'block',
                activeSlide === 0
                  ? '-mt-px h-1 w-5 bg-primary-main'
                  : 'h-0.5 w-2.5 bg-primary-border'
              )}
            />
          </li>
          <li className="relative">
            <span
              className={clsx(
                'block',
                activeSlide > 0 && activeSlide < images.length - 1
                  ? '-mt-px h-1 w-5 bg-primary-main'
                  : 'h-0.5 w-2.5 bg-primary-border'
              )}
            />
          </li>
          <li className="relative">
            <span
              className={clsx(
                'block',
                activeSlide === images.length - 1
                  ? '-mt-px h-1 w-5 bg-primary-main'
                  : 'h-0.5 w-2.5 bg-primary-border'
              )}
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobilePresentation;
