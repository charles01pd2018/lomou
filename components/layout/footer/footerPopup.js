// dependencies
import classNames from 'classnames';
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react';
// elements
import { SVG } from '../../elements';


const FooterPopup = ( {
    footerTextClassName,
    content: {
        text,
        linkList
    },
    popupStateObject,
    setPopupStateObject,
    popupStateName,
    closeAllPopups,
} ) => {
    
    /* HOOKS */
    const popupRef = useRef( null );

    /* FUNCTIONS */
    const togglerFooterPopup = () => {
        setPopupStateObject( ( state ) => {
            const currentState = state[ popupStateName ];
            console.log( currentState );

            // set all the other popups to false 
            return {
                ...state,
                [ popupStateName ]: !currentState, // this has to be put second to update the object correctly 
            }
        } );
    }

    /* CLASSNAMES */
    const footerLinkTextClasses = classNames( 'footer-link-text text-sm' );

    useEffect( () => {
        // click outside to close THIS popup
        // but i wanna close ALL the popups
    }, [] );

    return (
        <div className='footer-nav-wrapper'>
            {
                linkList.map( ( { text, href, icon } ) => {
                    /* CONTENT */
                    const { path, alt } = icon;

                    return (
                        <div className='footer-popup-container footer-contact-form-container'>
                            {
                                popupStateObject[ popupStateName ] && (
                                    <div ref={popupRef} className='footer-popup-wrapper footer-contact-form-wrapper'>
                                        <Link href={href}>
                                            <a className='footer-link-text-wrapper'>
                                                <SVG className='footer-link-icon'
                                                    data={path}
                                                    alt={alt}
                                                    width='70'
                                                    height='70' />
                                                <div className={footerLinkTextClasses}>
                                                    {text}
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
                                )
                            }
                        </div>
                    );
                } )
            }
             <button className={footerTextClassName} onClick={togglerFooterPopup} type='button'>
                {text}
            </button>
        </div>
    );
}

export default FooterPopup;