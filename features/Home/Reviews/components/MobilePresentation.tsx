'use client';
import { LeftBannerArrow, RightBannerArrow } from '../../../../components/icons/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import { useSwiper } from 'swiper/swiper-react';
import Review from './Review';
import clsx from 'clsx';

const REVIEWS_LENGTH = 5;

const MobilePresentation = () => {
  const [controlledSwiper, setControlledSwiper] = useState<ReturnType<typeof useSwiper> | null>(
    null
  );
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <>
      <Swiper
        slidesPerView={1.2}
        spaceBetween={24}
        breakpoints={{
          640: {
            slidesPerView: 2.4
          },
          1024: {
            spaceBetween: 32,
            slidesPerView: 3.5
          }
        }}
        onSwiper={setControlledSwiper}
        onSlideChange={(swiper) => {
          setActiveSlide(swiper.realIndex);
        }}
      >
        <SwiperSlide>
          <Review
            src="https://cdn.shopify.com/s/files/1/0755/1906/6456/files/jan-novak_png.webp?v=1699094419"
            alt="Jan Novak review"
            text="Frost & Fjord is a game-changer! I've been using their facial cleanser, and it leaves my skin feeling refreshed and clean without any dryness"
            fullname="Jan Novak"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Review
            src="https://cdn.shopify.com/s/files/1/0755/1906/6456/files/stefan-muller_png.webp?v=1699094418"
            alt="Stefan Müller review"
            text="Its noticeable difference in how my skin feels and looks. It's like a burst of energy for my face, and I'm loving the youthful glow it gives me"
            fullname="Stefan Müller"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Review
            src="https://cdn.shopify.com/s/files/1/0755/1906/6456/files/albert-tran_png.webp?v=1699094418"
            alt="Albert Tran"
            text="I really liked the cleanser, my skin felt so much better"
            fullname="Albert Tran"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Review
            src="https://cdn.shopify.com/s/files/1/0755/1906/6456/files/mikael-karlson_png.webp?v=1699094418"
            alt="Mikael Karlsson review"
            text="The refreshing feeling it provides in the morning sets a positive tone for my entire day. Highly recommended!"
            fullname="Mikael Karlsson"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Review
            src="https://cdn.shopify.com/s/files/1/0755/1906/6456/files/henrik-jensen_png.webp?v=1699094419"
            alt="Henrik Jensen review"
            text="Thanks I feel more confident and comfortable throughout the day. Knowing that my skin is well taken care of makes a big difference."
            fullname="Henrik Jensen"
          />
        </SwiperSlide>
      </Swiper>
      <div className="mt-8 flex justify-center gap-2 lg:justify-start lg:gap-6">
        <LeftBannerArrow
          onClick={() => {
            if (activeSlide === 0) {
              return;
            }
            controlledSwiper?.slidePrev();
          }}
          className={clsx(
            'h-8 w-8 fill-neutral-100 lg:h-14 lg:w-14',
            activeSlide === 0 ? 'opacity-40' : 'cursor-pointer'
          )}
        />
        <RightBannerArrow
          onClick={() => {
            if (activeSlide === REVIEWS_LENGTH - 1) {
              return;
            }
            controlledSwiper?.slideNext();
          }}
          className={clsx(
            'h-8 w-8 cursor-pointer fill-neutral-100 lg:h-14 lg:w-14',
            activeSlide === REVIEWS_LENGTH - 1 ? 'opacity-40' : 'cursor-pointer'
          )}
        />
      </div>
    </>
  );
};

export default MobilePresentation;
