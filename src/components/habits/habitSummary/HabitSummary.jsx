import { Button } from "@mantine/core";
import {
  IconCircleDashedCheck,
  IconCircleDashedPlus,
  IconEdit,
  IconEye,
  IconFlame,
  IconTrash,
} from "@tabler/icons-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router";
import api from "../../../api/api";
import endpoints from "../../../api/endpoints";

function ActionButtons({ id }) {
  const queryClient = useQueryClient();

  const { mutateAsync: deleteHabitMutation, isPending: isDeleteLoading} = useMutation({
    mutationFn: async (id) => {
      await api.delete(endpoints.habits.byId(id));
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this habit?")) {
      await deleteHabitMutation(id);
    }
  };

  return (
    <div className="flex gap-2">
      <Link
        to={`/habits/edit/${id}`}
        className="grow border py-2 rounded-md border-gray-200 flex items-center justify-evenly"
      >
        <IconEdit size={18} />
        <span>Edit</span>
      </Link>
      <button
        onClick={handleDelete}
        disabled={isDeleteLoading}
        className="grow cursor-pointer bg-red-500 text-white py-2 rounded-md flex items-center justify-evenly"
      >
        <IconTrash size={18} />
        <span className="font-medium">Delete</span>
      </button>
      <Link
        to={`/habits/details/${id}`}
        className="grow border py-2 rounded-md border-gray-200 flex items-center justify-evenly"
      >
        <IconEye size={18} />
        <span>View details</span>
      </Link>
    </div>
  );
}

function CheckInAction({ checkedInToday, id }) {
  const queryClient = useQueryClient();

  const { mutateAsync: checkIn } = useMutation({
    mutationFn: async (id) => {
      await api.post(endpoints.checkins.habitBase(id));
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });

  const handleCheckIn = async () => {
    console.log("Check in");

    try {
      await checkIn(id);
    } catch {
      console.error("Error on check in");
    }
  };

  return (
    <div className="mt-2 flex">
      {checkedInToday ? (
        <button
          disabled
          className="grow py-2 text-lg! bg-gray-100 rounded-lg flex items-center justify-center gap-2"
        >
          <IconCircleDashedCheck />
          Checked in today
        </button>
      ) : (
        <button
          onClick={handleCheckIn}
          className="grow py-2 text-lg cursor-pointer active:translate-y-0.5 active:scale-[0.98] transition bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2"
        >
          <IconCircleDashedPlus />
          Mark today as completed
        </button>
      )}
    </div>
  );
}

function WeeklyProgressBar({ percent }) {
  return (
    <div className="flex items-center gap-2">
      <div className="grow bg-gray-100 rounded-full h-3">
        <div
          className={`bg-blue-600 h-3 rounded-full`}
          style={{
            width: `${percent}%`,
          }}
        ></div>
      </div>
      <p>{percent}%</p>
      <p className="px-4 py-1 rounded-3xl bg-gray-100">Current Week</p>
    </div>
  );
}

function SummaryHeader({ name, description, currentStreak }) {
  return (
    <>
      <div className="flex justify-between">
        <h3 className="text-2xl font-medium">{name}</h3>
        {currentStreak > 0 && (
          <div className="flex items-center gap-2">
            <IconFlame color="blue" />
            <p className="text-2xl text-blue-700">{currentStreak}</p>
          </div>
        )}
      </div>
      <div>
        <p className="opacity-70 pr-12">{description}</p>
      </div>
    </>
  );
}

export default function HabitSummary({
  id,
  name,
  description,
  createdAt,
  checkedInToday,
  currentStreak,
  weeklyCheckins,
}) {
  const weeklyCheckinsPercent = Math.round((weeklyCheckins / 7) * 100);
  return (
    <div className="flex flex-col p-6 border border-gray-100 rounded-md gap-4">
      <SummaryHeader
        name={name}
        description={description}
        currentStreak={currentStreak}
      />
      <WeeklyProgressBar percent={weeklyCheckinsPercent} />
      <CheckInAction checkedInToday={checkedInToday} id={id} />
      <ActionButtons id={id} />
    </div>
  );
}
