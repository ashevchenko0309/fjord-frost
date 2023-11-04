import { FC } from 'react';
import { BannerItemProps } from '../interfaces';
import Image from 'next/image';

export const SecondaryBannerItem: FC<BannerItemProps> = ({ src, alt, priority = false, title }) => {
  return (
    <div className="flex flex-col justify-start items-center gap-4 pb-6">
      <Image
        src={src}
        width={190}
        height={500}
        priority={priority}
        alt={alt}
        unoptimized
        className="aspect-banner-second-slider object-none h-[500px] w-[190px] mr-auto"
      />
      {title && (
        <p className="text-center text-lg font-medium leading-6 text-neutral-10">{title}</p>
      )}
    </div>
  );
};
