import { useRouter } from "next/router";

export const onClickWhatsAppButton = (currentUrl: string) => {
    const phoneNumber = '9660558449919';
    const message = encodeURIComponent(`Hello, I want to buy product. Reference Page - ${currentUrl}`);
    window.open(`https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${message}`);
};

const WhatsAppButton = () => {
    const router = useRouter();
    const currentUrl = `${window.location.origin}${router.asPath}`;

    return (
        <button
            className="fixed bottom-4 right-2 md:right-4 p-1"
            onClick={() => onClickWhatsAppButton(currentUrl)}
        >
            <img alt='Whatsapp' width={60} height={60} src={'/images/icons/whatsapp.png'} />
        </button>
    );
};

export default WhatsAppButton;