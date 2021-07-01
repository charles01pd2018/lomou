// dependencies
import Head from 'next/head';
// components
import { ViewPanel } from '../components';
// components / layout
import { ScrollViewLayout } from '../layout';

const Home = ({
  content: {
    pageTitle,
    scrollViewLayoutContent,
  }
}) => {
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
    sidebarContent: {
      buttonList: [
        {
          text: 'CTA',
        }
      ]
    }
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