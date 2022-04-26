import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Hero from '../components/Hero';
import '../styles/main.css';

const Home: NextPage = () => {
  return (
    <div className="App">
      <Head>
        <title>Julmer Olivero - Frontend React Developer</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Experience />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default Home;
