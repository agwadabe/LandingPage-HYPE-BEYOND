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
          <p>Adresse: Steinstrasse 3</p>
        </div>

        <div>
          <div className="mt-3 flex gap-3">
            <a href="https://tiktok.com/@deinname" target="_blank" rel="noreferrer" className="hover:text-pink-300">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.238V2h-3.197v12.138a2.727 2.727 0 1 1-1.864-2.588V8.307a5.97 5.97 0 1 0 5.061 5.9V8.108a7.96 7.96 0 0 0 4.77 1.597V6.686Z" />
              </svg>
            </a>
            <a href="https://instagram.com/deinname" target="_blank" rel="noreferrer" className="hover:text-pink-300">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm8.5 1.8h-8.5A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95Zm-4.25 2.7a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 1.8a3.7 3.7 0 1 0 0 7.4 3.7 3.7 0 0 0 0-7.4Zm5.65-2.1a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
              </svg>
            </a>
            <a href="https://facebook.com/deinname" target="_blank" rel="noreferrer" className="hover:text-pink-300">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5h1.7V4.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V11H8v3h2.4v8h3.1Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
