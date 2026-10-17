import ProjectForm from "./ProjectForm";

const NewProject = () => {
  return (
    <div>
      <ProjectForm cancelPath={"/projects"} />
    </div>
  );
};

export default NewProject;
