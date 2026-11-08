import { Link } from "@inertiajs/react";
import { ReactNode } from "react";
import { useAuth } from "@/hooks/useAuth";

import "./NavbarLayout.css";

interface NavbarLayoutProps {
  children?: ReactNode;
}

const NavbarLayout = ({ children }: NavbarLayoutProps) => {
  const { user } = useAuth();

  return (
    <main>
      <nav>
        <h1>Philip Wanczycki</h1>
        <div>
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          {/*<Link href="/blog">Blog</Link>*/}
          {user ? (
            <Link href="/session" method="delete" as="button">Sign out</Link>
          ) : (
            <>
              <Link href="/session/new" as="button">Log in</Link>
              <Link href="/registration/new" as="button">Sign up</Link>
            </>
          )}
        </div>
      </nav>
      <article>{children}</article>
    </main>
  );
};

export default NavbarLayout;
