import { Head, Link, Form, usePage } from "@inertiajs/react";

interface SignInProps {
  emailAddress?: string;
}

const SignIn = ({ emailAddress }: SignInProps) => {
  const { flash } = usePage();

  return (
    <div>
      <Head title="Sign in" />

      {flash.notice && <div className={"flash"}>{flash.notice}</div>}
      {flash.alert && <div className={"flash alert"}>{flash.alert}</div>}

      <Form action="/session" method="post">
        {/*<label htmlFor="email_address">Email:</label>*/}
        <input type="email" name="email_address" required autoFocus autoComplete="username" placeholder="Enter your email address" defaultValue={emailAddress} />
        {/*<label htmlFor="password">Password:</label>*/}
        <input type="password" name="password" required autoComplete="current-password" placeholder="Enter your password" maxLength={72} />
        <button type="submit">Login</button>
      </Form>

      <Link href="/passwords/new">Forgot password?</Link>
    </div>
  );
};

export default SignIn;
