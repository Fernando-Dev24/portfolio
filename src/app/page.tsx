import { Navbar } from "../components/shared/navbar";
import { Hero } from "./ui/hero";
import { Projects } from "./ui/projects";
import Skills from "./ui/skills";

export default function Home() {
  return (
    <main className="space-y-48">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
    </main>
  );
}
