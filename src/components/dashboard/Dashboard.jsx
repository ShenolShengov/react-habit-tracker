import { useQuery } from "@tanstack/react-query";
import HabitSummary from "../habits/habitSummary/HabitSummary";
import DashboardSection from "../ui/DashboardSection";
import api from "../../api/api";
import endpoints from "../../api/endpoints";
import dayjs from "dayjs";
import NoHabits from "../habits/noHabits/NoHabits";
import AppLoader from "../loader/AppLoader";

export default function Dashboard() {
  const fetchProgress = async () => {
    const startOfWeek = dayjs().startOf("isoWeek").toISOString();
    const today = dayjs().toISOString();
    const { data } = await api.get(endpoints.checkins.userBase, {
      params: {
        from: startOfWeek,
        to: today,
        size: 9999,
      },
    });

    const { content } = data;
    const progress = content.reduce((acc, cur) => {
      acc[cur.habitId] = (acc[cur.habitId] ?? 0) + 1;
      return acc;
    }, {});
    return progress;
  };

  const fetchTasks = async () => {
    const res = await api.get(endpoints.habits.base);
    return res.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => Promise.all([fetchTasks(), fetchProgress()]),
  });

  if (isLoading) {
    return <AppLoader />;
  }

  const [{ content: habits }, progress] = data;

  if (habits && habits.length === 0) {
    return <NoHabits />;
  }

  return (
    <DashboardSection>
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-semibold" onClick={() => fetchProgress()}>
          My habits
        </h1>
        <div className="grid grid-cols-2 gap-8">
          {habits.map((habit) => (
            <HabitSummary
              key={habit.id}
              {...habit}
              weeklyCheckins={progress[habit.id] ?? 0}
            />
          ))}
        </div>
      </div>
    </DashboardSection>
  );
}
