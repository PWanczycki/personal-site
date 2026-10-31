import { Project } from "../../types/Project.ts";
import { Head, Link, usePage } from "@inertiajs/react";

import styles from "./Project.module.css"

interface ProjectDetailsProps {
  project: Project;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  const { flash } = usePage();

  return (
    <div>
      <Head title={project.title} />

      {flash.notice && <div className={"flash"}>{flash.notice}</div>}

      <h2 className={styles.h2}>{project.title}</h2>
      <p className={styles.p}>{project.description}</p>

      <span className={styles.center}>
        <Link href={`/projects/${project.id}/edit`} as={"button"}>Edit</Link>
        <Link href={`/projects/${project.id}`} method={"delete"} as={"button"}>
          Destroy
        </Link>
      </span>
    </div>
  );
};

export default ProjectDetails;
