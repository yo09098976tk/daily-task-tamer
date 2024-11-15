import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface Activity {
  id: string;
  name: string;
  performance: "high" | "medium" | "low" | null;
  day: string;
}

const WeeklyActivities = () => {
  const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
  const [activities, setActivities] = useState<Activity[]>([
    { id: "1", name: "Programación", performance: null, day: "Lunes" },
    { id: "2", name: "Inglés", performance: null, day: "Martes" },
    { id: "3", name: "Mecatrónica", performance: null, day: "Miércoles" },
    // ... Añadir más actividades según sea necesario
  ]);

  const handlePerformanceChange = (activityId: string, value: "high" | "medium" | "low") => {
    setActivities(activities.map(activity => 
      activity.id === activityId ? { ...activity, performance: value } : activity
    ));
  };

  return (
    <div className="space-y-4">
      {days.map((day) => (
        <div key={day} className="border rounded-lg p-4">
          <h3 className="font-semibold mb-2">{day}</h3>
          {activities
            .filter(activity => activity.day === day)
            .map((activity) => (
              <div key={activity.id} className="flex items-center space-x-4 mb-2">
                <span className="w-32">{activity.name}</span>
                <RadioGroup
                  value={activity.performance || ""}
                  onValueChange={(value) => handlePerformanceChange(activity.id, value as "high" | "medium" | "low")}
                  className="flex space-x-2"
                >
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem value="high" id={`${activity.id}-high`} className="text-green-500" />
                    <Label htmlFor={`${activity.id}-high`} className="text-green-500">Alto</Label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem value="medium" id={`${activity.id}-medium`} className="text-blue-500" />
                    <Label htmlFor={`${activity.id}-medium`} className="text-blue-500">Medio</Label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem value="low" id={`${activity.id}-low`} className="text-red-500" />
                    <Label htmlFor={`${activity.id}-low`} className="text-red-500">Bajo</Label>
                  </div>
                </RadioGroup>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default WeeklyActivities;