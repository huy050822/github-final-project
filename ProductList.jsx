import React from 'react';

function ProductList() {
  const products = [
    { id: 1, name: 'Fern', price: '$20' },
    { id: 2, name: 'Cactus', price: '$15' }
  ];

  return (
    <div className="product-list">
      <h2>Our Plants</h2>
      {products.map(product => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
