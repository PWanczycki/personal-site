import { Form } from "@inertiajs/react";

const ProjectForm = () => {
  // TODO: render error messages (through inertia Form)

  return (
    <Form action="/projects" method="post">
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="title" />
      <label htmlFor="description">Description</label>
      <textarea id="description" name="description" />
      <button type="submit">Create</button>
    </Form>
  );
};

export default ProjectForm;
