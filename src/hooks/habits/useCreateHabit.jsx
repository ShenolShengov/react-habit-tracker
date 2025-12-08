import { useMutation } from "@tanstack/react-query";
import habitService from "../../service/habitService";

const HABIT_CREATE_MUTATION_KEY = "create-habits";

export default function useCreateHabit(options) {
  return useMutation({
    mutationKey: [HABIT_CREATE_MUTATION_KEY],
    mutationFn: habitService.add,
    ...options,
  });
}
