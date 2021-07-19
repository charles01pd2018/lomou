// dependencies
import Head from 'next/head';
import { useState } from 'react';
// components
import { ViewPanel } from '../components';
// components / layout
import { ScrollViewLayout } from '../layout';
// layout / content
import { headerContent, sidebarContent, footerContent } from '../layout/content';


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
    headerContent,
    sidebarContent,
    footerContent,
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