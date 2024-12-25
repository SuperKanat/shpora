import React, { useState } from "react";
import shopListData from "/__fixtures__/shoplist.js";
import FilterType from "./FilterType";

const ShoppingList = () => {
  const [filter, setFilter] = useState("other"); // Стейт для выбранного фильтра
  const { items } = shopListData; // Деструктурируем объект для доступа к массиву товаров

  // Фильтрация по типу товара
  const filteredList =
    filter === "All" ? items : items.filter((item) => item.type === filter);

  const sortedList = filteredList.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;  // Сортировка по возрастанию
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    return 0;  // Если наименования одинаковы
  });

  const handleFilterChange = (event) => {
    setFilter(event.target.value);  // Обновляем состояние при изменении фильтра
  };

  return (
    <div id="container" className="container m-3">
      <div className="shopList">
        <h3>Список покупок:</h3>
        <FilterType filter={filter} onFilterChange={handleFilterChange} />
        <table
          className="shopTable"
          border="1"
          cellPadding="10"
          style={{ marginTop: "20px", width: "100%" }}
        >
          <tbody>
            {filteredList.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.id}</td>
                <td>{item.type}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShoppingList;

/*
import React, { useState } from 'react';
import shopListData from '/__fixtures__/shoplist';  // Импортируем объект по умолчанию


const ShoppingList = () => {
  const [filter, setFilter] = useState('All'); // Стейт для выбранного фильтра
  const { items } = shopListData; // Деструктурируем объект для доступа к массиву товаров

  // Фильтрация по типу товара
  const filteredList = filter === 'All' ? items : items.filter(item => item.type === filter);

  // Обработчик изменения фильтра
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <h2>Shopping List</h2>

     
      <select value={filter} onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="fruits">Fruits</option>
        <option value="vegetables">Vegetables</option>
        <option value="meat">Meat</option>
        <option value="perfume">Perfume</option>
        <option value="other">Other</option>
      </select>

      
      <table border="1" cellPadding="10" style={{ marginTop: '20px', width: '100%' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingList;
*/
