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

    return (
        <Link href={href}>
            <a className={linkButtonClasses}>
                {text}
            </a>
        </Link>
    );
}

export default LinkButton;