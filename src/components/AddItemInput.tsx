//componente pra adicionar item pra lista//

import React, { useState } from 'react'; // adicionando useState
import { TextField, InputAdornment, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export type Task = {
  id: string;
  title: string;
  completed: boolean;
};

type AddItemInputProps = {
  onAddItem: (titulo: string) => void;
};

const AddItemInput: React.FC<AddItemInputProps> = ({ onAddItem }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => { // adicionado handler
    e.preventDefault();
    if (!title.trim()) return; // validação

    onAddItem(value.trim()); // envia apenas a string
    setTitle(""); // limpa o input após adicionar
    };

  return (
    <form onSubmit={ (e) => { e.preventDefault(); onAddItem('teste');}}>
    <TextField
    fullWidth
    placeholder="+ adicionar item da lista"
    variant="standard"
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
