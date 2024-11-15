export interface Task {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

const STORAGE_KEY = 'daily-tasks';

export const getTasks = (): Task[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return [];
  return JSON.parse(stored);
};

export const saveTasks = (tasks: Task[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};

export const addTask = (title: string) => {
  const tasks = getTasks();
  const newTask: Task = {
    id: crypto.randomUUID(),
    title,
    completed: false,
    createdAt: new Date().toISOString(),
  };
  const updatedTasks = [...tasks, newTask];
  saveTasks(updatedTasks);
  return newTask;
};

export const toggleTask = (taskId: string) => {
  const tasks = getTasks();
  const updatedTasks = tasks.map(task => 
    task.id === taskId ? { ...task, completed: !task.completed } : task
  );
  saveTasks(updatedTasks);
  return updatedTasks;
};