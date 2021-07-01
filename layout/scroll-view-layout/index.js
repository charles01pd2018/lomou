// components
import { Header, Sidebar } from '../../components/layout';


const ScrollViewLayout = ( {
    children,
    content: {
        headerContent,
        sidebarContent,
    },
} ) => {

    return (
        <>
            <Header id='main-header' content={headerContent} />
            <Sidebar id='main-sidebar' content={sidebarContent} />
            <main className='site-content'>{children}</main>
        </>
    );
}

export default ScrollViewLayout;