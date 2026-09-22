import { useNavigate } from "react-router";
import { useForm } from "../hooks/formHooks";
import { useAuthentication } from "../hooks/apiHooks";

const LoginForm = () => {

  const initValues = {
   username: '',
   password: '',
};

const doLogin = () => {
  console.log(inputs);
  // TODO: add login functionalities here
};

const {inputs, handleInputChange, handleSubmit} = useForm(doLogin, initValues);

console.log(inputs);


     return (
         <>
             <h1>Login</h1>
             <form onSubmit={ () => {} }>
                  <div>
                      <label htmlFor="loginess">Username</label>
                     <input
                         name="username"
                         type="text"
                         id="loginess"
                         onChange={ () => {} }
                         autoComplete="username"
                     />
                 </div>
                 <div>
                     <label htmlFor="loginpassword">Password</label>
                      <input
                         name="password"
                         type="password"
                         id="loginpassword"
                         onChange={ () => {} }
                         autoComplete="current-password"
                     />
                 </div>
                 <button type="submit">Login</button>
             </form>
         </>
     );
};

export default LoginForm;