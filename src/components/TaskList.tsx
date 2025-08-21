//componente que cria a lista de tarefas//

import React from "react";
import { List, Typography } from "@mui/material";
import { type Task } from "./tasks";
import TaskItem from "./TaskItem";

type TaskListProps = {
  title: string;
  tasks: Task[];
  onToggleComplete: (taskId: string) => void;
  onRemoveItem: (taskId: string) => void;
};

const TaskList: React.FC<TaskListProps> = ({
  title,
  tasks,
  onToggleComplete,
  onRemoveItem,
}) => {
  if (tasks.length === 0) {
    return (
    <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
      ✨ Nenhuma tarefa encontrada. Que tal adicionar uma nova?
    </Typography>
  );
};
  }

  return (
    <List>
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        {title}
      </Typography>
      {tasks.map((task: Task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onRemoveItem={onRemoveItem}
        />
      ))}
    </List>
  );
};

export default TaskList;