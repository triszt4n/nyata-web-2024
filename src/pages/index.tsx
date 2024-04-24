import { Application } from "@/components/Application";
import { Cards } from "@/components/Cards";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { Programs } from "@/components/Programs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="max-w-[1260px]">
        <Hero />
        <Programs />
        <Cards />
        <Location />
        <Application />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
