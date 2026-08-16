"use client";
import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Only show on devices that support hover (non-touch)
    setIsTouch(window.matchMedia("(hover: none)").matches);
  }, []);

  useEffect(() => {
    if (isTouch) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top  = e.clientY + "px";
    };

    const onEnter = () => cursor.classList.add("cursor-hover");
    const onLeave = () => cursor.classList.remove("cursor-hover");

    window.addEventListener("mousemove", onMouseMove);

    const addListeners = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };
    addListeners();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <div ref={cursorRef} className="custom-cursor">
      <span className="cc-corner cc-corner-tl" />
      <span className="cc-corner cc-corner-tr" />
      <span className="cc-corner cc-corner-br" />
      <span className="cc-corner cc-corner-bl" />
      <span className="cc-center" />
    </div>
  );
};

export default CustomCursor;
