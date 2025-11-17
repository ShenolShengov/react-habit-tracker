import { BrowserRouter, Route } from "react-router";
import Home from "./components/home/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Route index element={<Home />} />
    </BrowserRouter>
  );
}
