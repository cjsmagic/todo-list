// __tests__/TodoList.test.js
import React from 'react'
import renderer from 'react-test-renderer';
import { render, fireEvent, waitFor, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import TodoList from './TodoList'

afterEach(() => {
    cleanup()
})

test('it should load', async () => {
    render(<TodoList />);
    expect(screen.getByRole('heading', { name: /todo list/i })).toHaveTextContent('Todo List')
})

it('renders according to design', () => {
    const tree = renderer
        .create(<TodoList />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});


test('it should add a new item', async () => {
    render(<TodoList />)
    const uniqueName = `${new Date().getTime()}__todo`;

    const inputElement = screen.getByTestId('test-id-todo-input');
    fireEvent.change(inputElement, { target: { value: uniqueName } })

    fireEvent.click(screen.getByRole('button', {
        name: /add/i
    }))

    await waitFor(() => expect(screen.getByText(uniqueName)).toBeTruthy())
    await waitFor(() => expect(inputElement.value).toBe(''))
    // screen.debug();
})


test('it should list items', async () => {
    const { container } = render(<TodoList />)
    const uniqueName = `${new Date().getTime()}__todo`;

    const inputElement = screen.getByTestId('test-id-todo-input');
    fireEvent.change(inputElement, { target: { value: uniqueName } })

    fireEvent.click(screen.getByRole('button', {
        name: /add/i
    }))
    // screen.debug();
    const uniqueName2 = `${new Date().getTime()}__todo`;
    fireEvent.change(inputElement, { target: { value: uniqueName2 } })

    fireEvent.click(screen.getByRole('button', {
        name: /add/i
    }))


    await waitFor(() => {

        const items = Array.from(container.querySelectorAll('.todo-list__item'))
        expect(items.length).toEqual(2)
    })

    // screen.debug();
})



test('it should be deletable', async () => {
    render(<TodoList />)
    const uniqueName = `${new Date().getTime()}__todo`;

    const inputElement = screen.getByTestId('test-id-todo-input');
    fireEvent.change(inputElement, { target: { value: uniqueName } })

    fireEvent.click(screen.getByRole('button', {
        name: /add/i
    }))

    await waitFor(() => expect(screen.getByText(uniqueName)).not.toBeNull());
    // screen.debug();
    fireEvent.click(screen.getByRole('button', {
        name: /delete/i
    }));

    await waitFor(() => expect(screen.queryByText(uniqueName)).toBeNull());

    await waitFor(() => expect(screen.queryByText('No Items Found')).not.toBeNull());
    // screen.debug();
})


test('it should be editable', async () => {
    render(<TodoList />)
    // screen.debug();
    const uniqueName = `${new Date().getTime()}__todo`;

    const inputElement = screen.getByTestId('test-id-todo-input');
    fireEvent.change(inputElement, { target: { value: uniqueName } })

    fireEvent.click(screen.getByRole('button', {
        name: /add/i
    }))

    await waitFor(() => expect(screen.getByText(uniqueName)).not.toBeNull());
    // screen.debug();
    const editButton = screen.getByRole('button', {
        name: /edit/i
    });
    await waitFor(() => expect(editButton).not.toBeNull());
    fireEvent.click(editButton);
    // screen.debug();

    await waitFor(() => expect(editButton).not.toBeNull());
    fireEvent.click(editButton);

    const editElement = screen.getByTestId('test-id-todo-edit');
    const uniqueEditName = `${new Date().getTime()}__todo`;
    fireEvent.change(editElement, { target: { value: uniqueEditName } })
    // screen.debug();
    const updateButton = screen.getByRole('button', {
        name: /update/i
    });
    await waitFor(() => expect(updateButton).not.toBeNull());
    fireEvent.click(updateButton);

    await waitFor(() => expect(screen.getByText(uniqueEditName)).toBeTruthy())
    // screen.debug();
})