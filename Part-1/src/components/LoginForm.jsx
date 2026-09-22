import { useForm } from "../hooks/formHooks";
import { useUserContext } from "../hooks/contextHooks";

const LoginForm = () => {
  const { handleLogin } = useUserContext();

  const initValues = {
    username: "",
    password: "",
  };

  const doLogin = async () => {
    try {
      await handleLogin(inputs);
    } catch (e) {
      alert(e.message);
    }
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(
    doLogin,
    initValues
  );

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={inputs.username}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={inputs.password}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;