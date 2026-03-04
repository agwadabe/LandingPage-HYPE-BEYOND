const UserRating = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="mb-10 text-3xl font-semibold">WAS UNSERE PARTNER SAGEN</h2>

      <div className="flex justify-center gap-12">
        <div>
          <p className="text-xl text-yellow-400">★★★★★</p>
          <p className="mt-2">Sehr gute Zusammenarbeit und starke Ergebnisse.</p>
          <p className="mt-3 font-semibold">AciloCompany</p>
        </div>

        <div>
          <p className="text-xl text-yellow-400">★★★★★</p>
          <p className="mt-2">Professionell, schnell und zuverlässig.</p>
          <p className="mt-3 font-semibold">SoysalGmbh</p>
        </div>

        <div>
          <p className="text-xl text-yellow-400">★★★★★</p>
          <p className="mt-2">Unsere Projekte laufen jetzt deutlich effizienter.</p>
          <p className="mt-3 font-semibold">AbdulFirma</p>
        </div>
      </div>
    </section>
  )
}

export default UserRating
