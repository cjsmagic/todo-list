import PropTypes from "prop-types";
import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/todo-list/TodoList';
import { ADD, DELETE, UPDATE } from '../redux/actions';

const props = {
    list: PropTypes.array.isRequired,
    addTodo: PropTypes.array.isRequired,
    deleteTodo: PropTypes.array.isRequired
};

const addTodo = (todo) => ({ type: ADD, payload: todo });

const deleteTodo = (todo) => ({ type: DELETE, payload: todo });

const updateTodo = (todo) => ({ type: UPDATE, payload: todo });

const TodoListContainer = ({ list, addTodo, deleteTodo }) => <TodoList
    list={list}
    addTodo={addTodo}
    deleteTodo={deleteTodo}
    updateTodo={updateTodo}
/>

const mapStateToProps = state => ({
    list: state.todoList
});

TodoListContainer.props = props;

export default connect(mapStateToProps, { addTodo, deleteTodo, updateTodo })(TodoListContainer)