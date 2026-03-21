import Navigation from "@/components/Navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Achievements from "@/components/achievements";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main>  
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
    </main>
  );
}
