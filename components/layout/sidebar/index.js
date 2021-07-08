// dependencies
import Link from 'next/link';
import classNames from 'classnames';
// elements
import { IconButton, SVG } from '../../elements';


const Sidebar = ( { 
    id,
    content: {
        buttonList,
    },
    pageState,
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
                                    <div className={iconButtonClasses}>
                                        <SVG className={iconClasses}
                                            data={path}
                                            alt={alt}
                                            width='70'
                                            height='70' />
                                        <div className='sidebar-icon-text text-sm'>{text}</div>
                                    </div>
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