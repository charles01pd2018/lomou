// dependencies
import Link from 'next/link';
// elements
import { SVG } from '../../elements';


const HeaderSublinks = ( { 
    content: {
        subLinkList
    },
} ) => {

    return (
        <div className='header-dropdown-sublinks-wrapper'>
            {
                subLinkList.map( ( { text, descriptionText, href, icon } ) => {
                    /* CONTENT */
                    const  { path, alt } = icon;

                    return (
                        <Link href={href}>
                            <a className='header-dropdown-sublink'>
                                <SVG className='header-dropdown-sublink-icon'
                                    data={path}
                                    alt={alt}
                                    width='30'
                                    height='30' />
                                <div className='header-dropdown-sublink-text-wrapper'>
                                    <div className='header-dropdown-sublink-title text-sm'>
                                        {text}
                                    </div>
                                    <div className='header-dropdown-sublink-description text-xs'>
                                        {descriptionText}
                                    </div>
                                </div>
                            </a>
                        </Link>
                    )
                } )
            }
        </div>
    );
}

export default HeaderSublinks;