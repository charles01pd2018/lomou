// dependencies
import classNames from 'classnames';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
// hooks
import { useStateObject } from '../../../hooks';
// utils
import { clickOutsideEvent } from '../../../utils';
// elements
import { Logo } from '../../elements';
// partials
import FooterPopup from './footerPopup';


const Footer = ( { 
    id,
    className,
    content: {
        linkList, // 0 -> custom contact form, ...rest -> generic link popups
    },
    popupStateName='isPopupActive'
} ) => {

    /* CONTENT */
    const [ contactLink, ...genericLinkList ] = linkList;

    /* HOOKS */
    const footerNavRef = useRef( null );
    const [ isContactFormActive, setIsContactFormActive ] = useState( false );
    const [ popupStateObject, setPopupStateObject ] = useStateObject( genericLinkList.length, false, popupStateName );

    /* FUNCTIONS */
    const toggleContactForm = () => {
        closeAllPopups();
        setIsContactFormActive( state => !state );
    }

    const closeAllPopups = () => {
        setIsContactFormActive( false );

        setPopupStateObject( ( state ) => {
            const newPopupStateObject = {};
            Object.keys( state ).forEach( ( key ) => {
                newPopupStateObject[ key ] = false;
            } );

            return newPopupStateObject;
        } );
    }

    const clickOutside = ( event ) => {
        clickOutsideEvent( event, footerNavRef, closeAllPopups );
    }

    /* CLASSNAMES */
    const footerClasses = classNames( 'footer-container', className );
    const footerTextClasses = classNames( 'footer-text text-sm' ); 
    // DELETE THIS LATER
    const footerLinkTextClasses = classNames( 'footer-link-text text-sm' );


    useEffect( () => {
        document.addEventListener( 'click', clickOutside );
        return () => {
            document.removeEventListener( 'click', clickOutside );
        }
    }, [] );

    return (
        <footer id={id} className={footerClasses}>
            <div className='footer-wrapper'>
                <div ref={footerNavRef} className='footer-nav-wrapper'>

                    <div className='footer-popup-nav-wrapper'>
                        {
                             isContactFormActive && (
                                <div className='footer-popup-link-wrapper footer-contact-form-wrapper'>
                                    <Link href='/documentation'>
                                        <a className={footerLinkTextClasses}>
                                            Contact Form
                                        </a>
                                    </Link>
                                </div>
                            )
                        }
                        <button className={footerTextClasses} onClick={toggleContactForm} type='button'>
                            *{contactLink.text}
                        </button>
                    </div>

                    {
                        genericLinkList.map( ( { text, subLinkList }, index ) => {
                            /* CONTENT */
                            const footerPopupContent = {
                                text,
                                linkList: subLinkList,
                            }

                            return (
                                <FooterPopup key={text}
                                    footerTextClassName={footerTextClasses}
                                    content={footerPopupContent}
                                    popupStateObject={popupStateObject}
                                    setPopupStateObject={setPopupStateObject}
                                    popupStateName={popupStateName + index}
                                    closeAllPopups={closeAllPopups} />
                            );
                        } )
                    }
                </div>
                <Logo className='footer-text-logo' 
                    type='word'
                    width='100' height='50' />
            </div>
        </footer>
    );
}

export default Footer;