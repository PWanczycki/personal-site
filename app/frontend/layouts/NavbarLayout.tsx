import { Link } from "@inertiajs/react";
import { ReactNode } from "react";

interface NavbarLayoutProps {
  children?: ReactNode;
}

const NavbarLayout = ({ children }: NavbarLayoutProps) => {
  return (
    <main>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
      </nav>
      <article>{children}</article>
    </main>
  );
};

export default NavbarLayout;
