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
  const handleSidebarClick = ( event ) => {

  }

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
                minTopValue='10'
                scrollCheck={true}
                intervalDelay={10}>
                <ViewPanel id={`view-panel-`} key={_id}
                  className='snap-scroll'
                  content={panelContent}
                  sectionNumber={index} />
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
          _id: '#view-panel-0',
          text: 'Superior Wireless Charging',
          icon: {
            path: '/static/icons/wireless-charging.svg',
            alt: 'Wireless Charging',
          }
        },
        {
          _id: '#view-panel-1',
          text: 'Superior Wireless Charging',
          icon: {
            path: '/static/icons/wireless-charging.svg',
            alt: 'Wireless Charging',
          }
        },
        {
          _id: '#view-panel-2',
          text: 'Superior Wireless Charging',
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
        _id: 'Best Technology',
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
        _id: 'Best Service',
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
        _id: 'Best Jawnz',
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