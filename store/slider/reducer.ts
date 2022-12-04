import { IAction } from "../../interfaces/reducers";
import { ISliderReducer } from "../../interfaces/slider";
import * as Types from "./type";

const initialState: ISliderReducer = {
    sliders: [],
    slider: {
        title: '',
        description: '',
        image:'',
        mobile_image:'',
        image_url:'',
        mobile_image_url:'',
    },
    sliderLoading:false
};


const SliderReducer = (state = initialState, action: IAction) => {

    switch (action.type) {
        case Types.GET_SLIDER:
            return {
                ...state,
                sliders: action.payload.data,
                sliderLoading: action.payload.loading
            };

        default:
            return state;
    }
};
export default SliderReducer;
