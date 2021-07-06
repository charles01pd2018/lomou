// dependencies
import Head from 'next/head';
import { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
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

  /* FUNCTIONS */
  const handleViewPanelVisible = ( isVisible, viewPanelIndex ) => {
    if ( isVisible ) setActiveViewPanel( viewPanelIndex );
  }

  /* CONTENT */
  const { panelList } = viewPanelContent;


  return (
    <>
      <Head>
          <title>{pageTitle}</title>
      </Head>
      <ScrollViewLayout content={scrollViewLayoutContent} 
        pageState={activeViewPanel} 
        setPageState={setActiveViewPanel}>
        {
          panelList.map( ( panelItems, index ) => {
            /* CONTENT */
            const { _id, ...panelContent } = panelItems;

            return (
              <VisibilitySensor 
                onChange={( isVisible ) => handleViewPanelVisible( isVisible, index )}
                intervalDelay={50}
                scrollDelay={10}>
                <ViewPanel id={_id} key={_id}
                  className='snap-scroll'
                  content={panelContent} />
              </VisibilitySensor>
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
          text: 'Shop',
        },
        {
          text: 'Explore'
        }
      ],
    },
    sidebarContent: {
      buttonList: [
        {
          _id: 'best-technology',
          text: 'Superior Charging',
          icon: {
            path: '/static/icons/wireless-charging.svg',
            alt: 'Wireless Charging',
          }
        },
        {
          _id: 'best-service',
          text: 'Superior Charging',
          icon: {
            path: '/static/icons/wireless-charging.svg',
            alt: 'Wireless Charging',
          }
        },
        {
          _id: 'best-jawnz',
          text: 'Superior Charging',
          icon: {
            path: '/static/icons/wireless-charging.svg',
            alt: 'Wireless Charging',
          }
        },
      ]
    },
  },
  viewPanelContent: {
    panelList: [
      {
        _id: 'best-technology',
        text: {
          headerText: 'The Best Technology There Is',
          descriptionText: 'We are the innovators of technology. We value technology, what it stands for, and everything that is techno.',
        },
        image: {
          path: '/static/images/product--glass-wireless-charger.jpg',
          alt: 'Wireless Charging JPG',
        }
      },
      {
        _id: 'best-service',
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