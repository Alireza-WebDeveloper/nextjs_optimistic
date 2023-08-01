'use client';

import { TodoTypeObj } from '@/app/Models/Todo';
import { Box, Typography } from '@mui/material';
import { FC } from 'react';

interface TodoItemProps {
  todo: TodoTypeObj;
}

const TodoItem: FC<TodoItemProps> = ({ todo }): JSX.Element => {
  return (
    <Box
      component="section"
      p={3}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        textTransform: 'capitalize',
        backgroundColor: (theme) => theme.palette.info.main,
        borderRadius: 2,
      }}
    >
      <Typography>
        {todo.id}.{todo.description}
      </Typography>
    </Box>
  );
};

export default TodoItem;
