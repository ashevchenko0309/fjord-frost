import { FC } from 'react';
import { Product } from '../../../../lib/shopify/types';
import {experimental_useFormState as useFormState, experimental_useFormStatus as useFormStatus} from "react-dom";
import {addItem} from "../../../../components/cart/actions";
import {SolidButton} from "../../../../components/uiKit/Button/Button";

const ActionButton = ({ text }: { text?: string }) => {
    const { pending } = useFormStatus();

    return (
        <SolidButton
            aria-label={text ?? "Try daily care set"}
            aria-disabled={pending}
            text={text ?? "Try daily care set"}
            disabled={pending}
            className="w-full justify-start lg:mr-auto lg:w-auto"
            onClick={(e: React.FormEvent<HTMLButtonElement>) => {
                if (pending) e.preventDefault();
            }}
        />
    );
}

const AddSetToCart: FC<{ products: Product[]; text?: string }> = ({ products, text }) => {
    const [message, formAction] = useFormState(addItem, null);
    const actionWithVariant = formAction.bind(
        null,
        products.map(({ variants }) => ({
            selectedVariantId: variants[0]!.id,
            quantity: 1
        }))
    );

    return (
        <form action={actionWithVariant}>
            <ActionButton text={text} />
            <p aria-live="polite" className="sr-only" role="status">
                {message}
            </p>
        </form>
    )
};

export default AddSetToCart;
