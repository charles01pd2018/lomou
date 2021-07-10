// dependencies
import { useState, useRef, useEffect } from 'react';


const FooterPopup = ( {
    content,
} ) => {

    /* HOOKS */
    const popupRef = useRef( null );

    useEffect( () => {
        // click outside to close THIS popup
        // but i wanna close ALL the popups
    }, [] );

    return (
        <nav ref={popupRef} className='footer-popup-wrapper'>
            Footer Popup
        </nav>
    );
}

export default FooterPopup;