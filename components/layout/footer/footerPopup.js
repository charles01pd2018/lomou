// dependencies
import classNames from 'classnames';
import Link from 'next/link'
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

    /* CONSTANTS */
    const isPopupActive = popupStateObject[ popupStateName ];

    /* FUNCTIONS */
    const togglerFooterPopup = () => {
        closeAllPopups( null, setPopupStateObject, popupStateName );

        setPopupStateObject( ( state ) => {
            const currentState = state[ popupStateName ];

            return {
                ...state,
                [ popupStateName ]: !currentState, // this has to be put second to update the object correctly 
            }
        } );
    }
    
    /* CLASSNAMES */
    const isPopupActiveClasses = isPopupActive ? 'active' : 'not-active';
    const footerPopupNavWrapperClasses = classNames( 'footer-popup-nav-wrapper',
        isPopupActiveClasses );
    const footerTextClasses = classNames( footerTextClassName, 'footer-generic-text',
        isPopupActiveClasses );


    return (
        <div className='footer-popup-nav-container'>
            <div className={footerPopupNavWrapperClasses}>
                {
                    linkList.map( ( { text, href, icon } ) => {
                        /* CONTENT */
                        const { path, alt } = icon;

                        return (
                            <div key={text} className='footer-popup-link-wrapper'>
                                {
                                    isPopupActive && (
                                        <Link href={href}>
                                            <a className='footer-popup-link'>
                                                <SVG className='footer-popup-link-icon'
                                                    data={path}
                                                    alt={alt}
                                                    width='30'
                                                    height='30' />
                                                <div className='footer-link-text text-sm'>
                                                    {text}
                                                </div>
                                            </a>
                                        </Link>
                                    )
                                }
                            </div>
                        );
                    } )
                }
            </div>
             <button className={footerTextClasses} onClick={togglerFooterPopup} type='button'>
                {text}
            </button>
        </div>
    );
}


export default FooterPopup;