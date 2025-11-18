import { Head } from "@inertiajs/react";
import { Project } from "../../types/Project";

interface ProjectIndexProps {
  projects: Project[];
}

function ProjectIndex({ projects }: ProjectIndexProps) {
  console.log(projects);

  function renderProjects() {
    return (
      <div>
        {projects.map(project => (
          // TODO: replace with project card
          <a key={project.id} href={"/projects/" + project.id}>{project.title}</a>
        ))}
      </div>
    );
  }

  return (
    <div>
      <Head title="Projects" />

      <h1>Projects</h1>

      {renderProjects()}
    </div>
  );
}

export default ProjectIndex;
