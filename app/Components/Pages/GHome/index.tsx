'use client';

import { experimental_useOptimistic as useOptimistic, useRef } from 'react';
import { TodoTypeObj, TodoTypeRes } from '@/app/Models/Todo';
import { FC } from 'react';
import { Container, Grid } from '@mui/material';
import AddTodo from '../../AddTodo';
import TodoList from '../../Todo/TodoList';
import { useTransition, useState } from 'react';
import { asyncAddTodo } from '@/app/Helpers/Todo';
interface GHomeProps {
  todos: TodoTypeRes;
}

const GHome: FC<GHomeProps> = ({ todos }) => {
  // States
  const [query, setQuery] = useState('');
  const [optimisticTodos, addOptimisticTodos] = useOptimistic(
    todos,
    (state: TodoTypeRes, newData: TodoTypeObj) => [...state, newData]
  );
  // Handle Submit Form With Optimistic
  const handleSubmitForm = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      // Optimistic
      addOptimisticTodos({ description: query, id: todos.length + 1 });
      await asyncAddTodo({ description: query });
    } catch (error) {
      console.log(error);
    }
  };
  // Return JSX
  return (
    <Container>
      <Grid container p={2} spacing={3}>
        <Grid item xs={12}>
          <AddTodo
            handleSubmitForm={handleSubmitForm}
            setQuery={setQuery}
            query={query}
          />
        </Grid>
        <Grid item xs={12}>
          <TodoList todos={optimisticTodos} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default GHome;
