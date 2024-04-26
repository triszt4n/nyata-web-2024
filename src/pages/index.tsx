import { Application } from "@/components/Application";
import { Cards } from "@/components/Cards";
import ComingSoonLanding from "@/components/ComingSoonLanding";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { Programs } from "@/components/Programs";

export default function Home() {
  return <ComingSoonLanding />;

  /* return (
    <main className="d-flex min-h-screen flex-col">
      <Header />
      <div className="max-w-[1260px] mx-auto px-6 desktop:px-0">
        <Hero />
        <Programs />
        <Cards />
        <Location />
        <Application />
        <Contact />
      </div>
      <Footer />
    </main>
  ); */
}
