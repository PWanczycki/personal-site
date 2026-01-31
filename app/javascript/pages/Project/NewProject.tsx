import {Form, Link} from "@inertiajs/react";

const NewProject = () => {
  return (
    <div>
      <Form action="/projects" method="post">
        <label for="title">Title</label>
        <input type="text" id="title" name="title" />
        <label for="description">Description</label>
        <textarea id="description" name="description" />
        <button type="submit">Create</button>
      </Form>
      <Link href={"/projects"}>Back to projects</Link>
    </div>
  );
}

export default NewProject;