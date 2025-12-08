import { BarChart } from "@mantine/charts";
import dayjs from "dayjs";

export default function MonthsCheckIns({ checkIns }) {
  const yearInfo = () => {
    const yearStats = [...checkIns].reduce((acc, c) => {
      const month = dayjs(c).format("MMM");
      acc[month] = acc[month] ?? 0 + 1;
      return acc;
    }, {});

    return Object.entries(yearStats).map(([month, checkIns]) => {
      return { month, ["Check ins"]: checkIns };
    });
  };

  return (
    <div className="flex flex-col justify-between gap-8">
      <h2 className="text-3xl font-semibold">Check-ins by months</h2>
      <div className="flex justify-start w-full">
        <BarChart
          h={300}
          data={yearInfo()}
          dataKey="month"
          series={[{ name: "Check ins", color: "blue.6" }]}
          tickLine="y"
        />
      </div>
    </div>
  );
}
