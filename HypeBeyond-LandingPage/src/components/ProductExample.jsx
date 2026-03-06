import React, { useEffect, useRef, useState } from "react";
import styles from "./ProductExample.module.css";

// ── Card data ─────────────────────────────────────────────────────────────

const cards = [
  {
    id: "social",
    tag: "Social Media",
    tagColor: "#4126b2",
    title: "Organisches Wachstum & Content",
    desc: "Wir bauen deine Präsenz auf – mit Inhalten, die bleiben. Strategie, Produktion und Community in einem.",
    features: [
      "Content-Strategie & Redaktionsplanung",
      "Reels, Stories & Carousels",
      "Community Management",
    ],
    ctaBorder: "rgba(65,38,178,0.4)",
    glowColor: "rgba(65,38,178,0.18)",
    delay: "0.1s",
  },
  {
    id: "brand",
    tag: "Branding",
    tagColor: "#1873aa",
    title: "Markenidentität & Design",
    desc: "Eine Marke ist mehr als ein Logo. Wir entwickeln visuelle Systeme, die sofort erkennbar sind.",
    features: [
      "Logo & Corporate Design",
      "Typografie & Farbwelten",
      "Brand Guidelines",
    ],
    ctaBorder: "rgba(24,115,170,0.4)",
    glowColor: "rgba(24,115,170,0.18)",
    delay: "0.25s",
  },
  {
    id: "ads",
    tag: "Performance",
    tagColor: "#0dcfe4",
    title: "Paid Ads & Performance",
    desc: "Werbung, die sich rechnet. Wir skalieren dein Budget mit datengetriebenen Kampagnen auf Meta & Google.",
    features: [
      "Meta & Google Ads",
      "Creatives & A/B-Testing",
      "ROAS-Optimierung",
    ],
    ctaBorder: "rgba(13,207,228,0.35)",
    glowColor: "rgba(13,207,228,0.15)",
    delay: "0.4s",
  },
];

// ── Mockup sub-components ─────────────────────────────────────────────────

