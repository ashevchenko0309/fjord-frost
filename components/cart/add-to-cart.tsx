'use client';

import { PlusIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { addItem } from 'components/cart/actions';
import LoadingDots from 'components/loading-dots';
import { ProductVariant } from 'lib/shopify/types';
import { useSearchParams } from 'next/navigation';
import {
  // @ts-ignore
  experimental_useFormState as useFormState,
  experimental_useFormStatus as useFormStatus
} from 'react-dom';
import { SolidButton } from '../uiKit/Button/Button';

function SubmitButton({
  availableForSale,
  selectedVariantId
}: {
  availableForSale: boolean;
  selectedVariantId: string | undefined;
}) {
  const { pending } = useFormStatus();
  const buttonClasses =
    'relative flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white';

  if (!availableForSale) {
    return <SolidButton text="Out Of Stock" disabled className="mb-6 w-full justify-center" />;
  }

  if (!selectedVariantId) {
    return (
      <SolidButton
        aria-label="Please select an option"
        aria-disabled
        text="Add to card"
        disabled
        className="mb-6 w-full justify-center"
      />
    );
  }

  return (
      <SolidButton
          aria-label="Add to cart"
          aria-disabled={pending}
          text="Add to card"
          disabled={pending}
          className="mb-6 w-full justify-center"
          onClick={(e: React.FormEvent<HTMLButtonElement>) => {
            if (pending) e.preventDefault();
          }}
      />
  )
}

export function AddToCart({
  quantity,
  variants,
  availableForSale
}: {
  quantity: number;
  variants: ProductVariant[];
  availableForSale: boolean;
}) {
  const [message, formAction] = useFormState(addItem, null);
  const searchParams = useSearchParams();
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every(
      (option) => option.value === searchParams.get(option.name.toLowerCase())
    )
  );
  const selectedVariantId = variant?.id || defaultVariantId;
  const actionWithVariant = formAction.bind(null, { selectedVariantId, quantity });

  return (
    <form action={actionWithVariant}>
      <SubmitButton availableForSale={availableForSale} selectedVariantId={selectedVariantId} />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
