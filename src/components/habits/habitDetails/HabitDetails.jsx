import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import api from "../../../api/api";
import endpoints from "../../../api/endpoints";
import { useAuth } from "../../../store/authContext";
import dayjs from "dayjs";
import MonthsCheckIns from "./MonthsCheckIns";
import CheckInsHistory from "./CheckInsHistory";
import HabitStats from "./HabitStats";
import AppLoader from "../../loader/AppLoader";

export default function HabitDetails() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const fetchCheckIns = async () => {
    const startOfTheYear = dayjs().tz(user.timeZone).startOf("year");
    const res = await api.get(endpoints.checkins.habitBase(id), {
      params: {
        size: 366,
        from: startOfTheYear.toISOString(),
      },
    });
    return res.data.content.map((c) => dayjs(c.createdAt).format("YYYY-MM-DD"));
  };

  const {
    data: checkIns,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["habit-details", id],
    queryFn: fetchCheckIns,
    retry: false,
  });

  if (isLoading) {
    return <AppLoader />;
  }

  if (error) {
    return navigate("/not-found");
  }

  return (
    <div className="flex-1 flex flex-col gap-10 p-24 font-outfit">
      <div className="flex flex-col pb-4 gap-4 border-b border-gray-400">
        <h1 className="text-4xl font-semibold">Habit Details</h1>
      </div>
      <HabitStats />
      <CheckInsHistory chekcIns={checkIns} />
      <MonthsCheckIns checkIns={checkIns} />
    </div>
  );
}
