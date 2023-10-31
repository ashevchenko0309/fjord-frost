import { FC } from 'react';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import { SolidButton } from '../../../../components/uiKit/Button/Button';

interface CardProps extends Pick<ImageProps, 'src' | 'alt'> {
  title: string;
  description: string;
  price: string;
  url: string;
}

const Card: FC<CardProps> = ({ title, description, price, src, alt, url = '#' }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative mb-6 lg:mb-0">
        <Image src={src} alt={alt} className="h-full w-full" />
        <div className="absolute bottom-0 flex w-full justify-between px-4 pb-4 lg:px-5 lg:pb-6">
          <div>
            <p className="font-medium leading-6 text-neutral-100 xl:text-lg xl:leading-6">
              {title}
            </p>
            <p className="text-sm leading-5 xl:text-base xl:leading-6">{description}</p>
          </div>
          <p className="mt-0.5 text-sm font-medium leading-6 text-neutral-100 lg:text-lg lg:leading-6">
            {price}
          </p>
          <SolidButton
            text="Discover"
            size="small"
            className="absolute right-5 bg-neutral-10 opacity-0 lg:group-hover:animate-fade-up lg:group-hover:animate-duration-300 lg:group-hover:animate-once lg:group-hover:animate-ease-out lg:px-3 lg:py-2 xl:px-6 xl:py-2.5"
          />
        </div>
      </div>
      <Link href={url} className="mb-6 block lg:hidden">
        <SolidButton text="Discover" className="w-full justify-center" />
      </Link>
    </div>
  );
};

export default Card;
