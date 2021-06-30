const DefaultLayout = ({
    children
}) => {

    return (
        <>
            <main className='site-content'>{children}</main>
        </>
    );
}

export default DefaultLayout;