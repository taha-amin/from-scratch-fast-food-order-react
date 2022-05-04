// maps through instructions prop and renders an Instruction for each item in array

import React from 'react';
import Instruction from './Instruction';

export default function InstructionList({ instructions }) {
  return (
    <section>
      <h2>Your Instructions:</h2>
      {instructions.map((instruction) => (
        <Instruction key={instructions} instruction={instruction} />
      ))}
    </section>
  );
}
