import { Head, Form, usePage } from "@inertiajs/react";

interface NewPasswordProps {
  emailAddress?: string;
}

const NewPassword = ({ emailAddress }: NewPasswordProps) => {
  const { flash } = usePage();

  return (
    <>
      <Head title="Reset password" />

      {flash.alert && <div className={"flash alert"}>{flash.alert}</div>}

      <h1>Forgot your password?</h1>

      {/*TODO: match form field restrictions*/}
      <Form action="/passwords" method="post">
        <label htmlFor="email_address">Email:</label>
        <input type="email" name="email_address" defaultValue={emailAddress} />
        <button type="submit">Email reset instructions</button>
      </Form>
    </>
  );
};

export default NewPassword;
