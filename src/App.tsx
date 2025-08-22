// src/App.tsx
import React, { useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Paper } from "@mui/material";
import "./App.css"; 
import { type Task } from "./components/tasks"; 
import TaskList from "./components/TaskList";
import AddItemInput from "./components/AddItemInput";
import Header from "./components/Header";
import { useLocalStorage } from "./hooks/useLocalStorage";


const App: React.FC = () => {
  // Troca mockTasks pelo hook de Local Storage
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", [])

const handleAddItem = (title: string) => {
  const newTask: Task = {
    id: crypto.randomUUID(),
    text: title,
    completed: false,
  };
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

const handleClearList = () => setTasks([]);

const handleTitleChange = (newTitle: string) =>
  console.log('Alterar título chamado com:', newTitle);

const handleToggleTheme = () => console.log('Alternar tema chamado!');

const App: React.FC = () => {
  const pendingTasks = mockTasks.filter((task) => !task.completed);
  const completedTasks = mockTasks.filter((task) => task.completed);


  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "light",
        },
      }),
    []
  ); 

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ p: 2 }}>
        <Paper sx={{ p: 2 }}>
          <Header
            listTitle="Minha Lista de Tarefas"
            onTitleChange={mockOnTitleChange}
            onClearList={mockOnClearList}
            isDarkMode={false} // Simule o tema
            onToggleTheme={mockOnToggleTheme}
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
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default App;
