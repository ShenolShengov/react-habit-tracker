import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MantineProvider } from "@mantine/core";
import { AuthProvider } from "./store/auth-context.jsx";

createRoot(document.getElementById("root")).render(
  <MantineProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </MantineProvider>
);
