import Section from "./HomeSection";
import stepsImage from "../../assets/how-it-works.png";
import SectionHeader from "./SectionHeader";

function Step({ name, description, ...prors }) {
  return (
    <div className="flex flex-col items-center gap-2 flex-1" {...prors}>
      <h3 className="font-outfit font-normal text-2xl">{name}</h3>
      <p className="w-[70%] text-center">{description}</p>
    </div>
  );
}

export default function HowHabitWorks() {
  return (
    <Section image={stepsImage}>
      <SectionHeader
        preTitle="Simple"
        title="How our habit tracker works"
        description="Tracking habits is easy and intuitive. Follow three simple steps to
              personal growth."
      />
      <div className="w-full flex">
        <Step
          name="Create habit"
          description="Define your goals and select habits you want to build or break."
        />
        <Step
          name="Track progress"
          description="Log daily check-ins and monitor your consistency with real-time tracking."
        />
        <Step
          name="Analyze results"
          description="Review your stats, celebrate streaks, and understand your personal growth journey."
        />
      </div>
    </Section>
  );
}
