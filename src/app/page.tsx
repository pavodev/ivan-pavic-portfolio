import Image from "next/image";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center gap-16">
      <main className="flex flex-col gap-[32px] items-center sm:items-start">
        <Hero />
        <Experience />
        <Education />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
