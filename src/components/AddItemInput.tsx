//componente pra adicionar item pra lista//

import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

type AddItemInputProps = {
  onAddItem: (item: string) => void;
};

const AddItemInput: React.FC<AddItemInputProps> = ({ onAddItem }) => {
  const [inputText, setInputText] = useState("");

  const handleAddItem = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputText.trim()) {
      onAddItem(inputText);
      setInputText("");
    }
  };

  return (
    <form className="add-item-form" onSubmit={handleAddItem}>
      <TextField
        fullWidth
        placeholder=" adicionar item da lista"
        variant="standard"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                type="submit"
                aria-label="adicionar item"
                disabled={!inputText.trim()}
              >
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
