import React from 'react';
type formFields = {
  title: string,
  email?: boolean,
  name?: boolean,
  password?: boolean
}
export default function Form(fealds: formFields) {

  return (
    <>
      <form action="submit.php">
        <h1>{fealds.title}</h1>
        <table>
          {fealds.email ? (
            <tr>
              <td>Email</td>
              <td>
                <input type="email" />
              </td>
            </tr>
          ) : null}
          {fealds.name ? (
            <tr>
              <td>Name</td>
              <td>
                <input type="text" />
              </td>
            </tr>) : null}
          {fealds.password ? (
            <tr>
              <td>Password</td>
              <td>
                <input type="password" />
              </td>
            </tr>
          ) : null}
        </table>
        <button className="button-submit">Submit</button>

      </form>
    </>
  );
}
