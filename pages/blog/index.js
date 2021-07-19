
// dependencies
import Head from 'next/head';
// components
// layout


const Blog = ( {
    content: {
        pageTitle,
    },
 } ) => {

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <h1>Blog</h1>
        </>
    );
}

/* STATIC CONTENT */
const blogContent = {
    pageTitle: 'lomou: Blog',
}

export function getStaticProps() {
    return {
        props: {
            content: blogContent,
        }
    };
}

export default Blog;