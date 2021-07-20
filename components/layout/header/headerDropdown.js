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
    const headerDropdownClasses = classNames( 'header-dropdown-wrapper', className,
        isDropdownActive ? 'active' : 'not-active' );


    return (
        <nav ref={ref} className={headerDropdownClasses}>
            {
                linkList.map( ( { text, href, icon } ) => {
                    /* CONTENT */
                    const { path, alt } = icon;

                    return (
                        <div key={text}>
                            {
                                 isDropdownActive && (
                                    <div className='header-dropdown-link-wrapper'>
                                        <Link href={href}>
                                            <a className='header-dropdown-link'>
                                                <SVG className='header-dropdown-link-icon'
                                                    data={path}
                                                    alt={alt}
                                                    width='35'
                                                    height='35' />
                                                <div className='header-dropdown-link-text'>
                                                    {text}
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
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