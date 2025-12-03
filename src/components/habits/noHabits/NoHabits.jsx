import { Button } from "@mantine/core";
import noHabitsImage from "../../../assets/no-habits.png";
import DashboardSection from "../../ui/DashboardSection";
import { Link } from "react-router";

export default function NoHabits() {
  return (
    <DashboardSection className="items-center gap-8 justify-center">
      <img
        src={noHabitsImage}
        alt="Empty task list"
        className="w-[20%] object-contain mx-auto"
      />
      <h2 className="text-5xl font-bold ">No Habits created</h2>
      <p className="text-2xl opacity-70">
        Create a habit to start track your progress
      </p>
      <Button
        component={Link}
        to="/habits/create"
        type="submit"
        variant="filled"
        size="lg"
        className="rounded-xl!"
      >
        Create habit
      </Button>
    </DashboardSection>
  );
}
