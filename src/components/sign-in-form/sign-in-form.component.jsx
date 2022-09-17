import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    // saving the user in the Firestore happens in the userReducer
    await signInWithGooglePopup();
    console.log(window.location.pathname);
    window.location.pathname === "/auth" ? navigate("/") : navigate(window.location.pathname)
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      // getting user object
      await signInAuthUserWithEmailAndPassword(email, password);
      window.location.pathname === "/auth" ? navigate("/") : navigate(window.location.pathname)
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password or email");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;
        default:
          alert("user sign in failed");
          break;
      }
    }
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={submitHandler}>
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
        <div className="buttons-container">
          <Button type="submit" onClick={signInAuthUserWithEmailAndPassword} style={{ width: "50%" }}>
            Sign In
          </Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle} style={{ width: "50%" }} >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
