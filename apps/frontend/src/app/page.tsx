import About from "@/components/About";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import GetInvolved from "@/components/GetInvolved";
import GreenEarthBanner from "@/components/GreenEarthBanner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Ticker from "@/components/Ticker";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Projects />
        <GreenEarthBanner />
        <GetInvolved />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
