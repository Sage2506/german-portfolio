import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import FeaturedProject from "@/components/FeaturedProject";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Philosophy from "@/components/Philosophy";
import ProjectsGrid from "@/components/ProjectsGrid";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="mt-12">
        <Metrics />
      </div>
      <div className="mt-20">
        <Philosophy />
      </div>
      <div className="mt-20">
        <Skills />
      </div>
      <div className="mt-16">
        <FeaturedProject />
      </div>
      <div className="mt-24">
        <ProjectsGrid />
      </div>
      <div className="mt-16">
        <Experience />
      </div>
      <div className="mt-24">
        <Education />
      </div>
      <Contact />
    </div>
  );
}
