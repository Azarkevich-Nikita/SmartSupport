import React, { useState, useEffect } from 'react';
import ProductCard from './QuestionCard';
import './styles/Chat.css'

function Chat() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/questions')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProducts(data.content);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);


  return (
    <>
      <div className="Questions">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="Chating">
        <p>Container 2</p>
      </div>
    </>
  )
}

export default Chat