import { useQuery } from "@tanstack/react-query";
import habitService from "../../service/habitService";

const HABIT_QUERY_KEY = "habit";

export default function useHabit(id, options) {
  return useQuery({
    queryKey: [HABIT_QUERY_KEY, id ?? 0],
    queryFn: ({signal}) => {
      return habitService.byId(id, {signal});
    },
    ...options,
  });
}
