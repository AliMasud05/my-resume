import { AboutSection } from "@/components/home/about-section";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { TechToolbox } from "@/components/home/tech-toolbox";
import { VideoSection } from "@/components/home/video-section";

const HomePage = () => {
  return (
    <div>
      <AboutSection/>
      <TechToolbox/>
      <FeaturedProjects/>
      <VideoSection/>


    </div>
  );
};

export default HomePage;
