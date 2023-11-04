import Image from 'next/image';

const CallToAction = () => {
  return (
    <section className="relative">
      <h2 className="absolute left-1/2 top-8 z-10 w-full -translate-x-1/2 text-center font-header text-5xl font-semibold leading-10 text-neutral-10 md:top-1/2 md:-translate-y-1/2 md:text-6xl md:leading-snug lg:text-7xl">
        Nordic <br className="lg:hidden" />
        skin care for men
      </h2>
      <Image
        unoptimized
        className="h-full w-full md:hidden"
        src="https://cdn.shopify.com/s/files/1/0755/1906/6456/files/call-to-action-mobile_png.webp?v=1699093518"
        alt="call to action mobile"
        width={375}
        height={445}
      />
      <Image
        unoptimized
        className="hidden h-full w-full md:block"
        src="https://cdn.shopify.com/s/files/1/0755/1906/6456/files/call-to-action-desktop_png.webp?v=1699093519"
        alt="call to action desktop"
        width={1440}
        height={420}
      />
    </section>
  );
};

export default CallToAction;
