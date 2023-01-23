export interface ISlider {
    title: string;
    description: string | null;
    image: string;
    mobile_image: string;
    image_url: string;
    mobile_image_url: string;
}


export interface ISliderReducer {
    sliders: Array<ISlider>,
    slider:ISlider,
    sliderLoading:boolean
}