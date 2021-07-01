// components
import { Header, Sidebar } from '../../components/layout';


const ScrollViewLayout = ( {
    children,
    content: {
        sidebarContent,
    },
} ) => {

    return (
        <>
            <Header />
            <Sidebar id='main-sidebar' content={sidebarContent} />
            <main className='site-content'>{children}</main>
        </>
    );
}

export default ScrollViewLayout;