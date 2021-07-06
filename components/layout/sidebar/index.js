// dependencies
import Link from 'next/link';
import classNames from 'classnames';
// utils
import { smoothVerticalScrolling } from '../../../utils/smoothScroll';
// elements
import { IconButton, SVG } from '../../elements';


const Sidebar = ( { 
    id,
    content: {
        buttonList,
    },
    pageState,
    setPageState,
} ) => {

    /* FUNCTIONS */
    const changePageState = ( index ) => {
        setPageState( index );
    }

    return (
        <aside id={id} className='sidebar-container'>
            <div className='sidebar-wrapper'>
                <nav className='sidebar-nav-wrapper'>
                    {
                        buttonList.map( ( { _id, text, icon }, index ) => {
                            /* CONTENT */
                            const { path, alt } = icon;
                            /* CLASSNAMES */
                            const iconButtonClasses = classNames( 'sidebar-icon-button', 
                                pageState === index && 'sidebar-icon-button-active' );
                            const iconClasses = classNames( 'sidebar-icon', 
                                pageState === index && 'sidebar-icon-active');

                            return (
                                <div key={alt} className='sidebar-icon-wrapper'>
                                    <Link key={alt} href={`#${_id}`}>
                                        <a>
                                            <IconButton className={iconButtonClasses} onClick={() => changePageState( index )}>
                                                <SVG className={iconClasses}
                                                    data={path}
                                                    alt={alt}
                                                    width='70'
                                                    height='70' />
                                                <div className='sidebar-icon-text text-sm'>{text}</div>
                                            </IconButton>
                                        </a>
                                    </Link>
                                </div>
                            );
                        } )
                    }
                </nav>
            </div>
        </aside>
    );
}

export default Sidebar;