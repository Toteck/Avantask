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
  onAddItem: (title: string) => void;
};

const AddItemInput: React.FC<AddItemInputProps> = ({ onAddItem }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => { // adicionado handler
    e.preventDefault();
    if (!title.trim()) return; // validação

    onAddItem(title.trim()); // envia apenas a string
    setTitle(""); // limpa o input após adicionar
    };

  return (
    <form onSubmit={handleSubmit}> {/*adicionando o form para capturar o submit*/}
    <TextField
    fullWidth
    placeholder="+ adicionar item da lista"
    variant="standard"
    value={title}
    onChange={(e) => setTitle(e.target.value)} // atualiza o estado do input
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
