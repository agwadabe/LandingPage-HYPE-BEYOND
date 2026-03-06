// Claude-Muster

import React from "react";

import styles from './HeroSection.module.css';
import logoDarkVertical from "../assets/Hype&Beyond Logo Dark Mode.svg";

// ── Sub-components ────────────────────────────────────────────────

function Background() {
  return (
    <>
      <div className={styles.bgGrid} />
      <div className={`${styles.bgOrb} ${styles.bgOrb1}`} />
      <div className={`${styles.bgOrb} ${styles.bgOrb2}`} />
      <div className={`${styles.bgOrb} ${styles.bgOrb3}`} />
      <div className={styles.noise} />
    </>
  );
}

function DecorativeShapes() {
  return (
    <>
      <div className={`${styles.deco} ${styles.decoRingOuter}`} />
      <div className={`${styles.deco} ${styles.decoRingInner}`} />
      <div className={`${styles.deco} ${styles.decoRingBl}`} />
      <div className={`${styles.deco} ${styles.decoDiamond}`} />
      <div className={`${styles.deco} ${styles.decoCross}`} />
      <div className={`${styles.deco} ${styles.decoDots}`}>
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className={styles.decoDot} />
        ))}
      </div>
      <div className={`${styles.deco} ${styles.decoLine}`} />
    </>
  );
}


function LabelPill() {
  return (
    <div className={styles.labelPill}>
      <span className={styles.labelDot} />
      <span className={styles.labelText}>Wir verwandeln Marken in Kulturen</span>
    </div>
  );
}

function Headline() {
  return (
    <h1 className={styles.headline}>
      Sei sichtbar{' '}
            <br />
      <div className={styles.headlineDiv}>
      <span className={styles.headlineLight}>vor allen </span>

      <span className={styles.headlineAccent}>anderen.</span>
      </div>
    </h1>
  );
}

function CtaGroup() {
  return (
    <div className={styles.ctaGroup}>
      <a href="#kontakt" className={styles.btnPrimary}>
        Kostenloses Erstgespräch sichern
        <span className={styles.btnArrow}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </a>
      <a href="#leistungen" className={styles.btnGhost}>
        Unsere Leistungen →
      </a>
    </div>
  );
}

function Stats() {
  const items = [
    { num: '120+', label: 'Projekte' },
    { num: '98%',  label: 'Zufriedenheit' },
    { num: '3× ROI', label: 'Ø Ergebnis' },
  ];

  return (
    <div className={styles.heroStats}>
      {items.map((item, i) => (
        <>
          <div key={item.label} className={styles.stat}>
            <span className={styles.statNum}>{item.num}</span>
            <span className={styles.statLabel}>{item.label}</span>
          </div>
          {i < items.length - 1 && (
            <div key={`divider-${i}`} className={styles.statDivider} />
          )}
        </>
      ))}
    </div>
  );
}

function ScrollHint() {
  return (
    <div className={styles.scrollHint}>
      <div className={styles.scrollIcon}>
        <div className={styles.scrollDot} />
      </div>
      scroll
    </div>
  );
}

function HeroBottom() {
  return (
    <div className={styles.heroBottom}>
      <Stats />
      <ScrollHint />
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────

export default function HeroSection() {
  return (
    <section className={styles.hero} aria-label="Hero">
      <Background />
      <DecorativeShapes />
      <div className={styles.heroContent}>
        <LabelPill />
        <img src={logoDarkVertical} alt="Hype & Beyond Logo" className={styles.logo} />
        <div className={styles.shimmerLine} />
        <Headline />
        <CtaGroup />
      </div>

      <HeroBottom />
    </section>
  );
}