import { useEffect, useState } from "react";
import { getTasks, addTask as addTaskToStorage, toggleTask, resetTasks, Task } from "@/lib/storage";
import AddTask from "@/components/AddTask";
import TaskList from "@/components/TaskList";
import ProgressBar from "@/components/ProgressBar";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

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

  const handleReset = () => {
    const resetedTasks = resetTasks();
    setTasks(resetedTasks);
    toast({
      title: "Tareas reiniciadas",
      description: "Se han eliminado todas las tareas para comenzar un nuevo día",
    });
  };

  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container max-w-2xl py-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-2xl font-bold text-gray-900">
              Registro de Actividades Diarias
            </h1>
            <Button
              variant="outline"
              size="icon"
              onClick={handleReset}
              className="hover:bg-red-50"
              title="Reiniciar tareas"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
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