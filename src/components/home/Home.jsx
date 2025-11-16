import LandingSection from "./LandingSection";
import HowHabitWorks from "./HowHabitWorks";
import Features from "./Features";
import StatsSection from "./StatsSection";
import Container from "../ui/Container";

export default function Home() {
  return (
    <Container className="flex-col justify-center items-center gap-52">
      <LandingSection />
      <HowHabitWorks />
      <Features />
      <StatsSection />
    </Container>
  );
}
