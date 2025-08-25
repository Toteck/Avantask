// src/App.tsx
import React from "react";

import { Box, Paper } from "@mui/material";
import "./App.css";
import { type Task } from "./components/tasks";
import TaskList from "./components/TaskList";
import AddItemInput from "./components/AddItemInput";
import Header from "./components/Header";
// import TaskCounter from "./components/TaskCounter";
import { useLocalStorage } from "./hooks/useLocalStorage";
import TaskCounter from "./components/TaskCounter";

const mockOnClearList = () =>
  console.log('Função mock: "Limpar lista" chamada!');
const mockOnTitleChange = (newTitle: string) =>
  console.log('Função mock: "Alterar título" chamada com:', newTitle);

const App: React.FC = () => {
  // Troca mockTasks pelo hook de Local Storage
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);

  //Funções para manipular tarefas
  const handleAddItem = (title: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      text: title,
      completed: false,
    };
    console.log({ newTask })
    setTasks([...tasks, newTask]); // atualiza estado + Local Storage
  };

  const handleToggleComplete = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleRemoveItem = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Precisam ser implementadas
  const handleClearList = () => setTasks([]);

  const handleTitleChange = (newTitle: string) => {
    
  }


  //Filtros
  const pendingTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed)

  return (
    
      <Box sx={{ p: 2 }}>
        <Paper sx={{ p: 2 }}>
          <Header
            listTitle="Minha Lista de Tarefas"
            onTitleChange={mockOnTitleChange}
            onClearList={mockOnClearList}
          />
          <TaskCounter completedTasks={completedTasks} pendingTasks={pendingTasks} />
          <AddItemInput onAddItem={handleAddItem} />
          <TaskList
            title="Tarefas pendentes"
            tasks={pendingTasks}
            onToggleComplete={handleToggleComplete}
            onRemoveItem={handleRemoveItem}
          />
          <TaskList
            title="Itens concluídos"
            tasks={completedTasks}
            onToggleComplete={handleToggleComplete}
            onRemoveItem={handleRemoveItem}
          />
      </Box>
    
  );
};

export default App;