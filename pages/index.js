// dependencies
import Head from 'next/head';
import { useState } from 'react';
import classNames from 'classnames';
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
      <ScrollViewLayout content={scrollViewLayoutContent} >
        {
          panelList.map( ( panelItems, index ) => {
            /* CONTENT */
            const { _id, ...panelContent } = panelItems;
            /* CLASSNAMES */
            const viewPanelClasses = classNames( activeViewPanel === index && 'view-panel-active' );

            return (
              <ViewPanel id={`view-panel-${index}`} key={_id} 
                className={viewPanelClasses}
                content={panelContent} />
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
          text: 'Superior Wireless Charging',
          icon: {
            path: '/static/icons/wireless-charging.svg',
            alt: 'Wireless Charging',
          }
        },
        {
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