import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface FestiveModeToggleProps {
  festiveMode: boolean;
  onToggle: () => void;
}

const FestiveModeToggle = ({ festiveMode, onToggle }: FestiveModeToggleProps) => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        onClick={onToggle}
        size="lg"
        className={`rounded-full shadow-elegant transition-all duration-300 ${
          festiveMode
            ? "bg-gradient-accent text-primary-foreground hover:opacity-90 animate-glow"
            : "bg-card text-foreground hover:bg-muted border-2 border-primary"
        }`}
      >
        <Sparkles className={`mr-2 h-5 w-5 ${festiveMode ? "animate-pulse" : ""}`} />
        {festiveMode ? "Festive Mode ON" : "Festive Mode"}
      </Button>
    </div>
  );
};

export default FestiveModeToggle;
