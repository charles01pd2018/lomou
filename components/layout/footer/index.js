// dependencies
import classNames from 'classnames';
import { useState, useEffect, useRef } from 'react';
// hooks
import { useStateObject } from '../../../hooks';
// utils
import { clickOutsideEvent } from '../../../utils';
// components
import Modal from '../../modal';
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
        closeAllOtherPopups();
        setIsContactFormActive( state => !state );
    }

    // if no arguments are provided, all popups will be closed
    const closeAllOtherPopups = ( contactPopup=false, focusedPopupName='' ) => {
        if ( contactPopup ) setIsContactFormActive( false );

        setPopupStateObject( ( state ) => {
            const newPopupStateObject = {};
            Object.keys( state ).forEach( ( key ) => {
                if ( key === focusedPopupName ) newPopupStateObject[ key ] = state[ key ];
                else newPopupStateObject[ key ] = false;
            } );

            return newPopupStateObject;
        } );
    }

    const clickOutside = ( event ) => {
        clickOutsideEvent( event, footerNavRef, closeAllOtherPopups );
    }

    /* CLASSNAMES */
    const footerClasses = classNames( 'footer-container', className );
    const footerTextClasses = classNames( 'footer-text text-sm' ); 

    useEffect( () => {
        document.addEventListener( 'click', clickOutside );
        return () => {
            document.removeEventListener( 'click', clickOutside );
        }
    }, [] );

    return (
        <>
            <Modal id='footer-modal'
                content={contactLink.modalContent}
                isModalActive={isContactFormActive}
                setIsModalActive={setIsContactFormActive}
                closeAllOtherPopups={closeAllOtherPopups} />
            <footer id={id} className={footerClasses}>
                <div className='footer-wrapper'>
                    <div ref={footerNavRef} className='footer-nav-wrapper'>
                        <div className='footer-contact-form-wrapper'>
                            <button className={`${footerTextClasses} ${isContactFormActive ? 'active' : 'not-active'} footer-custom-text`} 
                                onClick={toggleContactForm} type='button'>
                                {contactLink.text}
                            </button>
                        </div>

                        {
                            genericLinkList.map( ( { text, subLinkList }, index ) => {
                                /* CONTENT */
                                const footerPopupContent = {
                                    text,
                                    linkList: subLinkList,
                                };

                                return (
                                    <FooterPopup key={text}
                                        footerTextClassName={footerTextClasses}
                                        content={footerPopupContent}
                                        popupStateObject={popupStateObject}
                                        setPopupStateObject={setPopupStateObject}
                                        popupStateName={popupStateName + index}
                                        closeAllOtherPopups={closeAllOtherPopups} />
                                );
                            } )
                        }
                    </div>
                    <Logo className='footer-text-logo' 
                        type='word'
                        width='100' height='50' />
                </div>
            </footer>
        </>
    );
}

export default Footer;