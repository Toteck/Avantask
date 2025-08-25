//componente com o cabeçalho com o título editável da lista//
import React from 'react';
import { Box, Typography, IconButton} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';



type HeaderProps = {
  listTitle: string;
  onTitleChange: (newTitle: string) => void;
  onClearList: () => void;
};

const Header: React.FC<HeaderProps> = ({
  listTitle,
  onClearList,
}) => {
  return (
    <Box className="header">
      <Typography variant="h6" component="h1">
        {listTitle}
      </Typography>
      <Box>
        <IconButton onClick={onClearList}>
          <DeleteIcon />
        </IconButton>
        
      </Box>
    </Box>
  );
};

export default Header;
