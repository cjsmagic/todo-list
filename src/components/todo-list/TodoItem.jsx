import PropTypes from "prop-types";
import React from "react";

const props = {
  item: PropTypes.object.isRequired,
  updateTodo: PropTypes.func.isRequired,
  setUpdateTodo: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  setItems: PropTypes.func.isRequired,
};
// testing unwanted code
const TodoItem = ({ item, updateTodo, setUpdateTodo, items, setItems }) => (
  <div className="todo-list__item" key={item.id}>
    {!item.showEdit && <div className="todo-list__item__name">{item.name}</div>}
    {item.showEdit && (
      <input
        className="todo-list__item__edit-input"
        type="text"
        placeholder="Enter todo"
        value={updateTodo}
        onChange={(e) => setUpdateTodo(e.target.value)}
        data-testid="test-id-todo-edit"
      />
    )}

    {item.showEdit && (
      <button
        className="todo-list__item__edit todo-list__item__button"
        onClick={() => {
          const itemsClone = [...items];
          const mappedTodo = itemsClone.find((_item) => _item.id === item.id);
          mappedTodo.name = updateTodo;
          mappedTodo.showEdit = false;
          setUpdateTodo("");
          setItems(itemsClone);
        }}
      >
        Update
      </button>
    )}

    {item.showEdit && (
      <button
        className="todo-list__item__edit todo-list__item__button"
        onClick={() => {
          const itemsClone = [...items];
          const mappedTodo = itemsClone.find((_item) => _item.id === item.id);
          mappedTodo.showEdit = false;
          setUpdateTodo("");
          setItems(itemsClone);
        }}
      >
        Cancel
      </button>
    )}

    {!item.showEdit && (
      <button
        className="todo-list__item__edit todo-list__item__button"
        onClick={() => {
          const itemsClone = [...items];
          const mappedTodo = itemsClone.find((_item) => _item.id === item.id);
          mappedTodo.showEdit = true;
          setUpdateTodo(item.name);
          setItems(itemsClone);
        }}
      >
        Edit
      </button>
    )}

    {!item.showEdit && (
      <button
        className="todo-list__item__delete todo-list__item__button"
        onClick={() => {
          setItems([...items.filter((_item) => _item.id !== item.id)]);
        }}
      >
        Delete
      </button>
    )}
  </div>
);

TodoItem.props = props;

export default TodoItem;
