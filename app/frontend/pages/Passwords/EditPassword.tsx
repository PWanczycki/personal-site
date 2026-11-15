import { Head, Form, usePage } from "@inertiajs/react";

interface EditPasswordProps {
  token: string;
}

const EditPassword = ({ token }: EditPasswordProps) => {
  const { flash } = usePage();

  return (
    <>
      <Head title="Update your password" />

      {flash.alert && <div className={"flash alert"}>{flash.alert}</div>}

      <h1>Update your password</h1>

      <Form action={`/passwords/${token}`} method="put">
        {/*<label htmlFor="password">Email:</label>*/}
        <input type="password" name="password" required autoComplete="new-password" placeholder="Enter new password" maxLength={72} />
        {/*<label htmlFor="password_confirmation">Email:</label>*/}
        <input type="password" name="password_confirmation" required autoComplete="new-password" placeholder="Repeat new password" maxLength={72} />
        <button type="submit">Save</button>
      </Form>
    </>
  );
};

export default EditPassword;
