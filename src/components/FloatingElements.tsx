import { useEffect, useState } from "react";
import deepamImg from "@/assets/deepam.png";
import bananaLeafImg from "@/assets/banana-leaf.png";
import brassPlateImg from "@/assets/brass-plate.png";

interface FloatingElement {
  id: number;
  type: "deepam" | "leaf" | "plate";
  x: number;
  y: number;
  delay: number;
  duration: number;
}

interface FloatingElementsProps {
  festiveMode?: boolean;
}

const FloatingElements = ({ festiveMode = false }: FloatingElementsProps) => {
  const [elements, setElements] = useState<FloatingElement[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const elementCount = festiveMode ? 12 : 6;
    const newElements: FloatingElement[] = Array.from({ length: elementCount }, (_, i) => ({
      id: i,
      type: ["deepam", "leaf", "plate"][Math.floor(Math.random() * 3)] as FloatingElement["type"],
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 6 + Math.random() * 4,
    }));
    setElements(newElements);
  }, [festiveMode]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const getImage = (type: FloatingElement["type"]) => {
    switch (type) {
      case "deepam":
        return deepamImg;
      case "leaf":
        return bananaLeafImg;
      case "plate":
        return brassPlateImg;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((element) => (
        <img
          key={element.id}
          src={getImage(element.type)}
          alt={element.type}
          className={`absolute opacity-20 ${
            element.type === "deepam" && festiveMode ? "glow-deepam animate-glow" : ""
          }`}
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: element.type === "deepam" ? "60px" : element.type === "leaf" ? "80px" : "70px",
            animation: `float ${element.duration}s ease-in-out infinite`,
            animationDelay: `${element.delay}s`,
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
