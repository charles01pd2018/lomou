// dependencies
import Link from 'next/link';
import classNames from 'classnames';


const LinkButton = ( {
    className,
    content: {
        text,
        href,
    },
} ) => {

    /* CLASSNAMES */
    const linkButtonClasses = classNames( 'link-button-wrapper', className );

    // this feels really weird - look into this later
    return (
        <Link href={href}>
            <button className={linkButtonClasses}>
                <a>{text}</a>
            </button>
        </Link>
    );
}

export default LinkButton;