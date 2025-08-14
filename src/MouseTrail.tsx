import { useEffect, useState } from "react";

interface Dot {
  x: number;
  y: number;
  id: number;
}

export default function MouseTrail() {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newDot: Dot = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now()
      };

      setDots((prev) => [...prev, newDot]);

      setTimeout(() => {
        setDots((prev) => prev.filter((dot) => dot.id !== newDot.id));
      }, 1500);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div style={{ pointerEvents: "none", position: "fixed", inset: 0, zIndex: 9999 }}>
      {dots.map((dot) => (
        <span
          key={dot.id}
          style={{
            position: "absolute",
            left: dot.x - 10,
            top: dot.y - 10,
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,60,127,0.25) 0%, rgba(245,60,127,0.02) 70%)",
            animation: "fadeOut 1.5s forwards"
          }}
        />
      ))}
      <style>
        {`
          @keyframes fadeOut {
            0% { opacity: 0.3; transform: scale(1); }
            100% { opacity: 0; transform: scale(2); }
          }
        `}
      </style>
    </div>
  );
}
