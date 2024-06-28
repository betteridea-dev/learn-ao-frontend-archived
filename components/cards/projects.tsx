import Image from "next/image";
import React from "react";
import { projects, Project } from "@/data/dummyData";

const ProjectCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-4 items-center">
      {projects.map((project: Project) => (
        <div className="bg-[#E9FF91] h-[140px] lg:h-[220px] p-[30px] rounded-lg flex flex-col gap-3 relative">
          <div className="text-zinc-950 text-md lg:text-xl font-bold font-plus-jakarta-sans leading-normal">
            {project.name}
          </div>
          <div className="text-zinc-950 text-xs lg:text-base font-normal font-plus-jakarta-sans leading-tight">
            {project.description}
          </div>
          <div className="absolute bottom-0 right-0 w-20 lg:w-[140px]">
            <Image src={project.image} alt={project.name} width={project.width} height={project.height} />
          </div>
        </div>
      ))}
    </div>
  );
};

const Projects = () => {
  return (
    <div>
      <div className="text-zinc-500 text-sm font-normal flex flex-col gap-y-4 font-plus-jakarta-sans leading-[14px]">
        Projects
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
