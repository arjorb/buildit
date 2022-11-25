import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
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
        <h1 className='text-3xl text-[#039297] font-bold underline'>
          Welcome to <a href='https://nextjs.org'>Build It!</a>
        </h1>
      </main>
    </div>
  );
}
