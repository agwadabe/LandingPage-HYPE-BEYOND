import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-white/10 bg-zinc-900 text-neutral-200">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-8 text-left md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold">HYPE & BEYOND</h3>
          </div>

          <div className="space-y-1 text-sm">
            <p>E-Mail: info@hypebond.com</p>
            <p>Telefon: +0123/4567899</p>
            <p>Adresse: Steinstrasse 3</p>
          </div>

          <div className="text-sm">
            <div className="flex items-center gap-3">
              <a
                href="https://tiktok.com/@deinname"
                target="_blank"
                rel="noreferrer"
                className="text-neutral-300 transition hover:text-white"
                aria-label="TikTok"
              >
                <FaTiktok size={18} />
              </a>
              <a
                href="https://instagram.com/deinname"
                target="_blank"
                rel="noreferrer"
                className="text-neutral-300 transition hover:text-white"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://facebook.com/deinname"
                target="_blank"
                rel="noreferrer"
                className="text-neutral-300 transition hover:text-white"
                aria-label="Facebook"
              >
                <FaFacebookF size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} Hype & Beyond. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
