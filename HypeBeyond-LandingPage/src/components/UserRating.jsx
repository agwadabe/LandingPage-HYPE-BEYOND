import ScrollAnimation from "./ScrollAnimation.jsx"

const UserRating = () => {
  return (
    <ScrollAnimation>
    <section id="UserRating" className="mx-auto w-full max-w-6xl px-6 py-16 text-center">
      <h2 className="mb-10 text-3xl font-semibold">WAS UNSERE PARTNER SAGEN</h2>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-left">
          <p className="text-lg text-yellow-400">★★★★★</p>
          <p className="mt-3 text-sm text-neutral-200">Sehr gute Zusammenarbeit und starke Ergebnisse.</p>
          <p className="mt-4 text-sm font-semibold text-white">AciloCompany</p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-left">
          <p className="text-lg text-yellow-400">★★★★★</p>
          <p className="mt-3 text-sm text-neutral-200">Professionell, schnell und zuverlässig.</p>
          <p className="mt-4 text-sm font-semibold text-white">SoysalGmbh</p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-left">
          <p className="text-lg text-yellow-400">★★★★★</p>
          <p className="mt-3 text-sm text-neutral-200">Unsere Projekte laufen jetzt deutlich effizienter.</p>
          <p className="mt-4 text-sm font-semibold text-white">AbdulFirma</p>
        </div>
      </div>
    </section>
    </ScrollAnimation>
  )
}

export default UserRating
