'use client';
import dynamic from 'next/dynamic';
import {FC, useState} from 'react';
import { ROUTINES } from './interfaces';
import clsx from 'clsx';
import {Product} from "../../../lib/shopify/types";

const MobilePresentation = dynamic(() => import('./components/MobilePresentation'));
const DesktopPresentation = dynamic(() => import('./components/DesktopPresentation'));

const Steps: FC<{ products: Product[]; bundledProduct: Product[] }> = ({ products, bundledProduct }) => {
  const [routine, setRoutine] = useState<ROUTINES>(ROUTINES.FULL);
  return (
    <section id="skin-care" className="bg-primary-surface px-4 py-8 lg:px-12 lg:pb-24 lg:pt-14 xl:py-28 xl:px-44">
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
        <MobilePresentation routine={routine} bundledProduct={bundledProduct} />
      </div>
      <div className="hidden lg:block">
        <DesktopPresentation products={bundledProduct} routine={routine} />
      </div>
    </section>
  );
};

export default Steps;
