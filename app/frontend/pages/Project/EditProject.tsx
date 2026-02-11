import { Link } from "@inertiajs/react";
import { Project } from "../../types/Project";
import ProjectForm from "./ProjectForm";

interface EditProjectProps {
  project: Project;
}

const EditProject = ({ project }: EditProjectProps) => {
  return (
    <>
      <ProjectForm project={project} />
      <Link href={`/projects/${project.id}`}>Show this project</Link>
      <Link href={"/projects"}>Back to projects</Link>
    </>
  );
};

export default EditProject;
