import { FC } from 'react';
import { BannerItemProps } from '../interfaces';
import Image from 'next/image';

export const SecondaryBannerItem: FC<BannerItemProps> = ({ src, alt, priority = false, title }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 pb-6">
      <Image
        src={src}
        height={500}
        priority={priority}
        alt={alt}
        unoptimized
        className="w-full aspect-banner-second-slider object-cover lg:max-h-[75vh]"
      />
      {title && (
        <p className="text-center text-lg font-medium leading-6 text-neutral-10">{title}</p>
      )}
    </div>
  );
};
