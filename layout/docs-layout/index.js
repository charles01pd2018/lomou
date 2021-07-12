// dependencies
import { useEffect, useState } from 'react';
// utils
import { calcPagePosition } from '../../utils';
// components
import { Header } from '../../components/layout';
import { ProgressBar } from '../../components';


const DocsLayout = ( { 
    children,
    content: {
        headerContent,
    },
} ) => {

    /* HOOKS */
    const [ scrollPercent, setScrollPercent ] = useState( 0 );

    /* FUNCTIONS */
    const handleScroll = () => {
        requestAnimationFrame( () => {
            setScrollPercent( calcPagePosition() );
        } );
    }
    
    useEffect( () => {
        document.addEventListener( 'scroll', handleScroll );
        return () => {
            document.removeEventListener( 'scroll', handleScroll );
        }
    }, [] );

    return (
        <div className='docs-layout-container'>
            <ProgressBar id='doc-progress-bar' scrollPercent={scrollPercent} />
            <Header id='main-header' content={headerContent} className='header-sticky' />
            <div className='container'>
                <main className='site-content'>{children}</main>
            </div>
        </div>
    );
}

export default DocsLayout;