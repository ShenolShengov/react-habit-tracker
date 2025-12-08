import HabitSummary from "../habits/habitSummary/HabitSummary";
import DashboardSection from "../ui/DashboardSection";
import NoHabits from "../habits/noHabits/NoHabits";
import AppLoader from "../loader/AppLoader";
import useHabits from "../../hooks/habits/useHabits";

export default function Dashboard() {
  const { data, isLoading } = useHabits();

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
