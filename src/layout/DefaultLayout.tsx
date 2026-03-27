import { Outlet, Link } from "react-router-dom";
import ThemeButton from "../components/ThemeButton";
import { Home } from "lucide-react";
export default function DefaultLayout() {
  return (
    <div className="min-h-screen bg-blue-100 dark:bg-black pt-2 flex flex-col">
      <div className="w-full p-4 flex justify-between">
        <Link
          className="shadow-clay-btn dark:shadow-clay-btn-dark w-12 flex justify-center items-center rounded-full"
          to="/"
        >
          <Home />
        </Link>
        <ThemeButton />
      </div>
      <Outlet />
    </div>
  );
}
