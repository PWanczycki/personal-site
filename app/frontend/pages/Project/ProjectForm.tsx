import {Form, Link} from "@inertiajs/react";
import { Project } from "../../types/Project";

interface ProjectFormProps {
  project?: Project;
  cancelPath: string;
}

const ProjectForm = ({ project, cancelPath }: ProjectFormProps) => {
  const actionRoute = project ? `/projects/${project.id}` : "/projects";
  const method = project ? "put" : "post";
  const submitText = project ? "Update" : "Create";

  // TODO: render error messages (through inertia Form)

  return (
    <>
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
      <Link href={cancelPath} as={"button"}>Cancel</Link>
    </>
  );
};

export default ProjectForm;
