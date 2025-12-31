// src/App.js
import React, { useState, useEffect } from 'react';
import ProductCard from './QuestionCard';
// Предположим, у вас есть компонент для загрузки, чтобы показать его во время ожидания
//import LoadingSpinner from './components/LoadingSpinner'; // Создайте его

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/questions')
      .then(res => res.json())
      .then(data => {
        setProducts(data.content); // ВАЖНО
        setLoading(false);
      })
      .then(data => {
        console.log(data);
      })

      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);


  return (
    <div className="products-container">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default App;
