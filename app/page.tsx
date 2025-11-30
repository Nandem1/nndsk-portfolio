import { Hero } from "@/components/sections/hero";
import { Timeline } from "@/components/sections/timeline";
import { TechStackSection } from "@/components/sections/tech-stack";
import { Projects } from "@/components/sections/projects";
import { experiences, techStack, aiStack, projects } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Timeline experiences={experiences} />
      <TechStackSection title="Stack Tecnológico" stacks={techStack} />
      <TechStackSection title="Stack de IA" stacks={aiStack} />
      <Projects projects={projects} />
    </main>
  );
}
