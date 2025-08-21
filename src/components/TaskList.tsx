// componente que cria a lista de tarefas //

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
  // Se não houver tarefas, mostra uma mensagem amigável
  if (tasks.length === 0) {
    return (
      <Typography variant="body1" sx={{ mt: 2, fontStyle: "italic" }}>
        Nenhuma tarefa encontrada. Bora trabalhar?✨
      </Typography>
    );
  }

  // Caso haja tarefas, renderiza a lista
  return (
    <List>
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        {title}
      </Typography>

      {tasks.map((task: Task) => (
        <div key={task.id}>
          <TaskItem
            task={task}
            onToggleComplete={onToggleComplete}
            onRemoveItem={onRemoveItem}
          />
          <Typography
            variant="caption"
            color={task.completed ? "green" : "red"}
            sx={{ ml: 4 }}
          >
            {task.completed ? "✅ Concluída" : "⏳ Pendente"}
          </Typography>
        </div>
      ))}
    </List>
  );
};

export default TaskList;
