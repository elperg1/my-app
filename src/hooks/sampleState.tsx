import React from 'react';

interface Props {
  message: string;
}

const Greeting: React.FC<Props> = ({ message }) => {
  return <h1>{message}</h1>;
};

export default Greeting;
