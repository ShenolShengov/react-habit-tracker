import { Calendar } from "@mantine/dates";
import dayjs from "dayjs";

export default function CheckInsHistory({ chekcIns }) {
  const markCheckins = (date) => {
    if (!chekcIns.includes(date)) {
      return {};
    }
    return {
      className:
        "bg-green-400! w-full h-full flex justify-center items-center text-white! rounded-lg",
    };
  };

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-3xl font-semibold">Check-in history</h2>
      <div className="flex justify-center w-full">
        <Calendar
          size="xl"
          getDayProps={markCheckins}
          onNextMonth={(d) => console.log(d)}
          defaultDate={dayjs().toString()}
          minDate={dayjs().startOf('year').toString()}
          numberOfColumns={2}
          hideOutsideDates
        />
      </div>
    </div>
  );
}
