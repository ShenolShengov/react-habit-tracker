import api from "../api/api";
import endpoints from "../api/endpoints";

const checkInService = {
  checkIn(habitId) {
    return api.post(endpoints.checkins.habitBase(habitId));
  },
};

export default checkInService;
