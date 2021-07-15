
// dependencies
import Head from 'next/head';
// components
// layout


const Shop = ( {
    content: {
        pageTitle,
    },
 } ) => {

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <h1>Shop</h1>
        </>
    );
}

/* STATIC CONTENT */
const shopContent = {
    pageTitle: 'lomou: Shop',
}

export function getStaticProps() {
    return {
        props: {
            content: shopContent,
        }
    };
}

export default Shop;