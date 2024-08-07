const Icon = ({ iconName, isOpen, className }) => {
    const ICON_LIST = {
        AccordionIcon: (
            <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.37237 0.103711C1.67927 -0.0614753 2.05901 0.00145294 2.29623 0.256808L3.34936 1.39045C4.44429 2.56909 6.30995 2.56909 7.40488 1.39045L8.458 0.256807C8.69522 0.00145254 9.07496 -0.0614752 9.38186 0.103711C9.82325 0.341274 9.92111 0.931834 9.57995 1.29907L7.592 3.43902C6.39603 4.72643 4.3582 4.72643 3.16223 3.43902L1.17428 1.29907C0.833123 0.931834 0.930986 0.341274 1.37237 0.103711Z" fill={isOpen ? "darkBlue" : "white"} />
            </svg>
        ),
    };

    return (
        <span className={`${className}`}>
            {iconName && ICON_LIST[iconName]}
        </span>
    );
};

export default Icon;
