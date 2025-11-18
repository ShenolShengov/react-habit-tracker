import {
  IconCalendarPlus,
  IconCheck,
  IconDeviceDesktopAnalytics,
} from "@tabler/icons-react";
import Section from "./HomeSection";
import SectionHeader from "./SectionHeader";
import { Button } from "@mantine/core";

function Feature({ title, description, IconType }) {
  return (
    <div className="flex flex-col flex-1 gap-8 justify-center items-center">
      <IconType size={64} />
      <h2 className="font-medium font-outfit text-4xl">{title}</h2>
      <p className="w-[65%] text-center">{description}</p>
    </div>
  );
}

export default function Features() {
  return (
    <Section>
      <SectionHeader
        preTitle="Powerful"
        title="Features designed for your success"
        description="Our comprehensive toolkit helps you build and maintain meaningful habits."
      />
      <div className="w-full flex">
        <Feature
          title="Habit creation"
          description="Customize and track personal and professional habits with
                precision."
          IconType={IconCalendarPlus}
        />
        <Feature
          title="Daily check-ins"
          description="Record your progress and stay accountable every single day."
          IconType={IconCheck}
        />
        <Feature
          title="Advanced stats"
          description="Gain insights into your performance with detailed analytics and visualizations."
          IconType={IconDeviceDesktopAnalytics}
        />
      </div>
      <Button
        component={Link} to="/login"
        size="xl"
        variant="default"
        classNames={{
          root: "border-3! font-normal! font-outfit!",
        }}
        className="h-14 px-10!"
      >
        Explore features
      </Button>
    </Section>
  );
}
