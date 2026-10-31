import {Form, Link} from "@inertiajs/react";
import { Project } from "../../types/Project";

import styles from "./Project.module.css";

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
      <Form action={actionRoute} method={method} className={styles.form}>
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
        <span className={styles.center}>
          <button type="submit">{submitText}</button>
          <Link href={cancelPath} as={"button"}>Cancel</Link>
        </span>
      </Form>
    </>
  );
};

export default ProjectForm;
