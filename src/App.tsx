// src/App.tsx
import React from "react";
import { Box } from "@mui/material";
import "./App.css"; 
import { type Task } from "./components/tasks"; 
import TaskList from "./components/TaskList";
import AddItemInput from "./components/AddItemInput";
import Header from "./components/Header";
import { useLocalStorage } from "./hooks/useLocalStorage";


const mockOnClearList = () =>
  console.log('Função mock: "Limpar lista" chamada!');
const mockOnAddItem = (text: string) =>
  console.log('Função mock: "Adicionar item" chamada com o texto:', text);
const mockOnToggleComplete = (id: string) =>
  console.log('Função mock: "Alternar item" chamada para o ID:', id);
const mockOnRemoveItem = (id: string) =>
  console.log('Função mock: "Remover item" chamada para o ID:', id);
const mockOnTitleChange = (newTitle: string) =>
  console.log('Função mock: "Alterar título" chamada com:', newTitle);

const App: React.FC = () => {

  return (
    <Box className="app-container">
      <Header
        listTitle="Minha Lista de Tarefas"
        onTitleChange={mockOnTitleChange}
        onClearList={mockOnClearList}
      />
      <AddItemInput onAddItem={mockOnAddItem} />
      <TaskList
        title="tarefas pendentes"
        tasks={pendingTasks}
        onToggleComplete={mockOnToggleComplete}
        onRemoveItem={mockOnRemoveItem}
      />
      <TaskList
        title="itens concluídos"
        tasks={completedTasks}
        onToggleComplete={mockOnToggleComplete}
        onRemoveItem={mockOnRemoveItem}
      />
    </Box>
  );
};

export default App;
