import {Head, Link} from "@inertiajs/react";
import { Project } from "../../types/Project";

interface ProjectIndexProps {
  projects: Project[];
}

const ProjectIndex = ({ projects }: ProjectIndexProps) => {
  // console.log(projects);

  function renderProjects() {
    return (
      <div>
        {projects.map(project => (
          // TODO: replace with project card
          <div>
            <Link key={project.id} href={"/projects/" + project.id}>{project.title}</Link>
            <br/>
          </div>
        ))}
        <Link href={"/projects/new"}>New project</Link>
        <br/>
        <Link href={"/"}>Home</Link>
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
