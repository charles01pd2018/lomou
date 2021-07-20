// dependencies
import classNames from 'classnames';
import Link from 'next/link';
import { forwardRef, useRef, useEffect } from 'react';
// hooks
import { useClickOutsideRef } from '../../../hooks';
// utils
import { togglePopups } from '../../../utils';
// elements
import { SVG } from '../../elements';


const HeaderDropdown = forwardRef( ( { 
    className,
    content: {
        linkList,
    },
    isDropdownActive,
    setCustomRefList,
    setDropdownObject,
}, ref ) => {

    /* HOOKS */
    // const headerDropdownRef = useClickOutsideRef( () => togglePopups( null, setDropdownObject ) );
    const headerDropdownRef = useRef( null );

    /* CLASSNAMES */
    const headerDropdownClasses = classNames( 'header-dropdown-wrapper', className );

    useClickOutsideRef( () => togglePopups( null, setDropdownObject ), 
        [ ref, headerDropdownRef ] );

    return (
        <nav ref={headerDropdownRef} className={headerDropdownClasses}>
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
} );

export default HeaderDropdown;