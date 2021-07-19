// dependencies
import classNames from 'classnames';
import { useState, useRef, useEffect } from 'react';
// hooks
import { useObjectState } from '../../../hooks';
// utils
import { togglePopups } from '../../../utils';
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
    setCustomRefList,
    popupStateName='isPopupActive',
} ) => {

    /* CONTENT */
    const [ contactLink, ...genericLinkList ] = linkList;

    /* HOOKS */
    const footerNavRef = useRef( null );
    const [ isContactFormActive, setIsContactFormActive ] = useState( false );
    const [ popupObject, setPopupObject ] = useObjectState( genericLinkList.length, false, popupStateName );

    /* FUNCTIONS */
    const toggleContactForm = () => {
        togglePopups( null, setPopupObject );
        setIsContactFormActive( state => !state );
    }

    const toggleFooterPopup = ( popupStateName ) => {
        togglePopups( null, setPopupObject, popupStateName );
    }

    /* CLASSNAMES */
    const footerClasses = classNames( 'footer-container', className );
    const footerTextClasses = classNames( 'footer-text text-sm' ); 

    useEffect( () => {
        setCustomRefList( ( state ) => {
            state.push( [ footerNavRef, () => togglePopups( null, setPopupObject ) ] );
            return state;
        } );
    }, [] );

    return (
        <>
            <Modal id='footer-modal'
                content={contactLink.modalContent}
                isModalActive={isContactFormActive}
                setIsModalActive={setIsContactFormActive} />
            <footer id={id} className={footerClasses}>
                <div className='footer-wrapper'>
                    <nav ref={footerNavRef} className='footer-nav-wrapper'>
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

                                const popupStateKey = popupStateName + index;

                                return (
                                        <FooterPopup key={text}
                                            footerTextClassName={footerTextClasses}
                                            content={footerPopupContent}
                                            isPopupActive={popupObject[ popupStateKey ]}
                                            buttonOnClick={() => toggleFooterPopup( popupStateKey )} />
                                );
                            } )
                        }
                    </nav>
                    <Logo className='footer-text-logo' 
                        type='word'
                        width='100' height='50' />
                </div>
            </footer>
        </>
    );
}

export default Footer;