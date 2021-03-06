import React from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: column;
  padding: 32px 0px;
`;

const Content = styled.p`
  font-size: 24px;
  text-align: right;
  padding-left: 5%;
  padding-right: 10%;
  @media screen and (min-width: 700px) {
    font-size: 26px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 32px;
    width: 50%;
    padding-top: 40px;
  }
`;
const Stat = (props) => {
  const value = useSpring({
    from: {
      number: 0,
    },
    to: {
      number: props.number,
    },
    config: config.molasses,
  });

  return (
    <Wrapper>
      <animated.h1
        style={{
          fontSize: "56px",
          fontWeight: "bold",
          paddingRight: "10%",
        }}
      >
        {value.number.interpolate((x) => x.toFixed(0) + "%")}
      </animated.h1>
      <Content>{props.content}</Content>
    </Wrapper>
  );
};

export default Stat;
