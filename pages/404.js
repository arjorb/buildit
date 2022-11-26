import Head from 'next/head';
import Navbar from '../components/shared/Navbar';
import Link from 'next/link';

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Buid It | Not Found</title>
        <meta name='description' content='The official website of Build It a construcion company' />
        <link
          rel='icon'
          href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏦</text></svg>'
        />
      </Head>

      <div className='h-100 bg-steelBlue-50'>
        <Navbar />
        <div className='max-w-container  mx-auto px-4 mt-16'>
          <h1 className='text-4xl font-bold text-steelBlue-200'>Not Found</h1>
          <p className='text-lg text-steelBlue-200 mt-10 font-semibold'>
            Page Does't Exist |
            <span className='ml-3 underline text-steelBlue-100'>
              <Link href='/'>Buildit</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
