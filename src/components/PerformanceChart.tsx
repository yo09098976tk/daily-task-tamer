import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { day: "Lunes", alto: 4, medio: 2, bajo: 1 },
  { day: "Martes", alto: 3, medio: 3, bajo: 1 },
  { day: "Miércoles", alto: 5, medio: 1, bajo: 1 },
  { day: "Jueves", alto: 2, medio: 4, bajo: 1 },
  { day: "Viernes", alto: 3, medio: 2, bajo: 2 },
  { day: "Sábado", alto: 4, medio: 1, bajo: 0 },
  { day: "Domingo", alto: 2, medio: 2, bajo: 1 },
];

const PerformanceChart = () => {
  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="alto" fill="#22c55e" stackId="a" name="Satisfactorio" />
          <Bar dataKey="medio" fill="#3b82f6" stackId="a" name="Medio" />
          <Bar dataKey="bajo" fill="#ef4444" stackId="a" name="Bajo" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;