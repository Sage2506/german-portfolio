import FeaturedProject from "@/components/FeaturedProject";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="pb-24">
      <Hero />
      <div className="mt-16">
        <FeaturedProject />
      </div>
      <div className="mt-16">
        <Experience />
      </div>
    </div>
  );
}
import Experience from "@/components/Experience";
