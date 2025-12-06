import { Button } from "@mantine/core";
import { Link } from "react-router";

export default function NotFonud() {
  return (
    <div className=" min-h-dvh flex flex-col justify-center items-center font-outfit gap-8">
      <h1 className="text-7xl text-blue-500">404</h1>
      <h1 className="text-8xl">You found a secret place</h1>
      <p className="text-3xl text-center w-[50%]">
        Unfortunately, this is only a 404 page. You may have mistyped the
        address, or the page has been moved to another URL.
      </p>
      <Button
        component={Link}
        to="/dashboard"
        type="submit"
        variant="filled"
        size="lg"
        className="rounded-xl!"
      >
        Take me back to dashboard page
      </Button>
    </div>
  );
}
