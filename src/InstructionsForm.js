// On submit of the form, the slogan is injected into App.js state using a callback state handler passed down as a prop
// Also tracks state for the current instruction being typed. OnChange of the input, this state changes

import { useState } from 'react';

export default function InstructionsForm({ setInstructions, instructions }) {
  const [instructionInput, setInstructionInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    setInstructions([...instructions, instructionInput]);

    setInstructionInput('');
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        Add your instructions to the list!
        <input value={instructionInput} onChange={(e) => setInstructionInput(e.target.value)} />
        <button>Submit Instructions</button>
      </form>
    </section>
  );
}
