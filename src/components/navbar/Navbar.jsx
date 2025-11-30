import { IconGauge, IconLogout, IconPlus } from "@tabler/icons-react";
import { Center, Stack, Tooltip } from "@mantine/core";
import logoMini from "../../assets/logo-mini.png";
import { NavLink } from "react-router";

function NavbarLink({ Icon, label, path, ...props }) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <NavLink
        {...props}
        to={path}
        className={({ isActive }) => {
          return `w-[50px] h-[50px] rounded-lg flex justify-center items-center ${
            isActive
              ? " text-blue-600 bg-blue-100"
              : "text-gray-700 hover:bg-gray-50"
          }`;
        }}
      >
        <Icon size={20} stroke={1.5} />
      </NavLink>
    </Tooltip>
  );
}

const links = [
  { Icon: IconGauge, label: "Dashboard", path: "/dashboard" },
  { Icon: IconPlus, label: "Add habit", path: "/habits/create" },
];

export default function Navbar() {
  return (
    <nav className="w-20 fixed top-0 h-screen self-stretch p-4 flex flex-col border-r border-solid border-gray-300">
      <Center>
        <img src={logoMini} alt="" />
      </Center>

      <div className="flex-1 mt-[50px]">
        <Stack justify="center" gap={0}>
          {links.map((link) => {
            return <NavbarLink {...link} key={link.label} />;
          })}
        </Stack>
      </div>

      <Stack justify="center" gap={0}>
        <NavbarLink Icon={IconLogout} label="Logout" path="/logout" />
      </Stack>
    </nav>
  );
}
