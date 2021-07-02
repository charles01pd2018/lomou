
const SVG = ( {
    className,
    data,
    alt,
    width,
    height,
    type='image/svg+xml',
} ) => {

    return (
        <object className={className}
            data={data}
            alt={alt}
            width={width}
            height={height}
            type={type} >
            {alt}
        </object>
    );
}

export default SVG;