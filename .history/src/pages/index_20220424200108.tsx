import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Hero from '../components/Hero';
import Works from '../components/Works';

const Home: NextPage = () => {
  return (
    <div className="App">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <title>Julmer Olivero - Frontend React Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Experience />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
