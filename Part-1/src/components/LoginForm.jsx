import { useNavigate } from "react-router";
import { useForm } from "../hooks/formHooks";
import { useAuthentication } from "../hooks/apiHooks";

const LoginForm = () => {
  const navigate = useNavigate();
  const { postLogin } = useAuthentication();

  const initValues = {
    username: "",
    password: "",
  };

  const doLogin = async () => {
    try {
      const result = await postLogin(inputs);

      localStorage.setItem("token", result.token);

      console.log(result);

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(
    doLogin,
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
        type="password"
        name="password"
        placeholder="Password"
        value={inputs.password}
        onChange={handleInputChange}
      />

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;