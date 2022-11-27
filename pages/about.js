import Head from 'next/head';
import Hero from '../components/about/Hero';
import Statistics from '../components/about/Statistics';

const About = () => {
  return (
    <>
      <Head>
        <title>Buid It | About</title>
        <meta name='description' content='The official website of Build It a construcion company' />
        <link
          rel='icon'
          href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏦</text></svg>'
        />
      </Head>
      <Hero />
      <Statistics />
    </>
  );
};

export default About;
