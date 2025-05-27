"use client";
import { useState } from "react";

export default function MouseHighlight({
  children,
}: {
  children: React.ReactNode;
}) {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  return (
    <div
      onMouseMove={(e) => {
        const { clientX, clientY } = e;
        setPos({ x: clientX, y: clientY });
      }}
      onMouseLeave={() => setPos({ x: -100, y: -100 })}
      className="relative"
    >
      <div
        className="pointer-events-none fixed z-50 transition-all duration-50 ease-out"
        style={{
          top: pos.y - 50,
          left: pos.x - 50,
          width: 120,
          height: 120,
          background: "rgba(115, 59, 201, 0.4)", // violet plus visible
          borderRadius: "50%",
          pointerEvents: "none",
          mixBlendMode: "screen",
          filter: "blur(10px)",
        }}
      />
      {children}
    </div>
  );
}
