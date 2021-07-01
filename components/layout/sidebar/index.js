
import { Button } from '../../elements';

const Sidebar = ( { 
    id,
    content: {
        buttonList,
    },
} ) => {

    return (
        <aside id={id} className='sidebar-container'>
            <div className='sidebar-wrapper'>
                <div className='sidebar-buttons-wrapper'>
                    {
                        buttonList.map( ( buttonContent ) => {
                            return (
                                <Button className={`sidebar-button--${buttonContent.text} button-lg`} 
                                    content={buttonContent} />
                            );
                        } )
                    }
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;