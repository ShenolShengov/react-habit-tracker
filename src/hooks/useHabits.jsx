import { useQuery } from "@tanstack/react-query";
import habitService from "../service/habitService";

const HABIT_QUERY_KEY = "habits";

export default function useHabits(...options) {
  return useQuery({
    queryKey: [HABIT_QUERY_KEY],
    queryFn: () =>
      Promise.all([habitService.getAll(), habitService.getWeeklyProgresses()]),
    ...options,
  });
}
