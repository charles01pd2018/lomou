// dependencies
import Head from 'next/head';
import { useState } from 'react';
// components
import { ViewPanel } from '../components';
// components / layout
import { ScrollViewLayout } from '../layout';


const Home = ( {
  content: {
    pageTitle,
    scrollViewLayoutContent,
    viewPanelContent,
  }
} ) => {
  
  /* HOOKS */
  const [ activeViewPanel, setActiveViewPanel ] = useState( 0 );

  /* CONTENT */
  const { panelList } = viewPanelContent;


  return (
    <>
      <Head>
          <title>{pageTitle}</title>
      </Head>
      <ScrollViewLayout content={scrollViewLayoutContent} pageState={activeViewPanel}>
        {
          panelList.map( ( panelItems, index ) => {
            /* CONTENT */
            const { _id, ...panelContent } = panelItems;

            return (
                <ViewPanel id={_id} key={_id}
                  className='snap-scroll'
                  content={panelContent}
                  sectionNumber={index} 
                  setPageState={setActiveViewPanel} />
            );
          } )
        }
      </ScrollViewLayout>
    </>
  );
}


/* STATIC CONTENT */
const HomeContent = {
  pageTitle: 'lomou',
  scrollViewLayoutContent: {
    headerContent: {
      buttonList: [
        {
          text: 'Shop', // regular link
          href: '/shop',
        },
        {
          text: 'Explore',
          linkList: [
            {
              text: 'Blog',
              href: '/blog',
              icon: {
                path: '/static/icons/wireless-charging.svg',
                alt: 'Charging',
              },
              subLinkList: [
                {
                  text: 'Qi Wireless Charging',
                  descriptionText: 'Learn about the Qi Standard',
                  href: '/blog/qi-charging',
                  icon: {
                    path: '/static/icons/wireless-charging.svg',
                    alt: 'Charging',
                  },
                },
                {
                  text: 'Materials',
                  descriptionText: 'Learn about the materials',
                  href: '/blog/materials',
                  icon: {
                    path: '/static/icons/wireless-charging.svg',
                    alt: 'Charging',
                  },
                },
                {
                  text: 'More Jawnz',
                  descriptionText: 'Learn about the more jawnz',
                  href: '/blog/more-jawnz',
                  icon: {
                    path: '/static/icons/wireless-charging.svg',
                    alt: 'Charging',
                  },
                },
              ],
            },
            {
              text: 'About',
              href: '/about',
              icon: {
                path: '/static/icons/wireless-charging.svg',
                alt: 'Charging',
              },
              subLinkList: [
                {
                  text: 'Company Mission',
                  descriptionText: 'Learn about the company mission',
                  href: '/about/company-mission',
                  icon: {
                    path: '/static/icons/wireless-charging.svg',
                    alt: 'Charging',
                  },
                },
                {
                  text: 'Beliefs',
                  descriptionText: 'Learn about the beliefs',
                  href: '/about/beliefs',
                  icon: {
                    path: '/static/icons/wireless-charging.svg',
                    alt: 'Charging',
                  },
                },
                {
                  text: 'Methodology',
                  descriptionText: 'Learn about the methodology',
                  href: '/about/methodology',
                  icon: {
                    path: '/static/icons/wireless-charging.svg',
                    alt: 'Charging',
                  },
                },
              ],
            }
          ],
        },
      ],
    },
    sidebarContent: {
      buttonList: [
        {
          _id: 'best-technology',
          text: 'Charging',
          icon: {
            path: '/static/icons/wireless-charging.svg',
            alt: 'Wireless Charging',
          }
        },
        {
          _id: 'best-service',
          text: 'Charging',
          icon: {
            path: '/static/icons/wireless-charging.svg',
            alt: 'Wireless Charging',
          }
        },
        {
          _id: 'best-jawnz',
          text: 'Charging',
          icon: {
            path: '/static/icons/wireless-charging.svg',
            alt: 'Charging',
          },
        },
      ]
    },
    footerContent: {
      linkList: [
        {
          text: 'contact', // custom
          modalContent: {
            text: 'lomoulolo@gmail.com',
          }
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
  viewPanelContent: {
    panelList: [
      {
        _id: 'best-technology',
        icon: {
          path: '/static/icons/wireless-charging.svg',
          alt: 'Charging',
        },
        text: {
          headerText: 'The Best Technology There Is',
          descriptionText: 'We are the innovators of technology. We value technology, what it stands for, and everything that is techno. We are the innovators of technology. We value technology, what it stands for, and everything that is techno. We are the innovators of technology. We value technology, what it stands for, and everything that is techno. We are the innovators of technology. We value technology, what it stands for, and everything that is techno.',
        },
        image: {
          path: '/static/images/product--glass-wireless-charger.jpg',
          alt: 'Wireless Charging JPG',
        }
      },
      {
        _id: 'best-service',
        icon: {
          path: '/static/icons/wireless-charging.svg',
          alt: 'Charging',
        },
        text: {
          headerText: 'The Best Service Ever',
          descriptionText: 'We provide the best service in the whole wide world. no cap. no lies. har har har.',
        },
        image: {
          path: '/static/images/product--glass-wireless-charger.jpg',
          alt: 'Wireless Charging JPG',
        }
      },
      {
        _id: 'best-jawnz',
        icon: {
          path: '/static/icons/wireless-charging.svg',
          alt: 'Charging',
        },
        text: {
          headerText: 'The Best Jawnz Ever',
          descriptionText: 'jawn jawn jawn',
        },
        image: {
          path: '/static/images/product--glass-wireless-charger.jpg',
          alt: 'Wireless Charging JPG',
        }
      },
    ],
  },
}

export function getStaticProps() {
  return {
    props: {
      content: HomeContent,
    }
  };
}

export default Home;