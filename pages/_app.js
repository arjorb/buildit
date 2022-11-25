import Navbar from '../components/shared/Navbar';
import '../styles/main.css';
import Footer from '../components/shared/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
