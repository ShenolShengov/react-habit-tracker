import { useQuery } from "@tanstack/react-query";
import HabitSummary from "../habits/habitSummary/HabitSummary";
import DashboardSection from "../ui/DashboardSection";
import api from "../../api/api";
import endpoints from "../../api/endpoints";

export default function Dashboard() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await api.get(endpoints.habits.base);
      return res.data;
    },
  });

  const { content: habits } = data;
  return (
    <DashboardSection>
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-semibold">My habits</h1>
        <div className="grid grid-cols-2 gap-8">
          {habits.map((habit) => (
            <HabitSummary {...habit} />
          ))}
        </div>
      </div>
    </DashboardSection>
  );
}
