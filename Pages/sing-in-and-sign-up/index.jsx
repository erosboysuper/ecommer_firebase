import { useState, useEffect } from "react";
import FormInput from "../../Components/form-input";
import CustomButon from "../../Components/custom-button";
import "./styles.scss";
const SignInAndSignUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setUser({ ...user, [event.target.type]: event.target.value });
  };
  useEffect(() => {
    setUser({ email: "", password: "" });
  }, []);
  return (
    <div className="sigin-in">
      <h2>I already have account</h2>
      <span>Sign in with your email and password</span>
      <form className="sign-in" onsubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="Email"
          handle={handleChange}
          value={user.email}
          required
        />

        <FormInput
          name="password"
          type="password"
          label="Password"
          handle={handleChange}
          value={user.password}
          required
        />
        <CustomButon type="submit">Sign in</CustomButon>
      </form>
    </div>
  );
};

export default SignInAndSignUp;
