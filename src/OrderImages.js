//use 3 props to render the correct images that live in the public directory

import React from 'react';

export default function OrderImages({ foodId, sideId, drinkId }) {
  return (
    <div className="order-images">
      <img src={`food-${foodId}.png`} />
      <img src={`side-${sideId}.png`} />
      <img src={`drink-${drinkId}.png`} />
    </div>
  );
}
