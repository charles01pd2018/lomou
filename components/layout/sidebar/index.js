// elements
import { IconButton, SVG } from '../../elements';

const Sidebar = ( { 
    id,
    content: {
        buttonList,
    },
} ) => {

    return (
        <aside id={id} className='sidebar-container'>
            <div className='sidebar-wrapper'>
                <nav className='sidebar-nav-wrapper'>
                    {
                        buttonList.map( ( { text, icon } ) => {
                            /* CONTENT */
                            const { path, alt } = icon;

                            return (
                                <IconButton key={alt} className='sidebar-icon-button'>
                                    {text}
                                    <SVG className='sidebar-icon' 
                                        data={path} 
                                        alt={alt}
                                        width='70'
                                        height='70' />
                                </IconButton>
                            );
                        } )
                    }
                </nav>
            </div>
        </aside>
    );
}

export default Sidebar;