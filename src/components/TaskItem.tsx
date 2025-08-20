//componente que representa um item da lista de tarefas//
import React from 'react';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
  Tooltip
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { type Task } from './tasks';

type TaskItemProps = {
  task: Task;
  onToggleComplete: (taskId: string) => void;
  onRemoveItem: (taskId: string) => void;
};

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleComplete, onRemoveItem }) => {
  const textStyle = task.completed ? { textDecoration: 'line-through' } : {};

  return (
    <ListItem
      disablePadding
      sx={{ opacity: task.completed ? 0.6 : 1 }}
      secondaryAction={
        <Tooltip title="Excluir item">
          <IconButton
            edge="end"
            aria-label="excluir"
            onClick={() => onRemoveItem(task.id)}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      }
    >
      <ListItemButton onClick={() => onToggleComplete(task.id)}>
        <ListItemIcon>
          <Checkbox 
            edge="start"
            checked={task.completed}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText 
          primary={task.text} 
          sx={textStyle}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default TaskItem;