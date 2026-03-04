import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa"

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
          <p>Adresse: Steinstrasse 3</p>
          <div className="mt-3 flex gap-3">
            <a href="https://tiktok.com/@deinname" target="_blank" rel="noreferrer" className="hover:text-pink-300">
              <FaTiktok size={20} />
            </a>
            <a href="https://instagram.com/deinname" target="_blank" rel="noreferrer" className="hover:text-pink-300">
              <FaInstagram size={20} />
            </a>
            <a href="https://facebook.com/deinname" target="_blank" rel="noreferrer" className="hover:text-pink-300">
              <FaFacebookF size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
