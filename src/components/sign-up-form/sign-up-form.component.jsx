// Packages imports
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Files imports
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

// Custom components
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import { Container } from "./sign-up-form.styles.js"

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const navigate = useNavigate()

  const submitHandler = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      // getting user object
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      window.location.pathname === "/auth" ? navigate("/") : navigate(window.location.pathname)
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else if (error.code === "auth/weak-password") {
        alert("Weak password! Please use at least 6 characters.");
      } else {
        alert("user creation encountered an error")
      }
    }
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <Container>
      <h2>Don't have an account?</h2>
      <span>Register with your email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label="Display Name"
          name="displayName"
          value={displayName}
          type="text"
          required
          onChange={changeHandler}
        />

        <FormInput
          label="Email"
          name="email"
          value={email}
          type="email"
          required
          onChange={changeHandler}
        />

        <FormInput
          label="Password"
          name="password"
          value={password}
          type="password"
          required
          onChange={changeHandler}
        />

        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          value={confirmPassword}
          type="password"
          required
          onChange={changeHandler}
        />

        <Button type="submit" style={{ width: "calc(50% - 2.5%)" }}>Register</Button>
      </form>
    </Container>
  );
};

export default SignUpForm;
