import { Head } from "@inertiajs/react";

import "./Home.css"

interface HomeProps {
  name?: string;
}

const Home = ({ name }: HomeProps) => {
  return (
    <div>
      <Head title="Philip Wanczycki - Software Developer" />

      <div className={"center"}>
        <h1>Philip Wanczycki</h1>
        {name && <p>Hello {name}!</p>}
        <p>
          I am a software developer with a variety of interests, including
          artificial intelligence, cybersecurity, and web development.
        </p>
      </div>
    </div>
  );
};

export default Home;
