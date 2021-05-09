import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todo, setTodo] = useState("");
  const [items, setItems] = useState([]);
  const [updateTodo, setUpdateTodo] = useState("");

  return (
    <div className="todo-list" id="124">
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
            <div className="todo-list__item__name">No Items Found</div>
          </div>
        )}

        {items.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            updateTodo={updateTodo}
            setUpdateTodo={setUpdateTodo}
            items={items}
            setItems={setItems}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
