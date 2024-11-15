import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Schedule = () => {
  const scheduleData = [
    { time: "6:00-8:00", monday: "Preparación", tuesday: "Preparación", wednesday: "Preparación", thursday: "Preparación", friday: "7:40-10:30 Aseo", color: "bg-blue-100" },
    { time: "8:00-12:00", monday: "Programación", tuesday: "Inglés", wednesday: "Inglés", thursday: "Programación", friday: "10:30-13:45 Ciberseguridad", color: "bg-green-100" },
    { time: "12:00-13:00", monday: "Finanzas", tuesday: "Mecatrónica", wednesday: "Mecatrónica", thursday: "Finanzas", friday: "13:45-14:45 Comida", color: "bg-yellow-100" },
    { time: "14:00-14:30", monday: "Comida", tuesday: "Comida", wednesday: "Comida", thursday: "Comida", friday: "14:45-16:00 Ciberseguridad", color: "bg-orange-100" },
    { time: "14:30-17:40", monday: "Biología", tuesday: "Matemáticas", wednesday: "Química", thursday: "Física", friday: "16:00-18:30 Entrenamiento", color: "bg-purple-100" },
    { time: "17:40-21:30", monday: "Entrenamiento", tuesday: "Entrenamiento", wednesday: "Entrenamiento", thursday: "Entrenamiento", friday: "19:00-20:40 Preparación", color: "bg-pink-100" },
    { time: "21:30-22:30", monday: "Coreano", tuesday: "Coreano", wednesday: "Coreano", thursday: "Coreano", friday: "20:40-21:40 Redes", color: "bg-indigo-100" },
    { time: "22:30-23:30", monday: "Inglés", tuesday: "Inglés", wednesday: "Inglés", thursday: "Inglés", friday: "21:40-22:40 Italiano", color: "bg-red-100" },
  ];

  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="font-bold">Horas/Días</TableHead>
            <TableHead className="font-bold">Lunes</TableHead>
            <TableHead className="font-bold">Martes</TableHead>
            <TableHead className="font-bold">Miércoles</TableHead>
            <TableHead className="font-bold">Jueves</TableHead>
            <TableHead className="font-bold">Viernes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {scheduleData.map((row, index) => (
            <TableRow key={index} className={`${row.color} hover:brightness-95 transition-all`}>
              <TableCell className="font-medium whitespace-nowrap">{row.time}</TableCell>
              <TableCell className="whitespace-nowrap">{row.monday}</TableCell>
              <TableCell className="whitespace-nowrap">{row.tuesday}</TableCell>
              <TableCell className="whitespace-nowrap">{row.wednesday}</TableCell>
              <TableCell className="whitespace-nowrap">{row.thursday}</TableCell>
              <TableCell className="whitespace-nowrap">{row.friday}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Schedule;