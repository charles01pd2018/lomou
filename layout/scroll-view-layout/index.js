// components
import { Header, Sidebar, Footer } from '../../components/layout';


const ScrollViewLayout = ( {
    children,
    content: {
        headerContent,
        sidebarContent,
    },
} ) => {

    return (
        <div className='scroll-view-container'>
            <Header id='main-header' content={headerContent} />
            <Sidebar id='main-sidebar' content={sidebarContent} />
            <div className='container'>
                <main className='site-content'>{children}</main>
            </div>
            <Footer id='main-footer' />
        </div>
    );
}

export default ScrollViewLayout;