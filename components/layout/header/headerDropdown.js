// dependencies
import classNames from 'classnames';
import Link from 'next/link';
import { forwardRef, useRef, useEffect } from 'react';
// utils
import { togglePopups } from '../../../utils';
// elements
import { SVG } from '../../elements';


const HeaderDropdown =  forwardRef( ( { 
    className,
    content: {
        linkList,
    },
    isDropdownActive,
    setCustomRefList,
    setDropdownObject,
}, ref ) => {

    /* HOOKS */
    const headerDropdownRef = useRef( null );

    /* CLASSNAMES */
    const headerDropdownClasses = classNames( 'header-dropdown-wrapper', className );

    useEffect( () => {
        setCustomRefList( ( state ) => {
            state.push( [ headerDropdownRef, () => togglePopups( null, setDropdownObject ) ] );
            return state;
        } );
    }, [] );

    console.log( headerDropdownRef );

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