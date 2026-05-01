"use client";
import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const dotRef  = useRef(null);
  const glowRef = useRef(null);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Only show on devices that support hover (non-touch)
    setIsTouch(window.matchMedia("(hover: none)").matches);
  }, []);

  useEffect(() => {
    if (isTouch) return;

    const dot  = dotRef.current;
    const glow = glowRef.current;
    if (!dot || !glow) return;

    let mouseX = 0, mouseY = 0;
    let glowX  = 0, glowY  = 0;
    let rafId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + "px";
      dot.style.top  = mouseY + "px";
    };

    const animate = () => {
      glowX += (mouseX - glowX) * 0.1;
      glowY += (mouseY - glowY) * 0.1;
      glow.style.left = glowX + "px";
      glow.style.top  = glowY + "px";
      rafId = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      dot.classList.add("cursor-hover");
      glow.classList.add("cursor-hover");
    };
    const onLeave = () => {
      dot.classList.remove("cursor-hover");
      glow.classList.remove("cursor-hover");
    };

    window.addEventListener("mousemove", onMouseMove);
    rafId = requestAnimationFrame(animate);

    const addListeners = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };
    addListeners();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <>
      <div ref={dotRef}  className="custom-cursor-dot" />
      <div ref={glowRef} className="custom-cursor-glow" />
    </>
  );
};

export default CustomCursor;
