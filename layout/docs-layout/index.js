// components
import { Header } from '../../components/layout';

const DocsLayout = ( { 
    children,
    content: {
        headerContent,
    },
} ) => {

    return (
        <div className='docs-layout-container'>
            <Header id='main-header' content={headerContent} />
            <div className='container'>
                <main className='site-content'>{children}</main>
            </div>
        </div>
    );
}

export default DocsLayout;