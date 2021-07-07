// components
import { Header } from '../../components/layout';

const DocsLayout = ( { 
    children,
    content,
} ) => {

    return (
        <div className='docs-layout-container'>
            <div className='container'>
                <main className='site-content'>{children}</main>
            </div>
        </div>
    );
}

export default DocsLayout;