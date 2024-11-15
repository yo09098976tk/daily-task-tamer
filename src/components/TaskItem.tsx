import { Check } from "lucide-react";
import { Task } from "@/lib/storage";

interface TaskItemProps {
  task: Task;
  onToggle: (taskId: string) => void;
}

const TaskItem = ({ task, onToggle }: TaskItemProps) => {
  return (
    <div
      className={`group flex items-center gap-3 p-4 rounded-lg transition-all duration-200 ${
        task.completed ? "bg-task-complete" : "hover:bg-task-hover"
      }`}
    >
      <button
        onClick={() => onToggle(task.id)}
        className={`w-5 h-5 rounded border transition-colors duration-200 flex items-center justify-center ${
          task.completed
            ? "bg-green-500 border-green-500"
            : "border-gray-300 group-hover:border-gray-400"
        }`}
      >
        {task.completed && <Check className="w-4 h-4 text-white" />}
      </button>
      <span
        className={`flex-1 text-sm ${
          task.completed ? "text-gray-500 line-through" : "text-gray-700"
        }`}
      >
        {task.title}
      </span>
    </div>
  );
};

export default TaskItem;