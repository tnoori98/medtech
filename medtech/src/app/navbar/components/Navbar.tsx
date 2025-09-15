import { useState } from "react"
import { Menu, X } from "lucide-react";
import { NavMenu } from "./NavMenu";
import { useTranslations } from "next-intl";

const Navbar = () => {
const t = useTranslations("vision")
const tNav = useTranslations("navbar")
const [isMobile, setIsMobile] = useState(false)

  return(
  <header className="fixed inset-x-0 top-0 z-50 w-full 
                   bg-black/100 
                   border-b border-white/10">
    <div className="mx-auto spacing max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
            <a href="/" className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent hover:opacity-80 transition">
                MedTechTrust
            </a>
             <button
                onClick={() => setIsMobile(!isMobile)}
                className="flex sm:hidden text-neutral-400 hover:text-white focus:outline-none"
                aria-label={isMobile ? "Close menu" : "Open menu"}
            >
                {isMobile ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <nav className="hidden sm:flex" aria-label="Main navigation">
                <NavMenu />
            </nav>
        </div>
    </div>
    {isMobile && (
  <div className="sm:hidden bg-black/80 backdrop-blur-md border-t border-white/10">
    <nav className="flex flex-col items-center gap-4 py-4">
      <a href="#products" className="text-white text-lg hover:text-emerald-400">{tNav("title")}</a>
      <a href="#vision" className="text-white text-lg hover:text-emerald-400">{t("title")}</a>
      <a href="/en" className="text-gray-300 hover:text-emerald-500">EN</a>
      <a href="/de" className="text-gray-300 hover:text-emerald-500">DE</a>
      <a href="/ar" className="text-gray-300 hover:text-emerald-500">AR</a>
    </nav>
  </div>
)}
  </header>
  )
}

export default Navbar