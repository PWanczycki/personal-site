import { Head, Form, usePage } from "@inertiajs/react";

const SignUp = () => {
  const { flash } = usePage();

  return (
    <div>
      <Head title="Sign up" />

      {flash.notice && <div className={"flash"}>{flash.notice}</div>}
      {flash.alert && <div className={"flash alert"}>{flash.alert}</div>}

      {/*TODO: match field restrictions*/}
      <Form action="/registration" method="post">
        <label htmlFor="email_address">Email:</label>
        <input type="email" name="email_address" />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" />
        <label htmlFor="password_confirmation">Confirm password:</label>
        <input type="password" name="password_confirmation" />
        <button type="submit">Sign up</button>
      </Form>
    </div>
  );
};

export default SignUp;
