const Icons = ({ iconName, isOpen, className }) => {
    const ICON_LIST = {
        SolutionIconLeft: (
            <svg width="48" height="8" viewBox="0 0 48 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.5 4C39.5 6.20914 41.2909 8 43.5 8C45.7091 8 47.5 6.20914 47.5 4C47.5 1.79086 45.7091 0 43.5 0C41.2909 0 39.5 1.79086 39.5 4ZM0.5 4.75H43.5V3.25H0.5V4.75Z" fill="url(#paint0_linear_315_504)" />
                <defs>
                    <linearGradient id="paint0_linear_315_504" x1="-3.5" y1="4.5" x2="43.5" y2="4.5" gradientUnits="userSpaceOnUse">
                        <stop stop-opacity="0.01" />
                        <stop offset="1" />
                    </linearGradient>
                </defs>
            </svg>
        ),
        SolutionIconRight: (
            <svg width="48" height="8" viewBox="0 0 48 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 4C0.5 6.20914 2.29086 8 4.5 8C6.70914 8 8.5 6.20914 8.5 4C8.5 1.79086 6.70914 0 4.5 0C2.29086 0 0.5 1.79086 0.5 4ZM4.5 4.75H47.5V3.25H4.5V4.75Z" fill="url(#paint0_linear_315_506)" />
                <defs>
                    <linearGradient id="paint0_linear_315_506" x1="0.5" y1="4.5" x2="47.5" y2="4.5" gradientUnits="userSpaceOnUse">
                        <stop />
                        <stop offset="1" stop-opacity="0.01" />
                    </linearGradient>
                </defs>
            </svg>
        ),
        AccordionIcon: (
            <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.37237 0.103711C1.67927 -0.0614753 2.05901 0.00145294 2.29623 0.256808L3.34936 1.39045C4.44429 2.56909 6.30995 2.56909 7.40488 1.39045L8.458 0.256807C8.69522 0.00145254 9.07496 -0.0614752 9.38186 0.103711C9.82325 0.341274 9.92111 0.931834 9.57995 1.29907L7.592 3.43902C6.39603 4.72643 4.3582 4.72643 3.16223 3.43902L1.17428 1.29907C0.833123 0.931834 0.930986 0.341274 1.37237 0.103711Z" fill={isOpen ? "darkBlue" : "white"} />
            </svg>
        ),
    }
    return (
        <span className={`${className}`}>
            {iconName && ICON_LIST[iconName]}
        </span>
    );
};
export default Icons