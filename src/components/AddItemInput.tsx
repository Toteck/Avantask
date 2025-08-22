//componente pra adicionar item pra lista//

import React from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

type AddItemInputProps = {
  onAddItem: (item: string) => void;
};

const AddItemInput: React.FC<AddItemInputProps> = ({ onAddItem }) => {
  return (
    <form className="add-item-form" onSubmit={ (e) => { e.preventDefault(); onAddItem('teste');}}>
    <TextField
    fullWidth
    placeholder=" adicionar item da lista"
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
