// dependencies
import Head from 'next/head';
// components
// layout


const Contact = ( {
    content: {
        pageTitle,
    },
 } ) => {

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
        </>
    );
}

/* STATIC CONTENT */
const docsContent = {
    pageTitle: 'lomou: Contact',
}

export function getStaticProps() {
    return {
        props: {
            content: docsContent,
        }
    };
}

export default Contact;