import PropTypes from "prop-types";
import { useState } from "react";
import TodoItem from "./TodoItem";

const propTypes = {
  list: PropTypes.array.isRequired,
  addTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
};

const TodoList = ({ list, addTodo, deleteTodo, updateTodo }) => {
  const [todo, setTodo] = useState("");
  const [tempText, setTempText] = useState(null);

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
            addTodo({ name: todo, id: new Date().getTime() });
            setTodo("");
          }}
        >
          Add
        </button>
      </div>

      <div className="todo-list__items">
        {list.length === 0 && (
          <div className="todo-list__item todo-list__item--no-items">
            <div className="todo-list__item__name">No Items Found</div>
          </div>
        )}

        {list.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            tempText={tempText}
            setTempText={setTempText}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            items={list}
          />
        ))}
      </div>
    </div>
  );
};
TodoList.propTypes = propTypes;

export default TodoList;
