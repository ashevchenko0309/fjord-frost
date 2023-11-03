import { FC } from 'react';
import Image from "next/image";

const ProductCertificates: FC<{ certificates: string }> = ({ certificates }) => {
  const images = JSON.parse(certificates);
  return (
    <div className="flex flex-col px-2 gap-4 md:flex-row md:px-4 lg:px-0 lg:grid lg:grid-cols-2">
      {images.map((src: string) => (
        <Image src={src} alt="" key={src} width={324} height={400} className="w-full rounded-2xl md:w-1/2 lg:w-full" />
      ))}
    </div>
  );
};

export default ProductCertificates;
