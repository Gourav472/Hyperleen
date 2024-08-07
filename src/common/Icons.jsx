const Icons = ({ iconName, className }) => {
    const ICON_LIST = {
      
    }
    return (
        <span className={`${className}`}>
            {iconName && ICON_LIST[iconName]}
        </span>
    );
};

export default Icons