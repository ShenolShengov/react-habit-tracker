import { IconAdjustmentsCog } from "@tabler/icons-react";
import { useAuth } from "../../../store/authContext";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import api from "../../../api/api";
import endpoints from "../../../api/endpoints";
import { Skeleton } from "@mantine/core";

function Stat({ name, value }) {
  return (
    <div className="flex justify-center items-center p-8 flex-col gap-4 border rounded-sm border-gray-400">
      <IconAdjustmentsCog />
      <h3 className="uppercase">{name}</h3>
      <p className="text-5xl">{value}</p>
    </div>
  );
}

export default function HabitStats() {
  const { id } = useParams();
  const { user } = useAuth();

  const fetchHabitStats = async () => {
    const res = await api.get(endpoints.habits.stats(id));
    return res.data;
  };

  const { data: stats, isLoading } = useQuery({
    queryKey: ["habit-stats", id],
    queryFn: fetchHabitStats,
  });

  const formattedCreatedOn = new Date(stats?.createdAt).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
      timeZone: user.timeZone,
    }
  );
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-3xl font-semibold">Overall stats</h2>
      <div className="grid grid-cols-2 gap-4">
        {isLoading ? (
          <>
            <Skeleton height={195} />
            <Skeleton height={195} />
            <Skeleton height={195} />
            <Skeleton height={195} />
          </>
        ) : (
          <>
            <Stat name="Total check-ins" value={stats.totalCheckIns} />
            <Stat
              name="Current streak"
              value={`${stats.streaks.currentDays} Day/s`}
            />
            <Stat
              name="Best streak"
              value={`${stats.streaks.best.days} Day/s`}
            />
            <Stat name="Created on" value={formattedCreatedOn} />
          </>
        )}
      </div>
    </div>
  );
}
