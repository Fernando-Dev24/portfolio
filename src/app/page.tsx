import { Navbar } from "../components/shared/navbar";
import { Hero } from "./ui/hero";
import { Projects } from "./ui/projects";
import Skills from "./ui/skills";
import Experience from "./ui/experience";
import Contact from "./ui/contact";
import { Footer } from "@/components/shared/footer";

export default function Home() {
  return (
    <main className="space-y-48">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
