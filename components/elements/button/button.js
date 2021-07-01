// dependencies
import classNames from 'classnames';

const Button = ( {
    className,
    content: {
        text,
    },
    onClick,
    type='button',
} ) => {

    /* CLASSNAMES */
    const buttonClasses = classNames( 'button-wrapper', className );

    return (
        <button className={buttonClasses} onClick={onClick} type={type}>
            {text}
        </button>
    );
}

export default Button;