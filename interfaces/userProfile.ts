export interface IUserProfile {
    /**
     * Product name.
     */
    // name: string;

    // price: number;

    // image: string;
    // featured_image:string;
    // default_selling_price:number
    // sku:string
    // sku_manual:string
    // current_stock:number
    // is_offer_enable:boolean
    // offer_selling_price:number
    // images:Array<IProductImage>
    // description:string
}

export interface IProfileAccountSetting {
    userProfile: Array<IUserProfile>
}