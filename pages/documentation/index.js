// dependencies
import Head from 'next/head';
// components
import { Doc } from '../../components';
// layout
import { DocsLayout } from '../../layout';


const Documentation = ( {
    content: {
        pageTitle,
        docsLayoutContent,
        docContent,
    },
 } ) => {

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <DocsLayout content={docsLayoutContent}>
                <Doc id='main-doc' content={docContent} />
            </DocsLayout>
        </>
    );
}

/* STATIC CONTENT */
const docsContent = {
    pageTitle: 'lomou: Docs',
    docsLayoutContent: {
        headerContent: {
            buttonList: [
                {
                    text: 'Shop',
                },
                {
                    text: 'Explore'
                }
            ],
        },
    },
    docContent: {
        docList: [
            {
                header: 'TOS',
                paragraph: 'You will follow our rules while you are on our site',
            },
            {
                header: 'Data',
                paragraph: 'You will follow our rules while you are on our site',
            },
        ]
    },
}

export function getStaticProps() {
    return {
        props: {
            content: docsContent,
        }
    };
}

export default Documentation;