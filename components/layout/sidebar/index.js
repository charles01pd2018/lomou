// dependencies
import classNames from 'classnames';
// elements
import { SVG } from '../../elements';


const Sidebar = ( { 
    id,
    content: {
        buttonList,
    },
    pageState,
} ) => {

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
                                <div key={_id} className='sidebar-icon-wrapper'>
                                    <div className={iconButtonClasses}>
                                        <SVG className={iconClasses}
                                            data={path}
                                            alt={alt}
                                            width='65'
                                            height='65' />
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