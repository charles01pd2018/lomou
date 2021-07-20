// components
import { Header, Footer } from '../../components/layout';


const ScrollViewLayout = ( {
    children,
    content: {
        headerContent,
        footerContent,
    },
} ) => {

    return (
        <div className='page-layout-container brand-layout'>
            <Header id='main-header' content={headerContent} />
            <div className='container'>
                <main className='site-content'>{children}</main>
            </div>
            <Footer id='main-footer' content={footerContent} className='footer-static' />
        </div>
    );
}

export default ScrollViewLayout;