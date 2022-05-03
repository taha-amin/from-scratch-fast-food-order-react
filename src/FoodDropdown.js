import React from 'react';

export default function FoodDropdown({ setFoodId }) {
  return (
    <div>
      Select a Food Item
      <select onChange={(e) => setFoodId(e.target.value)}>
        <option value="1">Pizza</option>
        <option value="2">Burger</option>
        <option value="3">Gyro</option>
      </select>
    </div>
  );
}
