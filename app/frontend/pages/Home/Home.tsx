import { Head, Link } from "@inertiajs/react";

interface HomeProps {
  name?: string;
}

const Home = ({ name }: HomeProps) => {
  return (
    <div>
      <Head title="Philip Wanczycki - Software Developer" />

      <div>
        <h1>Philip Wanczycki</h1>
        {name && <p>Hello {name}!</p>}
        <p>
          I am a software developer with a variety of interests, including
          artificial intelligence, cybersecurity, and web development.
          <br />
          <br />
          Feel free to browse my projects below!
        </p>
        <Link href="/projects">Projects</Link>
      </div>
    </div>
  );
};

export default Home;
