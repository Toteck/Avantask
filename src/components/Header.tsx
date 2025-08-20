//componente com o cabeçalho com o título editável da lista//
import React from 'react';
import { Box, Typography, IconButton} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ModeNightIcon from '@mui/icons-material/ModeNight';


type HeaderProps = {
  listTitle: string;
  onClearList: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
};

const Header: React.FC<HeaderProps> = ({
  listTitle,
  onClearList,
  isDarkMode,
  onToggleTheme,
}) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" p={2}>
      <Typography variant="h6" component="h1">
        {listTitle}
      </Typography>
      <Box>
        <IconButton onClick={onClearList}>
          <DeleteIcon />
        </IconButton>
        <IconButton onClick={onToggleTheme}>
          {isDarkMode ? <ModeNightIcon /> : <WbSunnyIcon />}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
