import React from 'react';

export default function SideDropdown({ setSide }) {
  return (
    <div>
      Select a Side Item
      <select onChange={(e) => setSide(e.target.value)}>
        <option value="1">Fries</option>
        <option value="2">Onion Rings</option>
        <option value="3">Strawberry Sundae</option>
      </select>
    </div>
  );
}
