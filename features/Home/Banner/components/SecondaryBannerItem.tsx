import { FC } from 'react';
import { BannerItemProps } from '../interfaces';
import Image from 'next/image';
import Link from 'next/link';

export const SecondaryBannerItem: FC<BannerItemProps> = ({
  src,
  alt,
  priority = false,
  title,
  link
}) => {
  return (
    <Link href={link ?? ''} className="cursor-pointer">
      <div className="flex flex-col items-center justify-start gap-4 pb-6">
        <Image
          src={src}
          width={190}
          height={500}
          priority={priority}
          alt={alt}
          unoptimized
          className="mr-auto aspect-banner-second-slider h-[500px] w-[190px] object-none"
        />
        {title && (
          <p className="text-center text-lg font-medium leading-6 text-neutral-10">{title}</p>
        )}
      </div>
    </Link>
  );
};
