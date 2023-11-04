import { FC } from 'react';
import Image, { ImageProps } from 'next/image';

interface ReviewProps extends Pick<ImageProps, 'src' | 'alt'> {
  fullname: string;
  text: string;
}

const Review: FC<ReviewProps> = ({ text, fullname, src, alt }) => {
  return (
    <div className="relative mx-auto h-96 w-full xl:h-[480px]">
      <Image className="h-full w-full object-cover object-top" src={src} alt={alt} width={360} height={480} unoptimized />
      <div className="absolute bottom-0 z-10 flex h-40 xl:h-56 flex-col justify-between gap-4 bg-neutral-10/30 px-4 pb-6 pt-4 text-neutral-10 backdrop-blur-md lg:px-6 lg:pt-6 lg:pb-8 lg:h-48">
        <p className="text-sm font-medium leading-5 md:text-base xl:text-lg xl:leading-6">{text}</p>
        <p className="font-header text-xl font-semibold leading-6 xl:text-4xl">{fullname}</p>
      </div>
    </div>
  );
};

export default Review;
