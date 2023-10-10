/**
 * External dependencies.
 */
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';

/**
 * Internal dependencies.
 */
import { IProduct } from '../../interfaces/products';
import { addToCartAction } from "../../store/cart/action";


export interface ICartButtonProps {
    product: IProduct,
    quantity:number
}

export function CartButton({ product,quantity }: ICartButtonProps) {
    const dispatch = useDispatch();

    const addToCart = () => {
        if (parseInt(product.current_stock) === 0) {
            toast.error("Product is out of stock.");
        } else {
            dispatch(addToCartAction(product,quantity));
        }
    };

    return (
        <button onClick={addToCart} className="transition-all bg-primary hover:opacity-80 p-2 scale-90 hover:scale-100 w-32 px-4 ml-2 rounded-md text-white">
            Add to Cart
        </button>
    );
}
