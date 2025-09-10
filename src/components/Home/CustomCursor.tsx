import React, { useEffect, useRef } from "react";

const CustomCursor: React.FC = () => {
  const cursor = useRef<HTMLDivElement>(null);
  const follower = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursor.current && follower.current) {
        cursor.current.style.left = `${e.clientX}px`;
        cursor.current.style.top = `${e.clientY}px`;
        follower.current.style.left = `${e.clientX - 10}px`;
        follower.current.style.top = `${e.clientY - 10}px`;
      }
    };
    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <div className="custom-cursor" ref={cursor}></div>
      <div className="cursor-follower" ref={follower}></div>
    </>
  );
};

export default CustomCursor;
