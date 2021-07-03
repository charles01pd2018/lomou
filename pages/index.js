// dependencies
import Head from 'next/head';
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

            return (
              <ViewPanel id={`view-panel-${index}`} key={_id} content={panelContent} />
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
        headerText: 'The Best Technology There Is',
        descriptionText: 'We are the innovators of technology. We value technology, what it stands for, and everything that is techno.',
      }
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