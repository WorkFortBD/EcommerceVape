import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { showWhatAppButton } from "../../store/global/actioin";

export const onClickWhatsAppButton = (currentUrl: string) => {
    const phoneNumber = '9660558449919';
    const message = encodeURIComponent(`Hello, I want to buy product. Reference Page - ${currentUrl}`);
    window.open(`https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${message}`);
};

const Communicate = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const currentUrl = `${window.location.origin}${router.asPath}`;

    const closeChat=()=>{
        dispatch(showWhatAppButton(false));
    }

    return (
        <div className=" fixed bottom-20 right-2 md:right-2 bg-green-500 messangers-block arcuAnimated lg show-messageners-block">
            <button className="absolute right-2 bg-white text-red-500 rounded-full" onClick={()=>closeChat()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" className="w-6 h-6 text-green-500">
                    <path fill="currentColor" d="M 14 1.41L 12.59 0L 7 5.59L 1.41 0L 0 1.41L 5.59 7L 0 12.59L 1.41 14L 7 8.41L 12.59 14L 14 12.59L 8.41 7L 14 1.41Z"></path>
                </svg>
            </button>
            <div className="messangers-list-container">
                <ul className="messangers-list arcu-downtoup rounded-items">
                    <li className="p-2">
                        <a className="flex messanger msg-item-whatsapp cursor-pointer" id="msg-item-2" rel="nofollow noopener" onClick={()=>onClickWhatsAppButton(currentUrl)} target="_blank">
                            <span className="bg-green-500 text-white  rounde-full">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6">
                                    <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                                </svg>
                            </span>
                            &nbsp;&nbsp;
                            <div className="arcu-item-label">
                                <div className="arcu-item-title text-white">WhatsApp</div>
                            </div>
                        </a>
                    </li>
                    <li className="p-2">
                        <a className="flex messanger msg-item-phone" id="msg-item-8" rel="nofollow noopener" href="tel:+97366324432" target="_blank">
                            <span className="bg-green-400 text-white rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6">
                                    <path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
                                </svg>
                            </span>
                            &nbsp;&nbsp;
                            <div className="arcu-item-label">
                                <div className="arcu-item-title text-white">Call Us 24/7 Open</div>
                            </div>
                        </a>
                    </li>
                    <li className="p-2">
                        <a className="flex messanger msg-item-comment-dots-light" id="msg-item-9" rel="nofollow noopener" href="" target="_blank">
                            <span className="bg-red-500 text-white rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6">
                                    <path fill="currentColor" d="M128 216c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 384c-28.3 0-56.3-4.3-83.2-12.8l-15.2-4.8-13 9.2c-23 16.3-58.5 35.3-102.6 39.6 12-15.1 29.8-40.4 40.8-69.6l7.1-18.7-13.7-14.6C47.3 313.7 32 277.6 32 240c0-97 100.5-176 224-176s224 79 224 176-100.5 176-224 176z"></path>
                                </svg>
                            </span>
                            &nbsp;&nbsp;
                            <div className="arcu-item-label">
                                <div className="arcu-item-title text-white">Live Chat</div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Communicate;