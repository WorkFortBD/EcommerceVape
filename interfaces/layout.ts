export interface ILayout {
    name: string;
    banner: string | null;
    parent_id: number;
    short_code: string;
    image: string;
}


export interface ILayoutReducer {
    categories: Array<ILayout>,
    category:ILayout,
    categoryLoading:boolean
}