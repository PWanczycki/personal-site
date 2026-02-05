import { Link } from "@inertiajs/react";
import ProjectForm from "./ProjectForm";

const NewProject = () => {
  return (
    <div>
      <ProjectForm />
      <Link href={"/projects"}>Back to projects</Link>
    </div>
  );
};

export default NewProject;
