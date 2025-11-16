import { Button } from "@mantine/core";
import Section from "./HomeSection";
import SectionHeader from "./SectionHeader";

function SingleStatistics({ number, description }) {
  return (
    <div className="flex flex-col gap-4 flex-1/2 border-l-[3px] pl-8 border-gray-300">
      <h3 className="font-outfit font-bold text-7xl">{number}</h3>
      <p className="font-outfit font-semibold">{description}</p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <Section direction="row">
      <SectionHeader
        center={false}
        preTitle="Insights"
        title="Your habit performance at a glance"
        description="Track your progress with precision. See how your daily efforts
            translate into meaningful personal growth."
      >
        <Button
          component="a"
          href="https://github.com/mantinedev/mantine"
          size="xl"
          variant="default"
          classNames={{
            root: "border-3! font-normal! font-outfit!",
          }}
          className="h-14 px-10! mt-4!"
        >
          View stats
        </Button>
      </SectionHeader>
      <div className="flex-1 flex flex-wrap gap-y-16">
        <SingleStatistics number={87} description="Best streak" />
        <SingleStatistics number={65} description="Current streak" />
        <SingleStatistics number={42} description="Montly check-ins" />
        <SingleStatistics number={95} description="Total habits tracked" />
      </div>
    </Section>
  );
}
