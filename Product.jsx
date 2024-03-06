import React from 'react'

const Product=({name, price}) => {
  return (
    <div className='product'>
      <div className='product-ditails'>
        <h2>{name}</h2>
        <p>ש"ח{price}</p>
        <button>הוסף לסל</button>
        </div>
    </div>
  );
};

export default Product;
