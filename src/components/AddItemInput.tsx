//componente pra adicionar item pra lista//

import React, { useState } from 'react'; from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

// Define the Task type
export type Task = {
  id: string;
  title: string;
  completed: boolean;
};

type AddItemInputProps = {
  onAddItem: (item: string) => void;
};

const AddItemInput: React.FC<AddItemInputProps> = ({ onAddItem }) => {
const [title, setTitle] = useState('');
const handleSubmit = (e: React.FormEvent) => {
const handleSubmit = (e: React.FormEvent) => { // Adicionado handler
    e.preventDefault();

    if (!title.trim()) return; // Validação

    const newTask: Task = {   // Cria objeto Tarefa
      id: crypto.randomUUID(),
      title: title.trim(),
      completed: false,
    };

    onAddItem(newTask);
    setTitle(''); // Limpa input
  };
  
  return (
    <form onSubmit={ (e) => { e.preventDefault(); onAddItem('Adicionar item a lista');}}>
    <TextField
    fullWidth
    placeholder="+ adicionar item da lista"
    variant="standard"
    value={title
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
