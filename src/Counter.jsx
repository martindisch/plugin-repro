import { useState } from "react";
import styled from 'styled-components'

const Heading = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Button = styled.button`
  padding: 4em;
  background: papayawhip;
`;

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Heading>{count}</Heading>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
    </>
  );
};
