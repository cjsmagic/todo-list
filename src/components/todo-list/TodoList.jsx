import { useState } from "react";

function TodoList() {
  const [todo, setTodo] = useState("");
  const [items, setItems] = useState([]);
  const [updateTodo, setUpdateTodo] = useState("");

  return (
    <div className="todo-list">
      <h1>Todo List</h1>

      <div className="todo-list__input-controls">
        <input
          type="text"
          placeholder="Enter todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          data-testid="test-id-todo-input"
        />
        <button
          type="button"
          onClick={() => {
            setItems([{ name: todo, id: new Date().getTime() }, ...items]);
            setTodo("");
          }}
        >
          Add
        </button>
      </div>

      <div className="todo-list__items">
        {items.length === 0 && (
          <div className="todo-list__item todo-list__item--no-items">
            <div className="todo-list__item__name"> No Items Found</div>
          </div>
        )}

        {items.map((item) => (
          <div className="todo-list__item" key={item.id}>
            {!item.showEdit && (
              <div className="todo-list__item__name">{item.name}</div>
            )}
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
                  const mappedTodo = itemsClone.find(
                    (_item) => _item.id === item.id
                  );
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
                  const mappedTodo = itemsClone.find(
                    (_item) => _item.id === item.id
                  );
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
                  const mappedTodo = itemsClone.find(
                    (_item) => _item.id === item.id
                  );
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
        ))}
      </div>
    </div>
  );
}

export default TodoList;
