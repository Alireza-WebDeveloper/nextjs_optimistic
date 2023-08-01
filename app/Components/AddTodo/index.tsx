'use client';
import { IconButton, TextField, Box } from '@mui/material';
import React, { FC, useState } from 'react';
import { Dispatch, SetStateAction } from 'react';

// Typess

type AddTodoProps = {
  handleSubmitForm(e: React.FormEvent): any;
  setQuery: Dispatch<SetStateAction<string>>;
  query: string;
};

const AddTodo: FC<AddTodoProps> = ({ handleSubmitForm, setQuery, query }) => {
  // Update Query Search
  const updateQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  return (
    <Box
      onSubmit={handleSubmitForm}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
        width: '100%',
        position: 'relative',
      }}
      component={'form'}
    >
      <Box position={'relative'} flexGrow={1}>
        <TextField
          color="info"
          autoComplete="off"
          sx={{
            width: '100%',
          }}
          InputProps={{
            style: {
              fontSize: '1.3rem',
              color: 'black',
              borderRadius: '1rem',
              backgroundColor: 'white',
            },
          }}
          placeholder="add todo"
          onChange={updateQuery}
          value={query}
        />

        <Box>
          <IconButton
            type="submit"
            size="large"
            color="success"
            sx={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              transform: 'translateX(-20%)',
              textTransform: 'capitalize',
            }}
          >
            add
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default AddTodo;
