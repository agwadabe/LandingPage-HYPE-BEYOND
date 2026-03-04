const Footer = () => {
  return (
    <footer className="bg-zinc-700 text-neutral-100">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 text-sm md:grid-cols-3">
        <div>
          <h3 className="mb-2 font-semibold">CONTACT DETAILS</h3>
        </div>

        <div>
          <p>E-Mail: info@hypebond.com</p>
          <p>Telefon: +0123/4567899</p>
        </div>

        <div>
          <p>Adresse: Steinstrasse 3</p>
          <p>Social-Media-Links</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


