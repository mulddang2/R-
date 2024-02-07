import { useState } from 'react';

const initialProducts = [
  {
    id: 0,
    name: 'Baklava',
    count: 1,
  },
  {
    id: 1,
    name: 'Cheese',
    count: 5,
  },
  {
    id: 2,
    name: 'Spaghetti',
    count: 2,
  },
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  function handleDecreaseClick(productId) {
    // 1. map을 사용하여 새 배열을 만든다
    let nextProducts = products.map((product) => {
      if (product.id === productId) {
        return { ...product, count: product.count - 1 };
      } else {
        return product;
      }
    });

    // 2. filter로 count가 0 인 것들을 제거한다
    nextProducts = nextProducts.filter((p) => p.count > 0);
    setProducts(nextProducts);
  }
  function handleIncreaseClick(productId) {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            count: product.count + 1,
          };
        } else {
          return product;
        }
      })
    );
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncreaseClick(product.id);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              handleDecreaseClick(product.id);
            }}
          >
            -
          </button>
        </li>
      ))}
    </ul>
  );
}
