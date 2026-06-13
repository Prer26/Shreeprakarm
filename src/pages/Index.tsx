import { useState } from "react";
import FloatingElements from "@/components/FloatingElements";
import Hero from "@/components/Hero";
import FestiveModeToggle from "@/components/FestiveModeToggle";

const Home = () => {
  const [festiveMode, setFestiveMode] = useState(false);

  return (
    <div className="relative min-h-screen">
      <FloatingElements festiveMode={festiveMode} />

      <main className="relative z-10">
        <Hero />
      </main>

      <FestiveModeToggle
        festiveMode={festiveMode}
        onToggle={() => setFestiveMode(!festiveMode)}
      />
    </div>
  );
};

export default Home;