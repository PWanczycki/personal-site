import { Head, Link, usePage } from "@inertiajs/react";
import { Project } from "../../types/Project";

import styles from "./Project.module.css";

interface ProjectIndexProps {
  projects: Project[];
}

const ProjectIndex = ({ projects }: ProjectIndexProps) => {
  const { flash } = usePage();

  function renderProjects() {
    return (
      <div className={styles.projects}>
        <Link href={"/projects/new"} as={"button"}>New project</Link>
        {projects.map((project) => (
          // TODO: replace with project card
          <div key={project.id}>
            {/* TODO: set up typed routes (js-routes gem)*/}
            <Link href={"/projects/" + project.id}>{project.title}</Link>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <Head title="Projects" />

      {flash.notice && <div className={"flash"}>{flash.notice}</div>}

      <h1 className={styles.h1}>Projects</h1>

      {renderProjects()}
    </div>
  );
};

export default ProjectIndex;
