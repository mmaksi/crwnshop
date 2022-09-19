// Styled components
import { BaseButton, GoogleSignInButton, InvertedButton, PaymentButton } from "./button.styles";

const getButton = (buttonType = "base") => {
  return {
    base: BaseButton,
    google: GoogleSignInButton,
    inverted: InvertedButton,
    payment: PaymentButton
  }[buttonType];
};

const Button = ({ children, buttonType, classes, isLoading, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  
  return (
    <CustomButton
      disabled={isLoading}
      className={`${classes}}`}
      {...otherProps}
    >
      {children}
    </CustomButton>
  );
};

export default Button;
