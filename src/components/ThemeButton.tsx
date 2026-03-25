import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@heroui/react";
export default function ThemeButton() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <Button
      variant={`${resolvedTheme ==="dark" ? "ghost" : "primary"}`}
      isIconOnly
      onPress={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="h-12 w-12 ${clayElement} shadow-clay-btn dark:shadow-clay-btn-dark"
    >
      {resolvedTheme === "dark" ? <Sun  /> : <Moon />}
    </Button>
  );
}
