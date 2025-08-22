// componente pra adicionar item pra lista //
import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export type Task = {
  id: string;
  title: string;
  completed: boolean;
};

type AddItemInputProps = {
  onAddItem: (title: string) => void; 
};

const AddItemInput: React.FC<AddItemInputProps> = ({ onAddItem }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAddItem(title.trim()); 
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        placeholder="+ adicionar item da lista"
        variant="standard"
        value={title}
        onChange={(e) => setTitle(e.target.value)} 
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton type="submit">
                <AddCircleOutlineIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};

export default AddItemInput;
