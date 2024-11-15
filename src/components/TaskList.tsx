import { Task } from "@/lib/storage";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  onToggle: (taskId: string) => void;
}

const TaskList = ({ tasks, onToggle }: TaskListProps) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No hay tareas pendientes. ¡Agrega una nueva tarea para comenzar!
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default TaskList;