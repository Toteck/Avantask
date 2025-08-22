import React, { useMemo } from 'react';
import { type Task } from './tasks'; // Usar o tipo existente do projeto

interface TaskCounterProps {
  tasks: Task[];
}

const TaskCounter: React.FC<TaskCounterProps> = ({ tasks }) => {
  // Usando useMemo para otimizar os cálculos
  const taskStats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const pending = total - completed;
    
    return { total, completed, pending };
  }, [tasks]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        📊 Contador de Tarefas
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Total de tarefas */}
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-600">
            {taskStats.total}
          </div>
          <div className="text-sm text-blue-800 font-medium">
            Total de Tarefas
          </div>
        </div>

        {/* Tarefas pendentes */}
        <div className="bg-orange-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-orange-600">
            {taskStats.pending}
          </div>
          <div className="text-sm text-orange-800 font-medium">
            Pendentes
          </div>
        </div>

        {/* Tarefas concluídas */}
        <div className="bg-green-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-green-600">
            {taskStats.completed}
          </div>
          <div className="text-sm text-green-800 font-medium">
            Concluídas
          </div>
        </div>
      </div>

      {/* Barra de progresso */}
      <div className="mt-4">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Progresso</span>
          <span>
            {taskStats.total > 0 
              ? Math.round((taskStats.completed / taskStats.total) * 100)
              : 0
            }%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-green-500 h-2 rounded-full transition-all duration-300"
            style={{ 
              width: taskStats.total > 0 
                ? `${(taskStats.completed / taskStats.total) * 100}%` 
                : '0%' 
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TaskCounter;