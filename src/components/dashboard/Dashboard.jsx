import { useQuery } from "@tanstack/react-query";
import HabitSummary from "../habits/habitSummary/HabitSummary";
import DashboardSection from "../ui/DashboardSection";


export default function Dashboard() {

  const query = useQuery({
    queryKey: ['tasks'],
    queryFn: () => {
      
    }
  })

  return (
    <DashboardSection>
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-semibold">My habits</h1>
        <div className="grid grid-cols-2 gap-8">
          <HabitSummary />
          <HabitSummary />
          <HabitSummary />
        </div>
      </div>
    </DashboardSection>
  );
}
