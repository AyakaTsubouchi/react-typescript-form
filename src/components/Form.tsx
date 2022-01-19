import { useState } from 'react';
import useFrom from './useForm';
type formFields = {
  title: string,
}
export default function Form(fealds: formFields) {
  const initialState = {
    email: "",
    password: ""
  }
  const [value, setValue] = useState(initialState);

  const loginCallback = () => {
    alert(`Email: ${value.email}, Password: ${value.password}`);
    setValue(initialState);
  }
  const { onSubmit } = useFrom(loginCallback)

  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>{fealds.title}</h1>
        <table>
          <tbody>
            <tr>
              <td>Email</td>
              <td>
                <input onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })} type="email" name="email" id="email" value={value.email} />
              </td>
            </tr>
            <tr>
              <td>Password</td>
              <td>
                <input onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })} type="password" name="password" id="password" value={value.password} />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit" className="button-submit">Submit</button>
      </form>
    </>
  );
}
