// components
import { Header, Sidebar, Footer } from '../../components/layout';


const ScrollViewLayout = ( {
    children,
    content: {
        headerContent,
        sidebarContent,
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
            <Footer id='main-footer' />
        </div>
    );
}

export default ScrollViewLayout;