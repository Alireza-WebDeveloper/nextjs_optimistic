'use server';
import axios from 'axios';
import { TodoTypeRes, TodoTypeObj } from '../Models/Todo';
import { revalidateTag } from 'next/cache';

const asyncGetAllTodos = async (): Promise<TodoTypeRes> => {
  try {
    const response = await axios.get<TodoTypeRes>('http://localhost:5007/todo');
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const asyncAddTodo = async (data: Partial<TodoTypeObj>): Promise<void> => {
  try {
    await axios.post('http://localhost:5007/todo', data);
    revalidateTag('/');
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export { asyncGetAllTodos, asyncAddTodo };
