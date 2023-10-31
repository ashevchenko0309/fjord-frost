'use client';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDown, ChevronUp } from '../../../../components/icons/Chevrons';
import { FC, PropsWithChildren } from 'react';

interface AccordionProps extends PropsWithChildren {
  title: string;
}

const Accordion: FC<AccordionProps> = ({ title, children }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full items-center justify-between border-t border-neutral-30 py-4 text-left font-medium leading-6">
            <span>{title}</span>
            {open ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
          </Disclosure.Button>

          <Transition
              className="transition-all duration-500 overflow-hidden"
              enterFrom="transform opacity-0 max-h-0"
              enterTo="transform opacity-100 max-h-screen"
              leaveFrom="transform opacity-100 max-h-screen"
              leaveTo="transform opacity-0 max-h-0"
          >
            <Disclosure.Panel className="pb-4">{children}</Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default Accordion;
