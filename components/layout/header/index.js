// dependencies
import classNames from 'classnames';
// hooks
import { useStateObject, useClickOutsideRef } from '../../../hooks';
// utils
import { closeAllPopups } from '../../../utils';
// elements
import { Button, LinkButton } from '../../elements';
// partials
import HeaderDropdown from './headerDropdown';


const Header = ( { 
    id,
    className,
    content: {
        buttonList,
    },
    dropdownStateName='headerDropdown',
} ) => {

    /* CONTENT */
    const [ linkButton, ...subLinkButtons ] = buttonList;

    /* HOOKS */
    const [ dropdownStateObject, setDropdownStateObject ] = useStateObject( subLinkButtons.length, false, dropdownStateName );
    const headerNavRef = useClickOutsideRef( () => {
        closeAllPopups( null, setDropdownStateObject );
    } );

    /* FUNCTIONS */
    const toggleHeaderDropdown = ( dropdownStateName ) => {
        closeAllPopups( null, setDropdownStateObject, dropdownStateName );

        setDropdownStateObject( ( state ) => {
            const currentState = state[ dropdownStateName ];

            return {
                ...state,
                [ dropdownStateName ]: !currentState,// this has to be put second to update the object correctly 
            };
        } );
    }

    /* CLASSNAMES */
    const headerClasses = classNames( 'header-container', className );
    const headerButtonClasses = classNames( 'header-button button-lg' );

    return (
        <header id={id} className={headerClasses}>
            <div className='header-wrapper'>
                <nav ref={headerNavRef} className='header-buttons-wrapper'>
                    <LinkButton className={`${headerButtonClasses} header-link-button header-button--${linkButton.text}`} 
                        content={linkButton} />
                    {
                        subLinkButtons.map( ( { text }, index ) => {

                            return (
                                <Button key={text} className={`${headerButtonClasses} header-sublink-button header-button--${text}`}
                                    content={{text}} onClick={() => toggleHeaderDropdown( dropdownStateName + index )} />
                            );
                        } )
                    }
                </nav>
            </div>
            {
                    subLinkButtons.map( ( { linkList }, index ) => {
                        /* CONTENT */
                        const { text } = linkList[ index ];

                        return (
                            <HeaderDropdown key={text} content={{linkList}}
                                isDropdownActive={dropdownStateObject[ dropdownStateName + index ]} />
                        );
                    } )
            }
        </header>
    );
}

export default Header;