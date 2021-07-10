// dependencies
import classNames from 'classnames';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
// hooks
import { createStateObject } from '../../../hooks';
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
    const [ isContactFormActive, setIsContactFormActive ] = useState( false );
    const [ popupStateObject, setPopupStateObject ] = useState( createStateObject( genericLinkList.length, false, popupStateName ) );
    console.log( popupStateObject );

    /* FUNCTIONS */
    const toggleContactForm = () => {
        // closeAllPopUps();
        setIsContactFormActive( state => !state );
    }

    const closeAllPopUps = () => {
        setPopupStateList( state => {
            state.forEach( ( [ _, setState ] ) => {
                setState( false );
            } );
        } );
    }

    /* CLASSNAMES */
    const footerClasses = classNames( 'footer-container', className );
    const footerTextClasses = classNames( 'footer-text text-sm' ); 
    const footerLinkTextClasses = classNames( 'footer-link-text text-sm' );


    return (
        <footer id={id} className={footerClasses}>
            <div className='footer-wrapper'>
                <div className='footer-nav-container'>

                    <div className='footer-nav-wrapper'>
                        {
                             isContactFormActive && (
                                <div className='footer-popup-container footer-contact-form-container'>
                                    <div className='footer-popup-wrapper footer-contact-form-wrapper'>
                                        <Link href='/documentation'>
                                            <a className={footerLinkTextClasses}>
                                                Contact Form
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            )
                        }
                        <button className={footerTextClasses} onClick={toggleContactForm} type='button'>
                            {contactLink.text}
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
                                    closeAllPopups={closeAllPopUps} />
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