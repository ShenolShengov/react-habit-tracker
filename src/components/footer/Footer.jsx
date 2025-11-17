import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { ActionIcon, Group } from "@mantine/core";
import logo from "../assets/logo.png";
import Container from "./ui/Container";

export default function Footer() {
  return (
    <div className="mt-32 border-t border-solid border-gray-300 ">
      <Container className="justify-between items-center py-8 @max-xs:flex-col">
        <img src={logo} alt="Habit tracker" className="h-10" />

        <Group
          gap={0}
          className="@max-xs:mt-4"
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
