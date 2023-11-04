import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const MobilePresentation = dynamic(() => import('./components/MobilePresentation'));
const DesktopPresentation = dynamic(() => import('./components/DesktopPresentation'));

const Futures = () => {
  return (
    <section
      id="futures"
      className="overflow-hidden bg-primary-surface py-6 md:py-12 lg:pb-36 lg:pt-14 xl:pb-40"
    >
      <h2 className="mb-8 text-center font-header text-4xl font-semibold leading-10 md:mb-12 md:text-5xl lg:mb-14">
        Features
      </h2>
      <DesktopPresentation />
      <div className="lg:hidden">
        <Suspense>
          <MobilePresentation />
        </Suspense>
      </div>
    </section>
  );
};

export default Futures;
