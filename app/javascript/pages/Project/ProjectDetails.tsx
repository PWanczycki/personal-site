import { Project } from "../../types/Project.ts";
import { Head, Link } from "@inertiajs/react";

interface ProjectDetailsProps {
  project: Project;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <div>
      <Head title={project.title} />

      <h2>{project.title}</h2>
      <p>{project.description}</p>

      <Link href={`/projects/${project.id}/edit`}>Edit</Link>
      <br />
      <Link href={"/projects"}>Back</Link>
    </div>
  );
};

export default ProjectDetails;
