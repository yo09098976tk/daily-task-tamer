import { useEffect, useState } from "react";
import { getTasks, addTask as addTaskToStorage, toggleTask, Task } from "@/lib/storage";
import AddTask from "@/components/AddTask";
import TaskList from "@/components/TaskList";
import ProgressBar from "@/components/ProgressBar";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  const handleAddTask = (title: string) => {
    const newTask = addTaskToStorage(title);
    setTasks((prev) => [...prev, newTask]);
    toast({
      title: "Tarea agregada",
      description: "La tarea se ha agregado correctamente",
    });
  };

  const handleToggleTask = (taskId: string) => {
    const updatedTasks = toggleTask(taskId);
    setTasks(updatedTasks);
  };

  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container max-w-2xl py-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Registro de Actividades Diarias
          </h1>
          <p className="text-gray-600 mb-6">
            Organiza tus tareas y mejora tu productividad
          </p>
          
          <ProgressBar total={tasks.length} completed={completedTasks} />
          <AddTask onAdd={handleAddTask} />
          <TaskList tasks={tasks} onToggle={handleToggleTask} />
        </div>
      </div>
    </div>
  );
};

export default Index;