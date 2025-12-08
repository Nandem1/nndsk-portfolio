import { Header } from "@/components/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Timeline } from "@/components/sections/timeline";
import { TechStackSection } from "@/components/sections/tech-stack";
import { Projects } from "@/components/sections/projects";
import { SectionDivider } from "@/components/section-divider";
import { experiences, techStack, aiStack, projects } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Timeline experiences={experiences} />
      <SectionDivider />
      <TechStackSection title="Stack Tecnológico" stacks={techStack} />
      <SectionDivider />
      <TechStackSection title="Stack de IA" stacks={aiStack} />
      <SectionDivider />
      <Projects projects={projects} />
    </main>
  );
}
