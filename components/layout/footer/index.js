// dependencies
import classNames from 'classnames';
import Link from 'next/link';
import { useState } from 'react';
// elements
import { Logo } from '../../elements';
// partials
import FooterPopup from './footerPopup';


const Footer = ( { 
    id,
    className,
    content: {
        linkList, // 0 -> contact, 1 -> blueprint
    },
} ) => {

    /* CONTENT */
    const [ contactLink, ...genericLinkList ] = linkList;

    /* HOOKS */
    const [ contactFormActive, setContactFormActive ] = useState( false );
    const [ blueprintPopUpActive, setBlueprintPopUpActive ] = useState( false );

    /* FUNCTIONS */
    const handleContactFormClick = () => {
        setContactFormActive( state => !state );
    }

    /* CLASSNAMES */
    const footerClasses = classNames( 'footer-container', className );
    const footerTextClasses = classNames( 'footer-text text-sm' );
    const footerLinkTextClasses = classNames( 'footer-link-text text-sm' );

    return (
        <footer id={id} className={footerClasses}>
            <div className='footer-wrapper'>
                <div className='footer-links-wrapper'>
                    <button className='footer-text-wrapper footer-custom-popup' onClick={handleContactFormClick} type='button'>
                        <div className='footer-contact-form-wrapper footer-popup-wrapper'>
                            <Link href='/documentation'>
                                <span className={footerLinkTextClasses}>
                                    Contact Form
                                </span>
                            </Link>
                        </div>
                        <span className={footerTextClasses}>{contactLink.text}</span>
                    </button>
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