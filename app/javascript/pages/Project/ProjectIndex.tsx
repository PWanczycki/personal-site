import { Head, Link, usePage } from "@inertiajs/react";
import { Project } from "../../types/Project";

interface ProjectIndexProps {
  projects: Project[];
}

const ProjectIndex = ({ projects }: ProjectIndexProps) => {
  const { flash } = usePage();

  function renderProjects() {
    return (
      <div>
        {projects.map((project) => (
          // TODO: replace with project card
          <div key={project.id}>
            // TODO: set up typed routes (js-routes gem)
            <Link href={"/projects/" + project.id}>{project.title}</Link>
            <br />
          </div>
        ))}
        <Link href={"/projects/new"}>New project</Link>
        <br />
        <Link href={"/"}>Home</Link>
      </div>
    );
  }

  return (
    <div>
      <Head title="Projects" />

      {flash.notice && <div>{flash.notice}</div>}

      <h1>Projects</h1>

      {renderProjects()}
    </div>
  );
};

export default ProjectIndex;
