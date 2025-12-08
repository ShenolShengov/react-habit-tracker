import { useMutation } from "@tanstack/react-query";
import habitService from "../../service/habitService";

const HABIT_UPDATE_MUTATION_KEY = "update-habit";

export default function useUpdateHabit(options) {
  return useMutation({
    mutationKey: [HABIT_UPDATE_MUTATION_KEY],
    mutationFn: habitService.edit,
    ...options,
  });
}
