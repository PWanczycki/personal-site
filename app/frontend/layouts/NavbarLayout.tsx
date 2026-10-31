import { Link } from "@inertiajs/react";
import { ReactNode } from "react";

import "./NavbarLayout.css";

interface NavbarLayoutProps {
  children?: ReactNode;
}

const NavbarLayout = ({ children }: NavbarLayoutProps) => {
  return (
    <main>
      <nav>
        <h1>Philip Wanczycki</h1>
	<div>
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          {/*<Link href="/blog">Blog</Link>*/}
	</div>
      </nav>
      <article>{children}</article>
    </main>
  );
};

export default NavbarLayout;
