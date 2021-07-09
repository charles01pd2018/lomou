// elements
import { Logo } from '../../elements';


const Footer = ( { 
    id,
    content,
} ) => {

    return (
        <footer id={id} className='footer-container'>
            <div className='footer-wrapper'>
                <Logo className='footer-text-logo' 
                    type='word'
                    width='100' height='50' />
            </div>
        </footer>
    );
}

export default Footer;