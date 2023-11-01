import { FC, ReactNode } from 'react';
import { MAIN_SLIDES } from '../constants';
import { SolidButton } from '../../../../components/uiKit/Button/Button';

interface MainSliderItemProps {
  entry: string;
  title: ReactNode;
  description: ReactNode;
  button: string;
  index: number;
}

export const MainBannerItem: FC<MainSliderItemProps> = ({
  entry,
  title,
  description,
  button,
  index
}) => {
  return (
    <div className="bg-white md:py-20 overflow-hidden xl:relative xl:bg-transparent xl:py-0 cursor-pointer">
      <div className="px-4 pb-8 xl:pb-0">
        <p className="mb-2 text-sm leading-5 text-neutral-50 xl:mb-4">{entry}</p>
        <h1 className="mb-8 font-header text-5xl font-semibold leading-[44px] xl:mb-16 xl:text-[52px] xl:leading-[56px] xl:whitespace-nowrap">{title}</h1>
        <ul className="flex h-1 items-center gap-5 xl:hidden">
          <li className="relative">
            <p
              className={index === 0 ? '-mt-px h-1 bg-primary-main w-5' : 'h-0.5 bg-primary-border w-2.5'}
            />
          </li>
          <li className="relative">
            <p
              className={index > 0 && index < MAIN_SLIDES.length - 1
                  ? '-mt-px h-1 bg-primary-main w-5'
                  : 'h-0.5 bg-primary-border w-2.5'}
            />
          </li>
          <li className="relative">
            <p
              className={index === MAIN_SLIDES.length - 1
                  ? '-mt-px h-1 bg-primary-main w-5'
                  : 'h-0.5 bg-primary-border w-2.5'}
            />
          </li>
        </ul>
        <p className="py-4 text-sm leading-5 text-neutral-50 xl:max-w-[200px]">{description}</p>
        <SolidButton text={button} className="w-full justify-center xl:w-auto" />
      </div>
    </div>
  );
};
