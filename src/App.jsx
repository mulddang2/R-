/* eslint-disable react/prop-types */
import { useState } from 'react';
import { filterItems, foods } from './sharing-state-between-components/data';

export default function FilterableList() {
  const [query, setQuery] = useState('');
  const result = filterItems(foods, query);

  function handleChange(e) {
    setQuery(e.target.value);
  }
  return (
    <>
      <SearchBar query={query} onChange={handleChange} />
      <hr />
      <List items={result} />
    </>
  );
}

function SearchBar({ query, onChange }) {
  return (
    <label>
      Search: <input value={query} onChange={onChange} />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      {items.map((food) => (
        <tr key={food.id}>
          <td>{food.name}</td>
          <td>{food.description}</td>
        </tr>
      ))}
    </table>
  );
}
