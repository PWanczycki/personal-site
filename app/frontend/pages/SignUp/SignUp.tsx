import { Head, Form, usePage } from "@inertiajs/react";

const SignUp = () => {
  const { flash } = usePage();

  return (
    <div>
      <Head title="Sign up" />

      {flash.notice && <div className={"flash"}>{flash.notice}</div>}
      {flash.alert && <div className={"flash alert"}>{flash.alert}</div>}

      {/* TODO: show form errors on form fields instead of flash */}
      <Form action="/registration" method="post">
        {/*<label htmlFor="email_address">Email:</label>*/}
        <input type="email" name="email_address" required autoFocus autoComplete="username" placeholder="Enter your email address"/>
        {/*<label htmlFor="password">Password:</label>*/}
        <input type="password" name="password" required autoComplete="new-password" placeholder="Enter new password" maxLength={72} />
        {/*<label htmlFor="password_confirmation">Confirm password:</label>*/}
        <input type="password" name="password_confirmation" required autoComplete="new-password" placeholder="Repeat new password" maxLength={72} />
        <button type="submit">Sign up</button>
      </Form>
    </div>
  );
};

export default SignUp;
