import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Schedule = () => {
  const scheduleData = [
    { time: "6:00-8:00", monday: "Preparación", tuesday: "Preparación", wednesday: "Preparación", thursday: "Preparación", friday: "7:40-10:30 Aseo" },
    { time: "8:00-12:00", monday: "Programación", tuesday: "Inglés", wednesday: "Inglés", thursday: "Programación", friday: "10:30-13:45 Ciberseguridad" },
    { time: "12:00-13:00", monday: "Finanzas", tuesday: "Mecatrónica", wednesday: "Mecatrónica", thursday: "Finanzas", friday: "13:45-14:45 Comida" },
    { time: "14:00-14:30", monday: "Comida", tuesday: "Comida", wednesday: "Comida", thursday: "Comida", friday: "14:45-16:00 Ciberseguridad" },
    { time: "14:30-17:40", monday: "Biología", tuesday: "Matemáticas", wednesday: "Química", thursday: "Física", friday: "16:00-18:30 Entrenamiento" },
    { time: "17:40-21:30", monday: "Entrenamiento", tuesday: "Entrenamiento", wednesday: "Entrenamiento", thursday: "Entrenamiento", friday: "19:00-20:40 Preparación" },
    { time: "21:30-22:30", monday: "Coreano", tuesday: "Coreano", wednesday: "Coreano", thursday: "Coreano", friday: "20:40-21:40 Redes" },
    { time: "22:30-23:30", monday: "Inglés", tuesday: "Inglés", wednesday: "Inglés", thursday: "Inglés", friday: "21:40-22:40 Italiano" },
  ];

  return (
    <div className="overflow-auto max-h-[400px]">
      <Table>
        <TableHeader className="sticky top-0 bg-white">
          <TableRow>
            <TableHead>Horas/Días</TableHead>
            <TableHead>Lunes</TableHead>
            <TableHead>Martes</TableHead>
            <TableHead>Miércoles</TableHead>
            <TableHead>Jueves</TableHead>
            <TableHead>Viernes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {scheduleData.map((row, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{row.time}</TableCell>
              <TableCell>{row.monday}</TableCell>
              <TableCell>{row.tuesday}</TableCell>
              <TableCell>{row.wednesday}</TableCell>
              <TableCell>{row.thursday}</TableCell>
              <TableCell>{row.friday}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Schedule;