import styled from "@emotion/styled";

const HeadingBase = styled.span({
  color: "inherit",
  paddingBottom: "16px",
});

const Heading1 = styled(HeadingBase)({
  fontWeight: 600,
  fontSize: "54px",
});

const Heading2 = styled(HeadingBase)({
  fontWeight: 600,
  fontSize: "34px",
  letterSpacing: "0.25px",

  "@media (max-width: 767px)": {
    fontSize: "24px",
  },
});

const Heading3 = styled(HeadingBase)({
  fontWeight: 600,
  fontSize: "24px",
  lineHeight: "40px",
  letterSpacing: "0.25px",
});

export default function Heading({ level, children }) {
  let Component;
  if (level === 1) {
    Component = Heading1;
  } else if (level === 2) {
    Component = Heading2;
  } else if (level === 3) {
    Component = Heading3;
  } else {
    throw new Error(`Unrecognized Heading level: ${level}`);
  }

  return <Component as={`h${level}`}>{children}</Component>;
}
