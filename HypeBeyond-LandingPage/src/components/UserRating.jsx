import React, { useEffect, useRef, useState } from "react";
import styles from "./UserRating.module.css";

// ── Testimonial data ─────────────────────────────────────────────────────
const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "Die Zusammenarbeit war außergewöhnlich. Unsere Social Media Präsenz hat sich innerhalb von 3 Monaten verdreifacht.",
    author: "Sarah Weber",
    company: "AciloCompany",
    role: "Marketing Director",
    highlight: "+280% Reichweite",
  },
  {
    id: 2,
    rating: 5,
    text: "Professionell, schnell und mit einem Auge fürs Detail. Das neue Branding hat unsere Conversion um 45% gesteigert.",
    author: "Michael Soysal",
    company: "SoysalGmbH",
    role: "Geschäftsführer",
    highlight: "45% mehr Sales",
  },
  {
    id: 3,
    rating: 5,
    text: "Die Performance-Kampagnen laufen besser als erwartet. ROI von 4.2x in nur 2 Monaten – absolut empfehlenswert!",
    author: "Abdul Rahman",
    company: "TechVentures",
    role: "Head of Growth",
    highlight: "4.2× ROAS",
  },
];

// ── Sub-components ────────────────────────────────────────────────────

function Background() {
  return (
    <>
      <div className={styles.bgGrid} />
      <div className={styles.bgOrb1} />
      <div className={styles.bgOrb2} />
      <div className={styles.bgNoise} />
    </>
  );
}

function SectionHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.pill}>
        <span className={styles.pillDot} />
        <span className={styles.pillText}>Kundenstimmen</span>
      </div>
      <h2 className={styles.title}>
        Was unsere <span className={styles.titleAccent}>Partner</span> sagen
      </h2>
      <p className={styles.subtitle}>
        Über 120+ erfolgreiche Projekte sprechen für sich – 
        aber lassen wir unsere Kunden zu Wort kommen.
      </p>
    </div>
  );
}

function RatingStars({ rating }) {
  return (
    <div className={styles.rating}>
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`${styles.star} ${i < rating ? styles.starFilled : ""}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`${styles.card} ${isVisible ? styles.cardVisible : ""}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className={styles.cardGlow} />
      <div className={styles.cardInner}>
        {/* Highlight Badge */}
        <div className={styles.cardHighlight}>
          <span className={styles.highlightIcon}>⚡</span>
          {testimonial.highlight}
        </div>

        {/* Rating */}
        <RatingStars rating={testimonial.rating} />

        {/* Quote */}
        <div className={styles.cardQuote}>
          <span className={styles.quoteMarkLeft}>"</span>
          <p className={styles.cardText}>{testimonial.text}</p>
          <span className={styles.quoteMarkRight}>"</span>
        </div>

        {/* Author */}
        <div className={styles.cardAuthor}>
          <div className={styles.authorAvatar}>
            <div className={styles.avatarGradient} />
            <span className={styles.avatarInitial}>
              {testimonial.author.charAt(0)}
            </span>
          </div>
          <div className={styles.authorInfo}>
            <div className={styles.authorName}>{testimonial.author}</div>
            <div className={styles.authorDetails}>
              {testimonial.role} • {testimonial.company}
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className={styles.cardCorner} />
      </div>
    </div>
  );
}

function TrustBadges() {
  const badges = [
    { label: "120+", desc: "Projekte" },
    { label: "98%", desc: "Zufriedenheit" },
    { label: "4.9", desc: "Bewertung" },
  ];

  return (
    <div className={styles.badges}>
      {badges.map((badge, i) => (
        <div key={i} className={styles.badge}>
          <div className={styles.badgeNumber}>{badge.label}</div>
          <div className={styles.badgeLabel}>{badge.desc}</div>
        </div>
      ))}
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────

export default function UserRating() {
  return (
    <section className={styles.section} id="testimonials" aria-label="Kundenbewertungen">
      <Background />
      
      <div className={styles.container}>
        <SectionHeader />
        
        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        <TrustBadges />
      </div>
    </section>
  );
}
