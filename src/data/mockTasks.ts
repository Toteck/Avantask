export interface Task {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
}
export const mockTasks: Task[] = [
  {
    id: 1,
    title: "Estudar React",
    completed: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    title: "Fazer exercícios",
    completed: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 3,
    title: "Ler um livro",
    completed: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 4,
    title: "Organizar workspace",
    completed: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 5,
    title: "Implementar contador",
    completed: false,
    createdAt: new Date().toISOString()
  }
];