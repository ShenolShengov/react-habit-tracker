import { useMutation, useQueryClient } from "@tanstack/react-query";
import habitService from "../service/habitService";

const HABIT_DELETE_MUTATION_KEY = "create-habits";

export default function useDeleteHabit(options) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [HABIT_DELETE_MUTATION_KEY],
    mutationFn: habitService.deleteById,
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
    ...options,
  });
}
