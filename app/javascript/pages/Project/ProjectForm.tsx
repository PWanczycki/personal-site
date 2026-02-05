import { Form } from "@inertiajs/react";
import { Project } from "../../types/Project";

interface ProjectFormProps {
  project?: Project;
}

const ProjectForm = ({ project }: ProjectFormProps) => {
  const actionRoute = project ? `/projects/${project.id}` : "/projects";
  const method = project ? "put" : "post";
  const submitText = project ? "Update" : "Create";

  // TODO: render error messages (through inertia Form)

  return (
    <Form action={actionRoute} method={method}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        defaultValue={project?.title}
      />
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        defaultValue={project?.description}
      />
      <button type="submit">{submitText}</button>
    </Form>
  );
};

export default ProjectForm;
