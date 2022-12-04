export interface ICategory {
    name: string;
    banner: string | null;
    parent_id: number;
    short_code: string;
    image: string;
}


export interface ILayoutReducer {
    categories: Array<ICategory>,
    category:ICategory,
    categoryLoading:boolean
}