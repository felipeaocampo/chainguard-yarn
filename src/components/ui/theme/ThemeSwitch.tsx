import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      {/* <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      <option value="system">System</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select> */}
      <div>
        <button onClick={() => setTheme("light")}>Set Light</button>
      </div>
      <div>
        <button onClick={() => setTheme("dark")}>Set Dark</button>
      </div>
      <div>
        <button onClick={() => setTheme("system")}>Set System</button>
      </div>
    </div>
  );
};

export default ThemeSwitch;
