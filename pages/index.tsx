import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Slider from "../components/Slider/Slider";
import { SliderData } from "../components/Slider/SliderData";
import Instagram from "../components/InstagramGallery/Instagram";
import Portfolio from "../components/Portfolio/Portfolio";
import Contact from "../components/Contact/Contact";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>RaceStride</title>
        <meta
          name="description"
          content="Created as template for future work"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading="Tu carrera comienza aquí" message="¡Dale forma a tu futuro!" />
      <Slider slides={SliderData} />
      <Instagram />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Home;
