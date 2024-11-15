interface ProgressBarProps {
  total: number;
  completed: number;
}

const ProgressBar = ({ total, completed }: ProgressBarProps) => {
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        <span className="text-sm text-gray-600">Progreso diario</span>
        <span className="text-sm font-medium text-gray-700">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-500 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;