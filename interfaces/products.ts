export interface IProduct {
    /**
     * Product name.
     */
    name: string;

    price: number;

    image: string;
}

export interface IProductReducer {
    products: Array<IProduct>,
    productsLoading: boolean,

    productSlug: string,
    product: IProduct | undefined | null,
    isModalOpen: boolean,
    isDetailLoading: boolean
}
