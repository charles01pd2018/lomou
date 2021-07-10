// dependencies
import classNames from 'classnames';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
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
} ) => {

    /* CONTENT */
    const [ contactLink, ...genericLinkList ] = linkList;

    /* HOOKS */
    const [ isContactFormActive, setIsContactFormActive ] = useState( false );
    // map through the linkList and create states for each popUp
    // its gonna look like [ isPopupOneActive, setIsPopupOneActive ] = useState( false );
    // to close the states, you can loop through the link list and do the same thing with eval


    /* FUNCTIONS */
    const handleContactFormClick = () => {
        // closeAllPopUps();
        setIsContactFormActive( state => !state );
    }

    const closeAllPopUps = () => {
        setPopupActive( false );
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
                        <button className={footerTextClasses} onClick={handleContactFormClick} type='button'>
                            {contactLink.text}
                        </button>
                    </div>

                    {
                        genericLinkList.map( ( { text, subLinkList } ) => {
                            return (
                                <button className='footer-text-wrapper footer-generic-popup'>
                                    <span className={footerTextClasses}>{text}</span>
                                </button>
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