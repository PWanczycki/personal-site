import { Project } from "../../types/Project";
import ProjectForm from "./ProjectForm";

interface EditProjectProps {
  project: Project;
}

const EditProject = ({ project }: EditProjectProps) => {
  return (
    <>
      <ProjectForm project={project} cancelPath={"/projects"} />
    </>
  );
};

export default EditProject;
