// dependencies
import { useState } from 'react';
// components
import { Header, Sidebar, Footer } from '../../components/layout';
// hooks
import { modifyRefList } from '../../hooks';


const ScrollViewLayout = ( {
    children,
    content: {
        headerContent,
        sidebarContent,
        footerContent,
    },
    pageState,
} ) => {

    /* HOOKS */
    const [ customRefList, setCustomRefList ] = useState( [] );
    modifyRefList( customRefList );

    return (
        <div className='scroll-view-layout-container'>
            <Header id='main-header' content={headerContent} setCustomRefList={setCustomRefList} />
            <Sidebar id='main-sidebar' content={sidebarContent} pageState={pageState} />
            <div className='container'>
                <main className='site-content'>{children}</main>
            </div>
            <Footer id='main-footer' content={footerContent} setCustomRefList={setCustomRefList} />
        </div>
    );
}

export default ScrollViewLayout;