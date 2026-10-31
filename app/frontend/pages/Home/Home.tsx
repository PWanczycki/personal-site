import { Head } from "@inertiajs/react";

import styles from "./Home.module.css"

interface HomeProps {
  name?: string;
}

const Home = ({ name }: HomeProps) => {
  return (
    <div>
      <Head title="Philip Wanczycki - Software Developer" />

      <div className={styles.center}>
        {name && <p>Hello {name}!</p>}
        <p className={styles.p}>
	  Hello! I'm a software developer working at Fullscript, mainly doing backend product work in Rails. I also love music and camping. 
        </p>
	<p className={styles.p}>
	  This site is still in progress so this home page is bare, but feel free to check out my projects and blog.
        </p>
      </div>
    </div>
  );
};

export default Home;
