// dependencies
import classNames from 'classnames';
import Link from 'next/link';
import { forwardRef } from 'react';
// elements
import { SVG } from '../../elements';

const HeaderDropdown = forwardRef( ( { 
    className,
    content: {
        linkList,
    },
    isDropdownActive,
}, ref ) => {

    /* CLASSNAMES */
    const headerDropdownClasses = classNames( 'header-dropdown-wrapper', className );

    return (
        <nav className={headerDropdownClasses}>
            {
                linkList.map( ( { text, href, icon } ) => {
                    /* CONTENT */
                    const { path, alt } = icon;

                    return (
                        <div key={text} ref={ref} className='header-dropdown-link-wrapper'>
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
} );

export default HeaderDropdown;