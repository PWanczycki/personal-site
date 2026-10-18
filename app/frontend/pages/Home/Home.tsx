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
        <h1 className={styles.h1}>Philip Wanczycki</h1>
        {name && <p>Hello {name}!</p>}
        <p className={styles.p}>
          I am a software developer with a variety of interests, including
          artificial intelligence, cybersecurity, and web development.
        </p>
      </div>
    </div>
  );
};

export default Home;
