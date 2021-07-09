// dependencies
import classNames from 'classnames';
// elements
import { Logo } from '../../elements';


const Footer = ( { 
    id,
    className,
    content: {
        linkList,
    },
} ) => {

    /* CLASSNAMES */
    const footerClasses = classNames( 'footer-container', className );

    return (
        <footer id={id} className={footerClasses}>
            <div className='footer-wrapper'>
                {
                    linkList.map( ( link ) => {
                        return (
                            <div className='footer-links-wrapper'>
                                {link.text}
                            </div>
                        );
                    } )
                }
                <Logo className='footer-text-logo' 
                    type='word'
                    width='100' height='50' />
            </div>
        </footer>
    );
}

export default Footer;