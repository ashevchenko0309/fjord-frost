import { FC, ReactNode } from 'react';
import { MAIN_SLIDES } from '../constants';
import { SolidButton } from '../../../../components/uiKit/Button/Button';
import Link from 'next/link';
import { Product } from '../../../../lib/shopify/types';
import clsx from "clsx";

export interface MainSliderItemProps {
  entry: string;
  title: ReactNode;
  description: ReactNode;
  button: string;
  link?: string;
  addToCartAction?: (products: Product[]) => ReactNode;
  index: number;
  products: Product[];
  activeSlide: number;
}

export const MainBannerItem: FC<MainSliderItemProps> = ({
  entry,
  title,
  description,
  button,
  link,
  addToCartAction,
  index,
  products,
    activeSlide
}) => {
  return (
    <div className="cursor-pointer overflow-hidden bg-white md:py-20 xl:relative xl:bg-transparent xl:py-0 xl:pb-1">
      <div className="px-4 pb-8 xl:pb-0">
        <p className="mb-2 text-sm leading-5 text-neutral-50 xl:mb-4">{entry}</p>
        <h1 className="mb-8 font-header text-5xl font-semibold leading-[44px] xl:mb-16 xl:whitespace-nowrap xl:text-[52px] xl:leading-[56px]">
          {title}
        </h1>
        <div className="flex h-1 items-center gap-5 xl:hidden overflow-hidden w-[75px] relative">
          {MAIN_SLIDES.map(({ entry }, index) => {
            return (
                <div key={entry} className="absolute transition-all w-5 flex justify-center"  style={{ left: activeSlide > 1 ? `${(index - (activeSlide - 1)) * 30}px` : index * 30 }}>
                  <div className={clsx(
                      activeSlide === index
                          ? '-mt-px h-1 w-5 bg-primary-main'
                          : 'h-0.5 w-2.5 bg-primary-border',
                  )}></div>
                </div>
            )
          })}
        </div>
        <p className="py-4 text-sm leading-5 text-neutral-50 xl:max-w-[200px]">{description}</p>
        {addToCartAction ? (
          addToCartAction(products)
        ) : (
          <Link href={link ?? '#'}>
            <SolidButton text={button} className="w-full justify-center xl:w-auto" />
          </Link>
        )}
      </div>
    </div>
  );
};
