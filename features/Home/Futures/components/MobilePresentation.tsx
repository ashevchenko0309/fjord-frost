'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { OutlineButton } from '../../../../components/uiKit/Button/Button';
import { useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

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
            <Link href="/product/oil-free-hydrating-face-gel">
              <div className="relative mb-4">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0755/1906/6456/files/face-gel_png.webp?v=1699100906"
                  alt="Oil-free hydrating face gel"
                  className="md:w-full"
                  width={258}
                  height={429}
                />
                <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black to-60%" />
                <p className="absolute bottom-8 w-full text-center font-header text-2xl font-semibold leading-10 text-neutral-10">
                  Hydrating
                </p>
              </div>
            </Link>
            <Link href="/product/oil-free-hydrating-face-gel">
              <OutlineButton text="Discover" className="mx-auto" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pb-8">
            <Link href="/product/antioxidant-face-gel-booster">
              <div className="relative mb-4">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0755/1906/6456/files/antioxidant_png_bfc6ed30-5ed9-4fbd-96a8-182873b08b11.webp?v=1699100906"
                  alt="Antioxidant face gel booster"
                  className="md:w-full"
                  width={258}
                  height={429}
                />
                <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black to-60%" />
                <p className="absolute bottom-8 w-full text-center font-header text-2xl font-semibold leading-10 text-neutral-10">
                  Moisturizing
                </p>
              </div>
            </Link>
            <Link href="/product/antioxidant-face-gel-booster">
              <OutlineButton text="Discover" className="mx-auto" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pb-8">
            <Link href="/product/anti-age-face-day-cream">
              <div className="relative mb-4">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0755/1906/6456/files/anti-age-face-day-cream_png_b71377bf-1485-42a3-8af9-3327cc29abb1.webp?v=1699100907"
                  width={258}
                  height={429}
                  alt="Anti-age face day cream"
                  className="md:w-full"
                />
                <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black to-60%" />
                <p className="absolute bottom-8 w-full text-center font-header text-2xl font-semibold leading-10 text-neutral-10">
                  Anti-aging
                </p>
              </div>
            </Link>
            <Link href="/product/anti-age-face-day-cream">
              <OutlineButton text="Discover" className="mx-auto" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pb-8">
            <Link href="/product/facial-cleanser">
              <div className="relative mb-4">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0755/1906/6456/files/facial-cleanser_png.webp?v=1699100906"
                  alt="Facial cleanser"
                  width={258}
                  height={429}
                  className="md:w-full"
                />
                <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black to-60%" />
                <p className="absolute bottom-8 w-full text-center font-header text-2xl font-semibold leading-10 text-neutral-10">
                  Cleansing
                </p>
              </div>
            </Link>
            <Link href="/product/facial-cleanser">
              <OutlineButton text="Discover" className="mx-auto" />
            </Link>
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
