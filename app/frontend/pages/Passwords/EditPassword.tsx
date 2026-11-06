import { Head, Form, usePage } from "@inertiajs/react";

interface EditPasswordProps {
  token: string;
}

const EditPassword = ({ emailAddress }: EditPasswordProps) => {
  const { flash } = usePage();

  return (
    <>
      <Head title="Update your password" />

      {flash.alert && <div className={"flash alert"}>{flash.alert}</div>}

      <h1>Update your password</h1>

      // TODO: add token param to form request, match field restrictions
      <Form action="/passwords" method="put">
        <label htmlFor="password">Email:</label>
        <input type="text" name="password" />
        <label htmlFor="password_confirmation">Email:</label>
        <input type="text" name="password_confirmation" />
        <button type="submit">Save</button>
      </Form>
    </>
  );
};

export default EditPassword;
