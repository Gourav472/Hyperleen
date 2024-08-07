const Icons = ({ iconName, className }) => {
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
    }
    return (
        <span className={`${className}`}>
            {iconName && ICON_LIST[iconName]}
        </span>
    );
};


export default Icons