// dependencies
import classNames from 'classnames';
// elements
import { Button } from '../../elements';

const Header = ( { 
    id,
    className,
    content: {
        buttonList,
    },
} ) => {

    /* CLASSNAMES */
    const headerClasses = classNames( 'header-container', className );

    return (
        <aside id={id} className={headerClasses}>
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