// dependencies
import Head from 'next/head';

// layout
import { DefaultLayout } from '../layout';

const Home = ({
  content: {
    pageTitle,
  }
}) => {
  return (
    <DefaultLayout>
      <div className="container">
        <Head>
            <title>{pageTitle}</title>
        </Head>

        <h1>
          Why is this not working
        </h1>
        fdasjkhf

        <img className='logo-placeholder' src="/favicon.svg" alt='site-logo' />
      </div>
    </DefaultLayout>
  );
}

/* STATIC CONTENT */
const HomeContent = {
  pageTitle: 'lomou',
}

export function getStaticProps() {
  return {
    props: {
      content: HomeContent,
    }
  };
}

export default Home;