[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/JtYgKARU)
## Правила и регламент

- [Правила, рекомендации и порядок проведения](https://github.com/hexlet-college-students/exam-rules)

## Требования и рекомендации

- Нельзя менять уже написанный код, тесты и другие файлы добавленные в проект
- Помимо стандартной библиотеки, вы можете использовать все что импортировано. Что не импортировано, то не используется.
- Выполняйте коммиты и пуши как можно чаще. Так вы будете видеть какие из тестов сработают, а какие нет.
- Во время работы не забывайте запускать саму утилиту и `npm test`

## Задание

Ваша задача написать и экспортировать компонент, который делает запрос на получение списка покупок и рендерит их в таблице по выбранному типу. Данные с покупками находятся по адресу **\_\_fixtures\_\_/shoplist.js**.

Тип выводится в компоненте select из списка
Таблица должна иметь tbody

Пример использования:

```html
<ShoppingList />
```

Результат:

```html
<div id="container" class="container m-3">
  <div class="shopList">
    <h3>Список покупок:</h3>
    <div class="controls">
      <select name="itemtype" id="itemtype">
        <option value="perfume">Парфюмерия</option>
        <option value="vegetables">Овощи</option>
        <option value="fruits">Фрукты</option>
        <option value="meat">Мясо</option>
        <option value="other" selected>Прочее</option>
      </select>
    </div>
    <table class="shopTable">
      <tbody>
        <tr>
          <td>Ёлка</td>
          <td>1500</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```

## Для запуска приложения

```bash
make run # запускается сервер и клиент
```

### 1 задача

В файле **src/ShoppingList.jsx** cоздайте и экспортируйте по умолчанию компонент \<ShoppingList/>, в котором есть блок div c классом shopList и таблица с классом shopTable, содержащая два столбца - наименование и цену : в \<tbody> будут строки с двумя ячейками. Добавьте в компонент переменную, содержащую следующие данные для списка выбора типа - select, значение по умолчанию должно быть последним из списка, т.е. "Прочее" :

```js
[
  {
    name: 'Парфюмерия',
    type: 'perfume',
  },
  {
    name: 'Овощи',
    type: 'vegetables',
  },
  {
    name: 'Фрукты',
    type: 'fruits',
  },
  {
    name: 'Мясо',
    type: 'meat',
  },
  {
    name: 'Прочее',
    type: 'other',
  },
];
```

Пример результата:

```html
<option value="vegetables">Овощи</option>
```

### 2 задача

В компоненте \<ShoppingList/> используйте хук `useEffect()` для запроса на сервер за данными. Вам необходимо сделать `get` запрос на сервер по адресу `/shoplist` и отрендерить список покупок в таблице, где для каждой покупки рендерится строка с соответствующими данными.

```html
<tbody>
  ...
  <tr>
    <td>4</td>
    <td>Мандарины</td>
    <td>200</td>
  </tr>
  ...
</tbody>
```

### 3 задача

В файле **src/FilterType.jsx** cоздайте и экспортируйте по умолчанию компонент \<FilterType/>, который отвечает за выбор покупок по типу. Перенесите в него список выбора типа покупки - select. Поместите данный компонент в компонент **\<ShoppingList/>** перед таблицей.При выборе типа должны выводиться только соответствующие покупки
(пример: при выборе в списке "Фрукты" выводятся только покупки с типом fruits)

### 4 задача

Сделайте так, чтобы покупки были отсортированы при выводе по наименованию в алфавитном порядке

# Список доступных сайтов

- [Javascript](https://developer.mozilla.org/ru/docs/Learn/JavaScript)
- [Web development](https://developer.mozilla.org/en-US/docs/Learn)
- [Node](https://nodejs.org/ru/docs)
- [Hexlet](https://hexlet.io)
- [NPM](https://docs.npmjs.com/)
- [lodash](https://lodash.com/docs)
- [Github](https://github.com/)
- [Github Classrom](https://classroom.github.com/)
- [Github Docs](https://docs.github.com/ru)
- [ESLint](https://eslint.org/docs/latest/)
- [React](https://react.dev/)
