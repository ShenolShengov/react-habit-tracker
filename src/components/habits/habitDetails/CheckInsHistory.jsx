import { Calendar } from "@mantine/dates";

export default function CheckInsHistory({ chekcIns }) {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-3xl font-semibold">Check-in history</h2>
      <div className="flex justify-center w-full">
        <Calendar
          size="xl"
          onNextMonth={(d) => console.log(d)}
          minDate="2025-01-01"
          numberOfColumns={2}
          hideOutsideDates
        />
      </div>
    </div>
  );
}
