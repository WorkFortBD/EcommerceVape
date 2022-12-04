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
    product: IProduct
}

export function CartButton({ product }: ICartButtonProps) {
    const dispatch = useDispatch();

    const addToCart = () => {
        if (parseInt(product.current_stock) === 0) {
            toast.error("Product is out of stock.");
        } else {
            dispatch(addToCartAction(product));
        }
    };

    return (
        <button onClick={addToCart} className="bg-primary hover:bg-gray-400 p-2 px-4 ml-2 rounded-md text-white">
            Add to Cart
        </button>
    );
}
