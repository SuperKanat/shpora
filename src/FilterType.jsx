

const FilterType = ({ filter, onFilterChange }) => {
    return (
        <div className="controls">
          <label htmlFor="itemtype">Выберите тип товара:</label>
          <select
            name="itemtype"
            id="itemtype"
            value={filter}  // Значение filter используется для выбранной опции
            onChange={onFilterChange}  // При изменении вызывается переданная функция
          >
            <option value="perfume">Парфюмерия</option>
        <option value="vegetables">Овощи</option>
        <option value="fruits">Фрукты</option>
        <option value="meat">Мясо</option>
        <option value="other" selected>Прочее</option>
          </select>
        </div>
      );
}

export default FilterType