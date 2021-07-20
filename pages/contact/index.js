// dependencies
import Head from 'next/head';
// components
import { ContactForm } from '../../components';
// layout
import { PageLayout } from '../../layout';


const Contact = ( {
    content: {
        pageTitle,
        pageLayoutContent,
        contactFormContent,
    },
 } ) => {

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <PageLayout content={pageLayoutContent}>
                <ContactForm id='main-contact' content={contactFormContent} />
            </PageLayout>
        </>
    );
}

/* STATIC CONTENT */
const docsContent = {
    pageTitle: 'lomou: Contact',
    pageLayoutContent: {
        headerContent: {
            buttonList: [
                {
                    text: 'Shop',
                },
                {
                    text: 'Explore'
                },
            ],
        },
        footerContent: {
            linkList: [
              {
                text: 'contact', // custom
              },
              {
                text: 'blueprint',
                subLinkList: [
                  {
                    text: 'Terms',
                    href: '/documentation',
                    icon: {
                      path: '/static/icons/wireless-charging.svg',
                      alt: 'Charging',
                    },
                  },
                  {
                    text: 'Shipping Policy',
                    href: '/documentation',
                    icon: {
                      path: '/static/icons/wireless-charging.svg',
                      alt: 'Charging',
                    },
                  },
                  {
                    text: 'Privacy Policy',
                    href: '/documentation',
                    icon: {
                      path: '/static/icons/wireless-charging.svg',
                      alt: 'Charging',
                    },
                  },
                ],
              },
              {
                text: 'hello',
                subLinkList: [
                  {
                    text: 'Jawnz',
                    href: '/documentation',
                    icon: {
                      path: '/static/icons/wireless-charging.svg',
                      alt: 'Charging',
                    },
                  }
                ]
              }
            ],
          },
    },
    contactFormContent: {

    }
}

export function getStaticProps() {
    return {
        props: {
            content: docsContent,
        }
    };
}

export default Contact;