import {experimental_useFormState as useFormState} from "react-dom";
import {addItem} from "../../../components/cart/actions";
import {ROUTINES} from "./interfaces";
import {Product} from "../../../lib/shopify/types";

const useAddSetToCart = ({ routine, products }: { routine: ROUTINES; products: Product[] }) => {
    const [message, formAction] = useFormState(addItem, null);
    const simple = products.filter(
        (product) =>
            product.handle === 'oil-free-hydrating-face-gel' ||
            product.handle === 'anti-age-face-day-cream'
    );
    const actionWithVariant = formAction.bind(
        null,
        routine === ROUTINES.FULL
            ? products.map(({ variants }) => ({
                selectedVariantId: variants[0]!.id,
                quantity: 1
            }))
            : simple.map(({ variants }) => ({ selectedVariantId: variants[0]!.id, quantity: 1 }))
    );

    return { actionWithVariant, message };
}

export default useAddSetToCart
