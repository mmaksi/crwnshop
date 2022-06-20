import "./button.styles.scss";

export const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({
  children,
  buttonType,
  classes,
  isLoading,
  ...otherProps
}) => {
  return (
    <button
      disabled={isLoading}
      className={`button-container ${classes} ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      { children}
    </button>
  );
};

export default Button;
