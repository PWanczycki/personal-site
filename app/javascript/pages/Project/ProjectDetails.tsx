import { Project } from "../../types/Project.ts";
import { Head, Link, usePage } from "@inertiajs/react";

interface ProjectDetailsProps {
  project: Project;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  const { flash } = usePage();

  return (
    <div>
      <Head title={project.title} />

      {flash.notice && <div>{flash.notice}</div>}

      <h2>{project.title}</h2>
      <p>{project.description}</p>

      <Link href={`/projects/${project.id}/edit`}>Edit</Link>
      <br />
      <Link href={"/projects"}>Back</Link>
      <br />
      <Link href={`/projects/${project.id}`} method="delete" as="button">
        Destroy
      </Link>
    </div>
  );
};

export default ProjectDetails;
