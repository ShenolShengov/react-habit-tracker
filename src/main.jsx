import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MantineProvider } from "@mantine/core";
import { AuthProvider } from "./store/auth-context.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <MantineProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </MantineProvider>
  </QueryClientProvider>
);
