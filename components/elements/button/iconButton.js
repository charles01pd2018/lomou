// dependencies
import classNames from 'classnames';


const IconButton = ( {
    children,
    className,
    onClick,
    type='button',
} ) => {

    /* CLASSNAMES */
    const iconButtonClasses = classNames( 'icon-button-wrapper', className );

    return (
        <button className={iconButtonClasses} onClick={onClick} type={type}>
            {children}
        </button>
    );
}

export default IconButton;