// elements
import SVG from '../svg';


const TextLogo = ( { 
    className,
    width,
    height,
} ) => {

    return (
        <SVG className={className} 
            data='text-logo.svg' 
            alt={`${process.env.NEXT_PUBLIC_SITE_NAME} text logo`}
            width={width}
            height={height} />
    );
}

export default TextLogo;