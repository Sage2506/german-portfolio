import dynamic from 'next/dynamic';

const Contact = dynamic(() => import('@/components/Contact'));
const Education = dynamic(() => import('@/components/Education'));
const Experience = dynamic(() => import('@/components/Experience'));
const FeaturedProject = dynamic(() => import('@/components/FeaturedProject'));
const Hero = dynamic(() => import('@/components/Hero'));
const Metrics = dynamic(() => import('@/components/Metrics'));
const Philosophy = dynamic(() => import('@/components/Philosophy'));
const ProjectsGrid = dynamic(() => import('@/components/ProjectsGrid'));
const Skills = dynamic(() => import('@/components/Skills'));
export default function Home() {
  return (
    <div>
      <Hero id="hero" />
      <div className="mt-12" id="metrics">
        <Metrics />
      </div>
      <div className="mt-20" id="philosophy">
        <Philosophy />
      </div>
      <div className="mt-20" id="skills">
        <Skills />
      </div>
      <div className="mt-16" id="featured-project">
        <FeaturedProject />
      </div>
      <div className="mt-24" id="projects-grid">
        <ProjectsGrid />
      </div>
      <div className="mt-16" id="experience">
        <Experience />
      </div>
      <div className="mt-24" id="education">
        <Education />
      </div>
      <Contact id="contact" />
    </div>
  );
}

