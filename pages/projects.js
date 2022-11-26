import Head from 'next/head';
import Navbar from '../components/shared/Navbar';

const Projects = () => {
  return (
    <>
      <Head>
        <title>Buid It | Projects</title>
        <meta name='description' content='The official website of Build It a construcion company' />
        <link
          rel='icon'
          href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏦</text></svg>'
        />
      </Head>

      <div className='h-100 bg-steelBlue-50'>
        <Navbar />
        <div className='max-w-container  mx-auto px-4 mt-16'>
          <h1 className='text-4xl font-bold text-steelBlue-200'>Projects</h1>
        </div>
      </div>
    </>
  );
};

export default Projects;
