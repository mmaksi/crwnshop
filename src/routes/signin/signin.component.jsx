import React from "react";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

const Signin = () => {
  const logGoogleUser = async () => {
    const { userAuth } = await signInWithGooglePopup(); // gives the access token
    const userRefDoc = await createUserDocumentFromAuth(userAuth);
  };

  return (
    <div>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      <SignUpForm />
    </div>
  );
};

export default Signin;
