import React from 'react';

export default function DrinkDropdown({ setDrinkId }) {
  return (
    <div>
      Select A Drink Item
      <select onChange={(e) => setDrinkId(e.target.value)}>
        <option value="1">Iced Tea</option>
        <option value="2">Soda</option>
        <option value="3">Sparkling Water</option>
      </select>
    </div>
  );
}
