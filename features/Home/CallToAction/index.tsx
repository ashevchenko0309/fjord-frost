import Image from 'next/image';
import CallToActionMobileImage from '../../../assets/call-to-action/call-to-action-mobile.png';
import CallToActionDesktopImage from '../../../assets/call-to-action/call-to-action-desktop.png';

const CallToAction = () => {
  return (
    <section className="relative">
      <h2 className="absolute left-1/2 top-8 z-10 w-full -translate-x-1/2 text-center font-header text-5xl font-semibold leading-10 text-neutral-10 md:top-1/2 md:-translate-y-1/2 md:text-6xl md:leading-snug lg:text-7xl">
        Nordic <br className="lg:hidden" />
        skin care for men
      </h2>
      <Image
        className="h-full w-full md:hidden"
        src={CallToActionMobileImage}
        alt="call to action mobile"
      />
      <Image
        className="hidden md:block h-full w-full"
        src={CallToActionDesktopImage}
        alt="call to action desktop"
      />
    </section>
  );
};

export default CallToAction;
