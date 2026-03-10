import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa"
import logoDark from "../assets/Hype-Beyond Logo Horizontal Dark Mode.svg"

const Footer = () => {
  return (
    <footer className="mt-10 bg-dark text-neutral-200 after:block after:bg-zinc-900 after:content-['']">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-4 text-left md:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold">HYPE & BEYOND</h3>
            <div className="mt-2 space-y-1 text-sm">
              <p>E-Mail: info@hypebond.com</p>
              <p>Telefon: +0123/4567899</p>
              <p>Adresse: Steinstrasse 3</p>
            </div>
          </div>

          <div className="text-sm md:ml-auto">
            <p className="mb-2 text-xs tracking-wide text-neutral-400 md:text-right">SOCIAL MEDIA</p>
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

        <div className="mt-4 flex flex-col items-start justify-between gap-2 border-t border-white/10 pt-3 text-xs text-neutral-400 md:flex-row md:items-center">
          <img src={logoDark} alt="Hype and Beyond Logo" className="h-6 w-auto" />
          <p>© {new Date().getFullYear()} Hype & Beyond. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
