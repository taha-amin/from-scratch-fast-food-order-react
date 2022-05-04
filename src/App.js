// Passes state as props correctly to OrderNameInput, OrderImages, InstructionsForm, InstructionsList
// Also tracks state for foodId, sideId, drinkId, instructions, and orderName

import './App.css';
import { useState } from 'react';

import DrinkDropdown from './DrinkDropdown.js';
import FoodDropdown from './FoodDropdown.js';
import SideDropdown from './SideDropdown.js';

import InstructionList from './InstructionsList.js';
import InstructionsForm from './InstructionsForm.js';

import OrderNameInput from './OrderNameInput.js';
import OrderImages from './OrderImages.js';

function App() {
  const [drinkId, setDrinkId] = useState(1);
  const [foodId, setFoodId] = useState(1);
  const [sideId, setSideId] = useState(1);

  const [orderName, setOrderName] = useState('');

  const [instructions, setInstructions] = useState(['']);

  return (
    <div className="App">
      <OrderImages drinkId={drinkId} foodId={foodId} sideId={sideId} />
      <h1>Have you tried the {orderName}?</h1>

      <div className="bottom">
        <OrderNameInput setOrderName={setOrderName} />
        <section className="dropdowns">
          <FoodDropdown setFoodId={setFoodId} />
          <SideDropdown setSideId={setSideId} />
          <DrinkDropdown setDrinkId={setDrinkId} />
        </section>

        <InstructionsForm setInstructions={setInstructions} instructions={instructions} />

        <InstructionList instructions={instructions} />
      </div>
    </div>
  );
}

export default App;
