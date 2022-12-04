export interface ICategory {
    name: string;
    banner: string | null;
    parent_id: number;
    short_code: string;
    image: string;
    childs:Array<ICategory>;
}


export interface ILayoutReducer {
    categories: Array<ICategory>,
    category:ICategory,
    categoryLoading:boolean
    
}