function SocialMockup() {
  const posts = [
    {
      avatarColor: "linear-gradient(135deg,#4126b2,#1873aa)",
      lines: ["Long", "Short", "Accent"],
      engColor: "#4126b2",
    },
    {
      avatarColor: "linear-gradient(135deg,#1873aa,#0dcfe4)",
      lines: ["Medium", "Long", "Accent"],
      engColor: "#1873aa",
    },
  ];

  return (
    <div style={{ position: "relative", height: "100%" }}>
      <div className={`${styles.mockupBg} ${styles.mockupSocialBg}`} />
      <div className={styles.mockupScanline} />
      <div className={styles.mockFeed}>
        {posts.map((post, i) => (
          <div className={styles.mockPost} key={i}>
            <div
              className={styles.mockPostAvatar}
              style={{ background: post.avatarColor }}
            />
            <div className={styles.mockPostLines}>
              {post.lines.map((l, j) => (
                <div key={j} className={styles[`mockLine${l}`]} />
              ))}
              <div className={styles.mockEngagement}>
                {["♥ 2.4k", "↗ 891", "✦ 204"].map((e, k) => (
                  <div className={styles.mockEngItem} key={k}>
                    <div
                      className={styles.mockEngDot}
                      style={{ background: post.engColor, opacity: 0.6 }}
                    />
                    {e}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BrandMockup() {
  const swatches = [
    "linear-gradient(135deg,#4126b2,#2d1e5d)",
    "linear-gradient(135deg,#1873aa,#1b537b)",
    "#0dcfe4",
    "#faf8ff",
    "#130d28",
  ];

  return (
    <div style={{ position: "relative", height: "100%" }}>
      <div className={`${styles.mockupBg} ${styles.mockupBrandBg}`} />
      <div className={styles.mockupScanline} />
      <div className={styles.mockBrandCenter}>
        <div className={styles.mockLogoFrame}>
          <div className={styles.mockLogoRingOuter} />
          <div className={styles.mockLogoRingInner} />
          <div className={styles.mockLogoMark}>H</div>
        </div>
      </div>
      <div className={styles.mockBrandSwatches}>
        {swatches.map((bg, i) => (
          <div key={i} className={styles.mockSwatch} style={{ background: bg }} />
        ))}
      </div>
      <div className={styles.mockBrandTypo}>
        {[60, 42, 28].map((w, i) => (
          <div key={i} className={styles.mockTypoLine} style={{ width: w }} />
        ))}
      </div>
    </div>
  );
}

function AdsMockup() {
  const adRows = [
    { thumb: "linear-gradient(135deg,#4126b2,#1873aa)", metric: "+148%" },
    { thumb: "linear-gradient(135deg,#0dcfe4,#1873aa)", metric: "+92%" },
  ];

  return (
    <div style={{ position: "relative", height: "100%" }}>
      <div className={`${styles.mockupBg} ${styles.mockupAdsBg}`} />
      <div className={styles.mockupScanline} />
      <div className={styles.mockAdMetric}>
        <div className={styles.mockAdMetricNum}>3.2×</div>
        <div className={styles.mockAdMetricLabel}>ROAS</div>
      </div>
      <div className={styles.mockAdsFrame}>
        <div className={styles.mockAdsTopbar}>
          {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
            <div key={i} className={styles.mockAdsDot} style={{ background: c }} />
          ))}
          <div className={styles.mockAdsUrl} />
        </div>
        <div className={styles.mockAdsBody}>
          {adRows.map((ad, i) => (
            <div className={styles.mockAdCard} key={i}>
              <div
                className={styles.mockAdThumb}
                style={{ background: ad.thumb }}
              />
              <div className={styles.mockAdInfo}>
                <div className={styles.mockLineMedium} style={{ height: 5 }} />
                <div className={styles.mockLineShort} style={{ height: 4 }} />
              </div>
              <div
                style={{
                  fontFamily: "Funnel Display, sans-serif",
                  fontSize: 12,
                  fontWeight: 700,
                  background: "linear-gradient(135deg,#0dcfe4,#1873aa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  flexShrink: 0,
                }}
              >
                {ad.metric}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const mockupMap = {
  social: SocialMockup,
  brand: BrandMockup,
  ads: AdsMockup,
};

// ── Main component ─────────────────────────────────────────────────────────

export default function ProductExample() {
  const [visible, setVisible] = useState({});
  const cardRefs = useRef([]);

  useEffect(() => {
    const observers = cardRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((prev) => ({ ...prev, [i]: true }));
            obs.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  return (
    <section className={styles.section} id="ProductExample" aria-label="Leistungen">

      {/* Background */}
      <div className={styles.gridLine} />
      <div className={styles.orbLeft} />
      <div className={styles.orbRight} />

      {/* Header */}
      <div className={styles.header}>
        <div className={styles.pill}>
          <span className={styles.pillDot} />
          <span className={styles.pillText}>Was wir tun</span>
        </div>
        <h2 className={styles.title}>
          Leistungen, die{" "}
          <span className={styles.titleAccent}>wirken.</span>
        </h2>
        <p className={styles.subtitle}>
          Von der Idee bis zur Skalierung – wir übernehmen das, was deine Marke
          wirklich voranbringt.
        </p>
      </div>

      {/* Cards */}
      <div className={styles.grid}>
        {cards.map((card, i) => {
          const MockupComponent = mockupMap[card.id];
          return (
            <div
              key={card.id}
              className={`${styles.card}${visible[i] ? ` ${styles.visible}` : ""}`}
              ref={(el) => (cardRefs.current[i] = el)}
              style={{ animationDelay: card.delay }}
            >
              {/* Glow */}
              <div
                className={styles.cardGlow}
                style={{
                  background: `radial-gradient(ellipse at 50% 0%, ${card.glowColor} 0%, transparent 70%)`,
                }}
              />

              {/* Mockup */}
              <div className={styles.mockup}>
                <MockupComponent />
              </div>

              {/* Body */}
              <div className={styles.cardBody}>
                <div className={styles.cardTag} style={{ color: card.tagColor }}>
                  <span
                    className={styles.cardTagDot}
                    style={{
                      background: card.tagColor,
                      boxShadow: `0 0 6px ${card.tagColor}`,
                    }}
                  />
                  {card.tag}
                </div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDesc}>{card.desc}</p>
                <div className={styles.cardFeatures}>
                  {card.features.map((f, j) => (
                    <div className={styles.cardFeature} key={j}>
                      <div
                        className={styles.cardFeatureIcon}
                        style={{
                          background: `${card.tagColor}22`,
                          color: card.tagColor,
                        }}
                      >
                        ✓
                      </div>
                      {f}
                    </div>
                  ))}
                </div>
                <a
                  href="#UserInputs"
                  className={styles.cardCta}
                  style={{ color: card.tagColor, borderColor: card.ctaBorder }}
                >
                  Mehr erfahren
                  <span className={styles.ctaArrow}>→</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Divider */}
      <div className={styles.divider}>
        <div className={styles.dividerLine} />
        <span className={styles.dividerText}>Alles aus einer Hand</span>
        <div className={styles.dividerLine} />
      </div>
    </section>
  );
}