import Head from 'next/head';
import Image from 'next/image';
import Showcase from '../components/home/Showcase';
import Execution from '../components/home/Execution';
import About from '../components/home/About';

const Home = () => {
  return (
    <div className=''>
      <Head>
        <title>Buid It</title>
        <meta name='description' content='The official website of Build It a construcion company' />
        <link
          rel='icon'
          href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏦</text></svg>'
        />
      </Head>

      <main className=''>
        <Showcase />
        <Execution />
        <About />
      </main>
    </div>
  );
};

export default Home;
