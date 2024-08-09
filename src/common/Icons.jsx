const Icons = ({ iconName, isOpen, className }) => {
    const ICON_LIST = {
        SolutionIconLeft: (
            <svg width="48" height="8" viewBox="0 0 48 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.5 4C39.5 6.20914 41.2909 8 43.5 8C45.7091 8 47.5 6.20914 47.5 4C47.5 1.79086 45.7091 0 43.5 0C41.2909 0 39.5 1.79086 39.5 4ZM0.5 4.75H43.5V3.25H0.5V4.75Z" fill="url(#paint0_linear_315_504)" />
                <defs>
                    <linearGradient id="paint0_linear_315_504" x1="-3.5" y1="4.5" x2="43.5" y2="4.5" gradientUnits="userSpaceOnUse">
                        <stop stopOpacity="0.01" />
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
                        <stop offset="1" stopOpacity="0.01" />
                    </linearGradient>
                </defs>
            </svg>
        ),
        AccordionIcon: (
            <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.37237 0.103711C1.67927 -0.0614753 2.05901 0.00145294 2.29623 0.256808L3.34936 1.39045C4.44429 2.56909 6.30995 2.56909 7.40488 1.39045L8.458 0.256807C8.69522 0.00145254 9.07496 -0.0614752 9.38186 0.103711C9.82325 0.341274 9.92111 0.931834 9.57995 1.29907L7.592 3.43902C6.39603 4.72643 4.3582 4.72643 3.16223 3.43902L1.17428 1.29907C0.833123 0.931834 0.930986 0.341274 1.37237 0.103711Z" fill={isOpen ? "darkBlue" : "white"} />
            </svg>
        ),
        CrossIcon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        ),
        PenIcon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                    <path d="M17.18 2.926C16.9065 2.63822 16.5781 2.40811 16.2143 2.24922C15.8504 2.09033 15.4584 2.00588 15.0614 2.00085C14.6644 1.99582 14.2704 2.0703 13.9026 2.21992C13.5349 2.36953 13.2008 2.59125 12.92 2.872L3.54503 12.247C3.2178 12.5748 2.99062 12.9889 2.89003 13.441L2.01203 17.391C1.99367 17.4732 1.99636 17.5587 2.01986 17.6395C2.04336 17.7204 2.0869 17.794 2.14645 17.8536C2.20599 17.9131 2.27962 17.9567 2.36049 17.9802C2.44135 18.0037 2.52685 18.0064 2.60903 17.988L6.53503 17.115C7.00283 17.0119 7.43115 16.7766 7.76903 16.437L15.749 8.457L16.086 8.793C16.2735 8.98053 16.3788 9.23484 16.3788 9.5C16.3788 9.76517 16.2735 10.0195 16.086 10.207L15.146 11.147C15.0551 11.2414 15.0049 11.3678 15.0062 11.4989C15.0075 11.63 15.0603 11.7553 15.1531 11.8479C15.2459 11.9405 15.3714 11.9929 15.5025 11.9939C15.6336 11.9948 15.7599 11.9442 15.854 11.853L16.793 10.913C17.168 10.5379 17.3786 10.0293 17.3786 9.499C17.3786 8.96867 17.168 8.46006 16.793 8.085L16.457 7.749L17.127 7.079C17.6755 6.53024 17.988 5.78891 17.9977 5.01308C18.0074 4.23725 17.7146 3.48832 17.18 2.926ZM13.626 3.579C13.9973 3.213 14.4983 3.00866 15.0196 3.01053C15.5409 3.0124 16.0404 3.22033 16.4091 3.58898C16.7777 3.95763 16.9856 4.45709 16.9875 4.97843C16.9894 5.49978 16.785 6.00072 16.419 6.372L7.06203 15.73C6.8586 15.9351 6.60025 16.0772 6.31803 16.139L3.15803 16.841L3.86603 13.658C3.92511 13.3912 4.05941 13.1469 4.25303 12.954L13.626 3.579Z" fill="#4E4E4E" />
                </g>
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