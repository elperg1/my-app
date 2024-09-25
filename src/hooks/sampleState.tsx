import React from 'react';

interface Props {
  message: string;
}

const Greeting: React.FC<Props> = ({ message }) => {

  console.log( "SAMPLE state -- expanded: users", message )
  
  return <h1>{message}</h1>;
};


 

export default Greeting;
