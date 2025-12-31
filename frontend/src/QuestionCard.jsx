import React from 'react';
import './styles/Card.css'

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <p className="message">{product.message}</p>
    </div>
  );
}

export default ProductCard;
