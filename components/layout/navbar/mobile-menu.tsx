'use client';
import { Popover, Transition } from '@headlessui/react';
import Link from 'next/link';
import {FC, Fragment, PropsWithChildren, Suspense} from 'react';

import { CloseMenu, MenuBurger } from '../../icons/menu';
import { SolidButton } from '../../uiKit/Button/Button';
import useHideOnScroll from './useHideOnScroll';

const MenuList: FC<PropsWithChildren & { close: () => void }> = ({ close, children }) => {
  useHideOnScroll(close);

  return (
    <div className="overflow-hidden bg-neutral-20 py-6 shadow">
      <div className="flex flex-col gap-2">
        <Popover.Button as={Link} href="/#about" className="px-4 py-3 font-medium text-neutral-80">
          About
        </Popover.Button>
        <Popover.Button
          as={Link}
          href="/#futures"
          className="px-4 py-3 font-medium text-neutral-80"
        >
          Futures
        </Popover.Button>
        <Popover.Button
          as={Link}
          href="/#products"
          className="px-4 py-3 font-medium text-neutral-80"
        >
          Products
        </Popover.Button>
        <Popover.Button
          as={Link}
          href="/#skin-care"
          className="px-4 py-3 font-medium text-neutral-80"
        >
          Skin routine
        </Popover.Button>
      </div>
      <div className="flex flex-col border-t-2 border-neutral-30 pl-3 pr-4 pt-6">
        <div className="mb-8">
          {children}
        </div>
        <Link href="#">
          <SolidButton className="w-full justify-center" variant="primary" text="Discover" />
        </Link>
      </div>
    </div>
  );
};

export default function MobileMenu({ children }: PropsWithChildren) {
  return (
    <div className="w-full">
      <Popover className="h-6 w-6">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                group inline-flex items-center rounded focus:outline-none focus-visible:ring-0`}
            >
              {open ? (
                <CloseMenu className="h-6 w-6 stroke-neutral-80" />
              ) : (
                <MenuBurger className="h-6 w-6 stroke-neutral-80" />
              )}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <Popover.Panel className="fixed left-0 z-20 mt-[18px] w-screen transform">
                {({ close }) => <MenuList close={close}>{children}</MenuList>}
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
