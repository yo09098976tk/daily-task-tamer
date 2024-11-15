import { useState } from "react";
import { Plus } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface AddTaskProps {
  onAdd: (title: string) => void;
}

const AddTask = ({ onAdd }: AddTaskProps) => {
  const [title, setTitle] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      toast({
        title: "Error",
        description: "La tarea no puede estar vacía",
        variant: "destructive",
      });
      return;
    }
    onAdd(title.trim());
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Agregar nueva tarea..."
        className="flex-1 px-4 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 flex items-center gap-2"
      >
        <Plus className="w-4 h-4" />
        Agregar
      </button>
    </form>
  );
};

export default AddTask;