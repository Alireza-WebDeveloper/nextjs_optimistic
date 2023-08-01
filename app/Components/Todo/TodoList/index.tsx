'use client';

import { TodoTypeRes } from '@/app/Models/Todo';
import { FC } from 'react';
import TodoItem from '../TodoItem';
import { Stack } from '@mui/material';

interface TodoListProps {
  todos: TodoTypeRes;
}

const TodoList: FC<TodoListProps> = ({ todos }): JSX.Element => {
  const renderTodoItems = () => {
    return todos.map((todo) => {
      return <TodoItem key={todo.id} todo={todo} />;
    });
  };
  return (
    <Stack
      component="div"
      sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
    >
      {renderTodoItems()}
    </Stack>
  );
};

export default TodoList;
