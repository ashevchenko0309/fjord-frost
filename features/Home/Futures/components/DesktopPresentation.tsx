import Image from 'next/image';
import { OutlineButton } from '../../../../components/uiKit/Button/Button';
import Link from 'next/link';

const DesktopPresentation = () => {
  return (
    <div className="hidden justify-center gap-6 px-20 lg:flex">
      <Link href="/product/oil-free-hydrating-gel">
        <div className="group relative overflow-hidden">
          <Image src="https://cdn.shopify.com/s/files/1/0755/1906/6456/files/face-gel_png.webp?v=1699100906" alt="Oil-free hydrating face gel" width={258} height={429} />
          <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black to-60% duration-300 group-hover:translate-y-1/2" />
          <p className="absolute bottom-8 w-full text-center font-header text-2xl font-semibold leading-10 text-neutral-10 opacity-100 duration-300 group-hover:opacity-0">
            Hydrating
          </p>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <OutlineButton
              text="Discover"
              className="bg-neutral-10 opacity-0 hover:!bg-neutral-10 group-hover:animate-fade-up group-hover:animate-duration-300 group-hover:animate-once group-hover:animate-ease-out"
            />
          </div>
        </div>
      </Link>

      <Link href="/product/antioxidant-ginkgo-gel-booster">
        <div className="group relative overflow-hidden">
          <Image src="https://cdn.shopify.com/s/files/1/0755/1906/6456/files/antioxidant_png_bfc6ed30-5ed9-4fbd-96a8-182873b08b11.webp?v=1699100906" alt="Antioxidant face gel booster" width={258} height={429} />
          <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black to-60% duration-300 group-hover:translate-y-1/2" />
          <p className="absolute bottom-8 w-full text-center font-header text-2xl font-semibold leading-10 text-neutral-10 opacity-100 duration-300 group-hover:opacity-0">
            Moisturizing
          </p>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <OutlineButton
              text="Discover"
              className="bg-neutral-10 opacity-0 hover:!bg-neutral-10 group-hover:animate-fade-up group-hover:animate-duration-300 group-hover:animate-once group-hover:animate-ease-out"
            />
          </div>
        </div>
      </Link>
      <Link href="/product/anti-age-day-cream-1">
        <div className="group relative overflow-hidden">
          <Image src="https://cdn.shopify.com/s/files/1/0755/1906/6456/files/anti-age-face-day-cream_png_b71377bf-1485-42a3-8af9-3327cc29abb1.webp?v=1699100907" width={258} height={429} alt="Anti-age face day cream" />
          <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black to-60% duration-300 group-hover:translate-y-1/2" />
          <p className="absolute bottom-8 w-full text-center font-header text-2xl font-semibold leading-10 text-neutral-10 opacity-100 duration-300 group-hover:opacity-0">
            Anti-aging
          </p>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <OutlineButton
              text="Discover"
              className="bg-neutral-10 opacity-0 hover:!bg-neutral-10 group-hover:animate-fade-up group-hover:animate-duration-300 group-hover:animate-once group-hover:animate-ease-out"
            />
          </div>
        </div>
      </Link>
      <Link href="/product/purifying-mousse">
        <div className="group relative overflow-hidden">
          <Image src="https://cdn.shopify.com/s/files/1/0755/1906/6456/files/facial-cleanser_png.webp?v=1699100906" alt="Facial cleanser" width={258} height={429} />
          <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black to-60% duration-300 group-hover:translate-y-1/2" />
          <p className="absolute bottom-8 w-full text-center font-header text-2xl font-semibold leading-10 text-neutral-10 opacity-100 duration-300 group-hover:opacity-0">
            Cleansing
          </p>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <OutlineButton
              text="Discover"
              className="bg-neutral-10 opacity-0 hover:!bg-neutral-10 group-hover:animate-fade-up group-hover:animate-duration-300 group-hover:animate-once group-hover:animate-ease-out"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DesktopPresentation;
