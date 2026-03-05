import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa"
import logoLight from "../assets/Hype&Beyond Logo Horizontal Light Mode.svg"

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-white/10 bg-zinc-900 text-neutral-200 after:block after:h-6 after:bg-zinc-900 after:content-['']">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-8 text-left md:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold">HYPE & BEYOND</h3>
            <div className="mt-3 space-y-1 text-sm">
              <p>E-Mail: info@hypebond.com</p>
              <p>Telefon: +0123/4567899</p>
              <p>Adresse: Steinstrasse 3</p>
            </div>
          </div>

          <div className="text-sm md:ml-auto">
            <p className="mb-3 text-xs tracking-wide text-neutral-400 md:text-right">SOCIAL MEDIA</p>
            <div className="flex items-center gap-3 md:justify-end">
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

        <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-4 text-xs text-neutral-400 md:flex-row md:items-center">
          <img src={logoLight} alt="Hype and Beyond Logo" className="h-6 w-auto" />
          <p>© {new Date().getFullYear()} Hype & Beyond. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
