import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Home from "./pages/Home";
import Quiz from "./components/Quiz";
import DefaultLayout from "./layout/DefaultLayout";
export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
