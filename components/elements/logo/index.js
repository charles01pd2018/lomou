// elements
import SVG from '../svg';


const Logo = ( { 
    className,
    type,
    width,
    height,
} ) => {

    let data;
    if ( type === 'word' ) data = '/text-logo.svg';
    if ( type === 'design' ) data = '/favicon.svg'

    return (
        <SVG className={className} 
            data={data}
            alt={`${process.env.NEXT_PUBLIC_SITE_NAME} ${type} logo`}
            width={width}
            height={height} />
    );
}

export default Logo;