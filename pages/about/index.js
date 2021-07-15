
// dependencies
import Head from 'next/head';
// components
// layout


const About = ( {
    content: {
        pageTitle,
    },
 } ) => {

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <h1>About</h1>
        </>
    );
}

/* STATIC CONTENT */
const aboutContent = {
    pageTitle: 'lomou: About',
}

export function getStaticProps() {
    return {
        props: {
            content: aboutContent,
        }
    };
}

export default About;