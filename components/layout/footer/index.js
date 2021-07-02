// elements
import { TextLogo } from '../../elements';


const Footer = ( { 
    id,
    content,
} ) => {

    return (
        <footer id={id} className='footer-container'>
            <div className='footer-wrapper'>
                <TextLogo className='footer-text-logo' width='100' height='50' />
            </div>
        </footer>
    );
}

export default Footer;