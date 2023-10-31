'use client';
import { SolidButton } from '../../../components/uiKit/Button/Button';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { ROUTINES } from './interfaces';
import clsx from 'clsx';

const MobilePresentation = dynamic(() => import('./components/MobilePresentation'));
const DesktopPresentation = dynamic(() => import('./components/DesktopPresentation'));

const Steps = () => {
  const [routine, setRoutine] = useState<ROUTINES>(ROUTINES.FULL);
  return (
    <section className="bg-primary-surface px-4 py-8 lg:px-12 lg:pb-24 lg:pt-14 xl:py-28 xl:px-44">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:gap-0 lg:mx-auto lg:mb-14 lg:max-w-lg">
        <button
          className={clsx(
            'w-full rounded-full py-1.5 text-sm font-semibold leading-5  md:rounded-r-none',
            routine === ROUTINES.FULL
              ? 'bg-primary-main text-neutral-10'
              : 'bg-neutral-20 text-neutral-50'
          )}
          onClick={() => setRoutine(ROUTINES.FULL)}
        >
          Full routine (recommended)
        </button>
        <button
          className={clsx(
            'w-full rounded-full py-1.5 text-sm font-medium leading-5  md:rounded-l-none',
            routine === ROUTINES.SIMPLE
              ? 'bg-primary-main text-neutral-10'
              : 'bg-neutral-20 text-neutral-50'
          )}
          onClick={() => setRoutine(ROUTINES.SIMPLE)}
        >
          The simple routine
        </button>
      </div>
      <div className="lg:hidden">
        <MobilePresentation routine={routine} />
      </div>
      <div className="hidden lg:mb-14 lg:block">
        <DesktopPresentation routine={routine} />
      </div>
      <SolidButton
        text="Try daily care set"
        className="w-full justify-center lg:mx-auto lg:w-auto"
      />
    </section>
  );
};

export default Steps;
