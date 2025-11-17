import { Box, Button, Group } from "@mantine/core";
import logo from "../../assets/logo.png";
import { Link } from "react-router";
import { useAuth } from "../../store/auth-context";
import Container from "../ui/Container";

export default function Header() {
  const { isAuthenticated } = useAuth();

  return (
    <Box className="pb-20">
      <header className="px-4 border-b border-solid border-gray-300">
        <Container className="items-center justify-between">
          <img src={logo} alt="Habit tracker" className="h-10" />
          <Group h="100%" gap={0} visibleFrom="sm">
            <Link
              to="/"
              className="flex items-center h-full px-4 py-6 no-underline text-black font-medium text-sm hover:bg-gray-50"
              href="#"
            >
              Home
            </Link>
            <a
              className="flex items-center h-full px-4 py-6 no-underline text-black font-medium text-sm hover:bg-gray-50"
              href="#"
            >
              Learn
            </a>
            <a
              className="flex items-center h-full px-4 py-6 no-underline text-black font-medium text-sm hover:bg-gray-50"
              href="#"
            >
              Features
            </a>
            <a
              className="flex items-center h-full px-4 py-6 no-underline text-black font-medium text-sm hover:bg-gray-50"
              href="#"
            >
              Academy
            </a>
          </Group>

          <Group visibleFrom="sm">
            {isAuthenticated ? (
              <Button component={Link} to="/logout">
                Logout
              </Button>
            ) : (
              <>
                <Button component={Link} to="/login" variant="default">
                  Sign in
                </Button>
                <Button component={Link} to="/register">
                  Sign up
                </Button>
              </>
            )}
          </Group>
        </Container>
      </header>
    </Box>
  );
}
