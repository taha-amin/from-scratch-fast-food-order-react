// On change, call setOrderName with the new e.target.value to change app.js state

import React from 'react';

export default function OrderNameInput({ setOrderName }) {
  return (
    <section>
      What is your Order Name?
      <input onChange={(e) => setOrderName(e.target.value)} />
    </section>
  );
}
