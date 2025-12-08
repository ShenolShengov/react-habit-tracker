import { useQuery } from "@tanstack/react-query";
import habitService from "../../service/habitService";

const HABIT_QUERY_KEY = "habits";

export default function useHabits(options) {
  return useQuery({
    queryKey: [HABIT_QUERY_KEY],
    queryFn: ({ signal }) =>
      Promise.all([
        habitService.getAll({ signal }),
        habitService.getWeeklyProgresses({ signal }),
      ]),
    ...options,
  });
}
