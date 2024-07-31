import Image from "next/image"; 
import Hero from "./hero/hero";
import Vidtier from "./vidtiers/vidtier";
import Nav from "./nav/nav";
import Services from "./services/services";
import Pricing from "./pricing/pricing";
import Wwwu from "./wwwu/wwwu";
import Faq from "./faq/faq";
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Custom Website</title>
        <meta name="description" content="This is my custom website built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <center>
        <Image
          width={1920}
          height={1080}
          quality={100}
          alt="LOGO"
          src={'/logoorg.png'}
          className='logo'
        />
      </center>
      <Hero />
      <Vidtier />
      <Services />
      <Wwwu />
      <Pricing />
      <Faq />
    </div>
  );
}
