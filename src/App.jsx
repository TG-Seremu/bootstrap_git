import { useState } from "react";
import Navbar from "./Components/Navbar";
import FeaturesGrid from "./Components/FeaturesGrid";

function App() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  return (
    <div className={`${theme} min-h-screen text-slate-900 dark:bg-background dark:text-white`}>
      <Navbar open={open} setOpen={setOpen} theme={theme} setTheme={setTheme} />
      <FeaturesGrid />
    </div>
  );
}

export default App;