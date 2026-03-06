import { useEffect, useRef } from "react";
import styles from "./CursorGlow.module.css";

/**
 * CursorGlow
 * Renders two layers on top of .bgGrid in HeroSection:
 *  1. A radial-gradient "torch" that reveals the grid lines as the cursor moves
 *  2. A small glowing orb that follows the cursor with a smooth lag
 *
 * Usage: place <CursorGlow /> anywhere inside <section className={styles.hero}>
 */
export default function CursorGlow() {
  const torchRef = useRef(null);
  const orbRef   = useRef(null);

  // Raw mouse position
  const mouse  = useRef({ x: -999, y: -999 });
  // Smoothed position for the lagging orb
  const smooth = useRef({ x: -999, y: -999 });
  const rafId  = useRef(null);

  useEffect(() => {
    const hero = torchRef.current?.closest("section");
    if (!hero) return;

    const onMove = (e) => {
      const rect = hero.getBoundingClientRect();
      mouse.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const onLeave = () => {
      mouse.current  = { x: -999, y: -999 };
      smooth.current = { x: -999, y: -999 };
    };

    hero.addEventListener("mousemove", onMove);
    hero.addEventListener("mouseleave", onLeave);

    const tick = () => {
      // Lerp smooth toward raw
      smooth.current.x += (mouse.current.x - smooth.current.x) * 0.1;
      smooth.current.y += (mouse.current.y - smooth.current.y) * 0.1;

      const { x, y }   = mouse.current;
      const { x: sx, y: sy } = smooth.current;

      // Torch: instant, large, reveals grid
      if (torchRef.current) {
        torchRef.current.style.background = `
          radial-gradient(
            circle 260px at ${x}px ${y}px,
            rgba(65, 38, 178, 0.22) 0%,
            rgba(24, 115, 170, 0.10) 40%,
            transparent 70%
          )
        `;
      }

      // Orb: lagging, small, pure glow dot
      if (orbRef.current) {
        orbRef.current.style.transform = `translate(${sx - 6}px, ${sy - 6}px)`;
        orbRef.current.style.opacity   = x < 0 ? "0" : "1";
      }

      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);

    return () => {
      hero.removeEventListener("mousemove", onMove);
      hero.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      {/* Layer 1 — torch that illuminates grid lines */}
      <div ref={torchRef} className={styles.torch} aria-hidden="true" />
      {/* Layer 2 — tiny lagging orb */}
      <div ref={orbRef}   className={styles.orb}   aria-hidden="true" />
    </>
  );
}