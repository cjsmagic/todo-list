import PropTypes from "prop-types";
import React from "react";

const props = {
  item: PropTypes.object.isRequired,
  tempText: PropTypes.object.isRequired,
  setTempText: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

const TodoItem = ({
  item,
  tempText,
  setTempText,
  items,
  updateTodo,
  deleteTodo,
}) => (
  <div className="todo-list__item" key={item.id}>
    {!item.showEdit && <div className="todo-list__item__name">{item.name}</div>}
    {item.showEdit && (
      <input
        className="todo-list__item__edit-input"
        type="text"
        placeholder="Enter todo"
        value={tempText}
        onChange={(e) => setTempText(e.target.value)}
        data-testid="test-id-todo-edit"
      />
    )}

    {item.showEdit && (
      <button
        className="todo-list__item__edit todo-list__item__button"
        onClick={() => {
          const itemsClone = [...items];
          const mappedTodo = itemsClone.find((_item) => _item.id === item.id);
          mappedTodo.name = tempText;
          mappedTodo.showEdit = false;
          setTempText("");
          updateTodo(mappedTodo);
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
          setTempText("");
          updateTodo(mappedTodo);
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
          setTempText(mappedTodo.name);
          updateTodo(mappedTodo);
        }}
      >
        Edit
      </button>
    )}

    {!item.showEdit && (
      <button
        className="todo-list__item__delete todo-list__item__button"
        onClick={() => {
          deleteTodo(item);
        }}
      >
        Delete
      </button>
    )}
  </div>
);

TodoItem.props = props;

export default TodoItem;
