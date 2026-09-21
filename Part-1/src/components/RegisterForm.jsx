import { useForm } from "../hooks/formHooks";
import { useUser } from "../hooks/apiHooks";

const RegisterForm = () => {
  const { postUser } = useUser();

  const initValues = {
    username: "",
    email: "",
    password: "",
  };

  const doRegister = async () => {
    try {
      const result = await postUser(inputs);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(
    doRegister,
    initValues
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={inputs.username}
        onChange={handleInputChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={inputs.email}
        onChange={handleInputChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={inputs.password}
        onChange={handleInputChange}
      />

      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;