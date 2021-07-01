
const SVG = ( {
    className,
    data,
    alt,
    type='image/svg+xml',
    role='presentation',
} ) => {

    return (
        <object className={className}
            data={data}
            alt={alt}
            type={type}
            role={role} >
            {alt}
        </object>
    );
}

export default SVG;