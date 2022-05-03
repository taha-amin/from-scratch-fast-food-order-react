// Passes state as props correctly to OrderNameInput, OrderImages, InstructionsForm, InstructionsList
// Also tracks state for foodId, sideId, drinkId, instructions, and orderName

import './App.css';
import { useState } from 'react';

import DrinkDropdown from './DrinkDropdown';
import FoodDropdown from './FoodDropDown';
import SideDropdown from './SideDropdown';

import InstructionList from './InstructionsList';
import InstructionsForm from './InstructionsForm';

import OrderNameInput from './OrderNameInput';
import OrderImages from './OrderImages';

function App() {
  const [drinkId, setDrinkId] = useState(1);
  const [foodId, setFoodId] = useState(1);
  const [sideId, setSideId] = useState(1);

  const [orderName, setOrderName] = useState('taste so good make you wanna smack yo mama');

  const [instructions, setInstructions] = useState(['']);

  return (
    <div className="App">
      <OrderImages drinkId={drinkId} foodId={foodId} sideId={sideId} />
      <h1>Have you tried the {orderName}?</h1>

      <div className="bottom">
        <OrderNameInput setOrderName={setOrderName} />
        <section className="dropdowns">
          <foodId setFoodId={setFoodId} />
          <drinkId setDrinkId={setDrinkId} />
          <sideId setSideId={setSideId} />
        </section>

        <InstructionList instructions={instructions} />
      </div>
    </div>
  );
}

export default App;
