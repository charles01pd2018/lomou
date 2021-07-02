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
  }
} ) => {
  return (
    <>
      <Head>
          <title>{pageTitle}</title>
      </Head>
      <ScrollViewLayout content={scrollViewLayoutContent} >
        <ViewPanel id='' />
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
            path: 'static/icons/wireless-charging.svg',
            alt: 'Wireless Charging',
          }
        },
        {
          text: 'Superior Wireless Charging',
          icon: {
            path: 'static/icons/wireless-charging.svg',
            alt: 'Wireless Charging',
          }
        },
      ]
    },
  }
}

export function getStaticProps() {
  return {
    props: {
      content: HomeContent,
    }
  };
}

export default Home;