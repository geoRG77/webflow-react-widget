import Button from "./components/Button";
import Heading from "./components/Heading";
import styled from "@emotion/styled";

import { ReactComponent as HandIcon } from "./assets/hand.svg";

const HelloContainer = styled.div({
  display: "flex",
  alignItems: "baseline",
});

const Hand = styled(HandIcon)({
  height: "48px",
  marginRight: "10px",
});

const Widget = () => {
  const handleClick = () => {
    alert("Hello there");
  };

  return (
    <>
      <HelloContainer>
        <Hand />
        <Heading level={1}>Hello, world!</Heading>
      </HelloContainer>
      <Button onClick={handleClick} variant="primary">
        Click me!
      </Button>
    </>
  );
};

export default Widget;
