import { useEffect, useState } from "react";
import { getTasks, addTask as addTaskToStorage, toggleTask, resetTasks, Task } from "@/lib/storage";
import AddTask from "@/components/AddTask";
import TaskList from "@/components/TaskList";
import Schedule from "@/components/Schedule";
import WeeklyActivities from "@/components/WeeklyActivities";
import PerformanceChart from "@/components/PerformanceChart";
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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        <div className="grid grid-cols-2 gap-6">
          {/* Superior izquierda: Horario */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Horario Semanal</h2>
            <Schedule />
          </div>

          {/* Superior derecha: Decoración */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold">Tareas Diarias</h2>
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
            <AddTask onAdd={handleAddTask} />
            <TaskList tasks={tasks} onToggle={handleToggleTask} />
          </div>

          {/* Inferior izquierda: Actividades semanales */}
          <div className="bg-white rounded-xl shadow-sm p-6 overflow-auto max-h-[600px]">
            <h2 className="text-xl font-semibold mb-4">Actividades Semanales</h2>
            <WeeklyActivities />
          </div>

          {/* Inferior derecha: Gráfico de rendimiento */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Rendimiento Semanal</h2>
            <PerformanceChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;