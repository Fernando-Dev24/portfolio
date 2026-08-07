import { Navbar } from "../components/shared/navbar";
import { Hero } from "./ui/hero";
import { Projects } from "./ui/projects";

export default function Home() {
  return (
    <main className="space-y-20">
      <Navbar />
      <Hero />
      <Projects />
    </main>
  );
}
