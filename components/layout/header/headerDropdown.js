// dependencies
import classNames from 'classnames';
import Link from 'next/link';
// elements
import { SVG } from '../../elements';

const HeaderDropdown = ( { 
    className,
    content: {
        linkList,
    },
    isDropdownActive,
} ) => {

    /* CLASSNAMES */
    const headerDropdownClasses = classNames( 'header-dropdown-wrapper', className );

    return (
        <nav className={headerDropdownClasses}>
            {
                linkList.map( ( { text, href, icon } ) => {
                    /* CONTENT */
                    const { path, alt } = icon;

                    return (
                        <div key={text} className='header-dropdown-link-wrapper'>
                            {
                                isDropdownActive && (
                                    <Link href={href}>
                                        <a className='header-dropdown-link'>
                                            {text}
                                        </a>
                                    </Link>
                                )
                            }
                        </div>
                    )
                } )
            }
        </nav>
    );
}

export default HeaderDropdown;