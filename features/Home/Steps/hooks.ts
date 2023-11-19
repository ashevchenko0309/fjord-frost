import {experimental_useFormState as useFormState} from "react-dom";
import {addItem} from "../../../components/cart/actions";
import {ROUTINES} from "./interfaces";
import {Product} from "../../../lib/shopify/types";

const useAddSetToCart = ({ routine, products }: { routine: ROUTINES; products: Product[] }) => {
    const [message, formAction] = useFormState(addItem, null);
    const actionWithVariant = formAction.bind(
        null,
        routine === ROUTINES.FULL
            ? products.map(({ variants }) => ({
                selectedVariantId: variants[0]!.id,
                quantity: 1
            }))
            : products.map(({ variants }) => ({ selectedVariantId: variants[0]!.id, quantity: 1 }))
    );

    return { actionWithVariant, message };
}

export default useAddSetToCart
