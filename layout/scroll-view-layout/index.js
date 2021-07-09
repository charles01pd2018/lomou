// components
import { Header, Sidebar, Footer } from '../../components/layout';


const ScrollViewLayout = ( {
    children,
    content: {
        headerContent,
        sidebarContent,
        footerContent,
    },
    pageState,
} ) => {

    return (
        <div className='scroll-view-container'>
            <Header id='main-header' content={headerContent} />
            <Sidebar id='main-sidebar' content={sidebarContent} pageState={pageState} />
            <div className='container'>
                <main className='site-content'>{children}</main>
            </div>
            <Footer id='main-footer' content={footerContent} />
        </div>
    );
}

export default ScrollViewLayout;