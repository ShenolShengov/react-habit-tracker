import { useMutation, useQueryClient } from "@tanstack/react-query";
import checkInService from "../../service/checkInService";

const CHECK_IN_MUTATION_KEY = "create-habits";

export default function useCheckIn(options) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [CHECK_IN_MUTATION_KEY],
    mutationFn: checkInService.checkIn,
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
    ...options,
  });
}
