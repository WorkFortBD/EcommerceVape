const WhatsAppButton = () => {
    const handleClick = () => {
        const phoneNumber = '9660558449919';
        const message = encodeURIComponent('Hello, Please confirm your desired products...');
        window.open(`https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${message}`);
    };

    return (
        <button
            className="fixed bottom-4 right-2 md:right-4 p-1"
            onClick={handleClick}
        >
            <img alt='Whatsapp' width={60} height={60} src={'/images/icons/whatsapp.png'} />
        </button>
    );
};

export default WhatsAppButton;