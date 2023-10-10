import { useDispatch, useSelector } from "react-redux";
import { showWhatAppButton } from "../../store/global/actioin";
import Communicate from "./communicate";

const WhatsAppButton = () => {
    const dispatch = useDispatch();
    const { isShowing } = useSelector((state) => state.global);
    const onClickWhatsAppButton = (currentUrl: string) => {
        dispatch(showWhatAppButton(true));
    };

    return (
        <div className="flex">
            {isShowing == true &&
                <Communicate />
            }

            <button
                className="fixed bottom-4 right-2 md:right-4 p-1 mt-10"
                onClick={onClickWhatsAppButton}
            >
                {isShowing == true ?
                    <div className="w-16 bg-green-800 h-16 rounded-full">
                        <p className="text-white">Chat 24x7</p>
                    </div> :
                    <img alt='Whatsapp' width={60} height={60} src={'/images/icons/whatsapp.png'} />
                }
            </button>
        </div>
    );
};

export default WhatsAppButton;