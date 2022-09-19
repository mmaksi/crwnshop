// Files imports
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

// Styled components
import { Container } from "./authentication.styles.js"

const Authentication = () => {
  return (
    <Container>
      <SignUpForm />
      <SignInForm />
    </Container>
  );
};

export default Authentication;
