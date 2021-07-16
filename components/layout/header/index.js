// dependencies
import classNames from 'classnames';
// hooks
import { useStateObject, useClickOutsideRef } from '../../../hooks';
// utils
import { clickOutsideEvent } from '../../../utils';
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

    /* CLASSNAMES */
    const headerClasses = classNames( 'header-container', className );
    const headerButtonClasses = classNames( 'header-button button-lg' );

    return (
        <aside id={id} className={headerClasses}>
            <div className='header-wrapper'>
                <div className='header-buttons-wrapper'>
                    <LinkButton className={`${headerButtonClasses} header-link-button header-button--${linkButton.text}`} 
                        content={linkButton} />
                    {
                        subLinkButtons.map( ( buttonContent ) => {
                            /* CONTENT */
                            const { text } =  buttonContent;

                            return (
                                <Button key={text} className={`${headerButtonClasses} header-sublink-button header-button--${text}`} 
                                    content={buttonContent} />
                            );
                        } )
                    }
                </div>
            </div>
        </aside>
    );
}

export default Header;