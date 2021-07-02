
import { Button } from '../../elements';

const Header = ( { 
    id,
    content: {
        buttonList,
    },
} ) => {

    return (
        <aside id={id} className='header-container'>
            <div className='header-wrapper'>
                <div className='header-buttons-wrapper'>
                    {
                        buttonList.map( ( buttonContent ) => {
                            /* CONTENT */
                            const { text } =  buttonContent;

                            return (
                                <Button key={text} className={`header-button--${text} header-button button-lg`} 
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