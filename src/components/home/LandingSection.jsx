import { Button, Text } from "@mantine/core";
import Section from "./HomeSection";
import habitTrackerImage from "../../assets/habit-tracker.png";
import { Link } from "react-router";

export default function LandingSection() {
  return (
    <Section image={habitTrackerImage}>
      <div className="w-3xl flex flex-col gap-8">
        <h1 className="font-outfit text-6xl/[1.1] font-medium line text-center">
          Build{" "}
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            inherit
          >
            better habits
          </Text>
          {", "}
          transform your life
        </h1>

        <p className="text-xl text-center">
          Track your daily progress and create lasting change. Our habit tracker
          helps you turn small actions into powerful life transformations.
        </p>

        <div className="flex gap-4 justify-center">
          <Button
            component={Link}
            to="/register"
            size="xl"
            className="h-14 px-10!"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
          >
            Get started
          </Button>

          <Button
            component="a"
            href="https://github.com/mantinedev/mantine"
            size="xl"
            variant="default"
            classNames={{
              root: "border-3! font-normal! font-outfit!",
            }}
            className="h-14 px-10!"
          >
            Learn more
          </Button>
        </div>
      </div>
    </Section>
  );
}
