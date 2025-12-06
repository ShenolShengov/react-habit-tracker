import { BarChart } from "@mantine/charts";
import { Calendar } from "@mantine/dates";
import { IconAdjustmentsCog } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import api from "../../../api/api";
import endpoints from "../../../api/endpoints";
import dayjs from "dayjs";
import { useAuth } from "../../../store/authContext";

function Stat({ name, value }) {
  return (
    <div className="flex-1/2 flex justify-center items-center p-8 flex-col gap-4 border rounded-sm border-gray-400">
      <IconAdjustmentsCog />
      <h3 className="uppercase">{name}</h3>
      <p className="text-5xl">{value}</p>
    </div>
  );
}

export default function HabitDetails() {
  const { id } = useParams();
  const { user } = useAuth();

  const fetchHabitDetails = async () => {
    const res = await api.get(endpoints.habits.stats(id));
    return res.data;
  };

  const { data: habitDetails } = useQuery({
    queryKey: ["habit-details", id],
    queryFn: fetchHabitDetails,
  });

  const info = [
    { month: "Jan", count: 5 },
    { month: "Feb", count: 3 },
    { month: "Mar", count: 7 },
    { month: "Apr", count: 4 },
    { month: "May", count: 6 },
    { month: "Jun", count: 2 },
    { month: "Jul", count: 8 },
    { month: "Aug", count: 5 },
    { month: "Sep", count: 6 },
    { month: "Oct", count: 4 },
    { month: "Nov", count: 7 },
    { month: "Dec", count: 3 },
  ];

  console.log(habitDetails);

  const formattedCreatedOn = new Date(
    habitDetails?.createdAt
  ).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: user.timeZone,
  });

  return (
    <div className="flex-1 flex flex-col gap-10 p-24 font-outfit">
      <div className="flex flex-col pb-4 gap-4 border-b border-gray-400">
        <h1 className="text-4xl font-semibold">Habit Details</h1>
      </div>

      <div className="flex flex-col gap-8">
        <h2 className="text-3xl font-semibold">Overall stats</h2>
        <div className="grid grid-cols-2 gap-4">
          <Stat name="Total check-ins" value={habitDetails?.totalCheckIns} />
          <Stat
            name="Current streak"
            value={`${habitDetails?.streaks.currentDays} Day/s`}
          />
          <Stat
            name="Best streak"
            value={`${habitDetails?.streaks.best.days} Day/s`}
          />
          <Stat name="Created on" value={formattedCreatedOn} />
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl font-semibold">Check-in history</h2>
        <div className="flex justify-center w-full">
          <Calendar
            size="xl"
            onNextMonth={(d) => console.log(d)}
            minDate="2025-01-01"
            numberOfColumns={2}
            hideOutsideDates
          />
        </div>
      </div>
      <div className="flex flex-col justify-between gap-8">
        <h2 className="text-3xl font-semibold">Check-ins by months</h2>
        <div className="flex justify-start w-full">
          <BarChart
            h={300}
            data={info}
            dataKey="month"
            series={[{ name: "count", color: "blue.6" }]}
            tickLine="y"
          />
        </div>
      </div>
    </div>
  );
}
