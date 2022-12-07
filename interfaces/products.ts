export interface IProduct {
    /**
     * Product name.
     */
    name: string;

    price: number;

    image: string;
    featured_image:string;
    default_selling_price:number
}

export interface IProductReducer {
    products: Array<IProduct>,
    productsLoading: boolean,

    productSlug: string,
    product: IProduct | undefined | null,
    isModalOpen: boolean,
    isDetailLoading: boolean
}
