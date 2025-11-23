import { IconEdit, IconEye, IconFlame, IconTrash } from "@tabler/icons-react";
import { Link } from "react-router";

export default function HabitSummary({
  id,
  name,
  description,
  createdAt,
  checkedInToday,
  currentStreak,
}) {
  return (
    <div className="flex flex-col p-6 border border-gray-100 rounded-md gap-4">
      <div className="flex justify-between">
        <h3 className="text-2xl font-medium">{name}</h3>
        <div className="flex items-center gap-2">
          <IconFlame color="blue" />
          <p className="text-2xl text-blue-700">{currentStreak}</p>
        </div>
      </div>
      <div>
        <p className="opacity-70 pr-12">
          {description}
          {/* Go for a brisk 30-minute run every morning to boost your energy and
          improve cardiovascular health. Remember to stretch before and after! */}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <div className="grow bg-gray-100 rounded-full h-3">
          <div className="bg-blue-600 w-[85%] h-3 rounded-full"></div>
        </div>
        <p>85%</p>
        <p className="px-4 py-1 rounded-3xl bg-gray-100">Current Week</p>
      </div>
      <div className="mt-2 flex">
        {checkedInToday ? (
          <button className="grow py-2 text-lg! bg-gray-100 rounded-lg">
            Checked in today
          </button>
        ) : (
          <button className="grow py-2 text-lg! bg-blue-600 text-white rounded-lg">
            Mark today as completed
          </button>
        )}
      </div>
      <div className="flex gap-2">
        <Link
          to={`/habits/edit/${id}`}
          className="grow border py-2 rounded-md border-gray-200 flex items-center justify-evenly"
        >
          <IconEdit size={18} />
          <span>Edit</span>
        </Link>
        <Link
          to={`/habits/edit/${id}`}
          className="grow bg-red-500 text-white py-2 rounded-md flex items-center justify-evenly"
        >
          <IconTrash size={18} />
          <span className="font-medium">Delete</span>
        </Link>
        <Link
          to={`/habits/edit/${id}`}
          className="grow border py-2 rounded-md border-gray-200 flex items-center justify-evenly"
        >
          <IconEye size={18} />
          <span>View details</span>
        </Link>
      </div>
    </div>
  );
}
