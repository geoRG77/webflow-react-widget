import { css } from "@emotion/react";
import styled from "@emotion/styled";

const ButtonBase = styled.button(
  {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    padding: "16px",
    marginBottom: "16px",
    minHeight: "40px",
    color: "#fff",
    border: "1px solid transparent",
    borderRadius: "4px",
    boxShadow:
      "0 2px 2px 0 rgba(0, 0, 0, 0.12), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.11)",
    fontSize: "15px",
    fontWeight: 600,
    textDecoration: "none",
    textAlign: "center",
    transition: "background-color .15s ease-in-out, color .2s ease-in-out",
    cursor: "pointer",
  },
  (props) => props.pending && pendingStyle
);

const pendingStyle = css({
  backgroundColor: "#808080 !important",
});

const ButtonPrimary = styled(ButtonBase)({
  backgroundColor: "#0073FF",

  ":hover": {
    backgroundColor: "#094fac",
  },
});

const ButtonSecondary = styled(ButtonBase)({
  backgroundColor: "transparent",
  borderColor: "white",

  ":hover": {
    backgroundColor: "#0073FF",
  },
});

const Button = ({ variant, children, pending, ...props }) => {
  let Component;
  if (variant === "primary") {
    Component = ButtonPrimary;
  } else if (variant === "secondary") {
    Component = ButtonSecondary;
  } else {
    throw new Error(`Unrecognized Button variant: ${variant}`);
  }

  return (
    <Component pending={pending} disabled={pending} {...props}>
      {children}
    </Component>
  );
};

export default Button;
