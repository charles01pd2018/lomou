// dependencies
import classNames from 'classnames';
import { useRef, useEffect } from 'react';
// hooks
import { useObjectState } from '../../../hooks';
// utils
import { togglePopups } from '../../../utils';
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
    setCustomRefList,
    dropdownStateName='headerDropdown',
} ) => {

    /* CONTENT */
    const [ linkButton, ...subLinkButtons ] = buttonList;

    /* HOOKS */
    const headerNavRef = useRef( null );
    const [ dropdownObject, setDropdownObject ] = useObjectState( subLinkButtons.length, false, dropdownStateName );

    /* FUNCTIONS */
    const toggleHeaderDropdown = ( dropdownStateKey ) => {        
        togglePopups( null, setDropdownObject, dropdownStateKey );
    }

    /* CLASSNAMES */
    const headerClasses = classNames( 'header-container', className );
    const headerButtonClasses = classNames( 'header-button button-lg' );

    useEffect( () => {
        setCustomRefList( ( state ) => {
            state.push( [ headerNavRef, () => togglePopups( null, setDropdownObject ) ] );
            return state;
        } );
    }, [] );

    console.log( headerNavRef );

    return (
        <header id={id} className={headerClasses}>
            <div className='header-wrapper'>
                <nav  className='header-buttons-wrapper'>
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
                                isDropdownActive={dropdownObject[ dropdownStateName + index ]}
                                setCustomRefList={setCustomRefList}
                                setDropdownObject={setDropdownObject}
                                ref={headerNavRef} />
                        );
                    } )
            }
        </header>
    );
}

export default Header;