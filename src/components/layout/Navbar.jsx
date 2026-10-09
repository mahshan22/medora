import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ShoppingBag,
  CalendarDays,
  UserRound,
  Menu,
  X,
} from "lucide-react";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Doctors", href: "/doctors" },
    { name: "Hospital", href: "/hospital" },
    { name: "Pharmacy", href: "/pharmacy" },
    { name: "Skincare", href: "/skincare" },
    { name: "Lab", href: "/laboratory" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#E8D8CC]/70 bg-[#F8F4EE]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
       <Link to="/" className="font-display text-3xl tracking-wide text-[#342A26]">
          MÉDORA
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm text-[#6F625B] transition-colors duration-300 hover:text-[#342A26]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 lg:flex">

          {/* Search */}
          <button
            className="rounded-full p-3 text-[#342A26] transition hover:bg-[#E8D8CC]"
            aria-label="Search"
          >
            <Search size={18} strokeWidth={1.7} />
          </button>

          {/* Cart */}
          <button
            className="rounded-full p-3 text-[#342A26] transition hover:bg-[#E8D8CC]"
            aria-label="Shopping cart"
          >
            <ShoppingBag size={18} strokeWidth={1.7} />
          </button>

          {/* Appointment */}
          <a
            href="/doctors"
            className="ml-2 flex items-center gap-2 rounded-full border border-[#342A26] px-5 py-2.5 text-sm text-[#342A26] transition-all duration-300 hover:bg-[#342A26] hover:text-[#F8F4EE]"
          >
            <CalendarDays size={16} strokeWidth={1.7} />
            Appointment
          </a>

          {/* Patient Portal */}
          <a
            href="/patient-portal"
            className="flex items-center gap-2 rounded-full bg-[#342A26] px-5 py-2.5 text-sm text-[#F8F4EE] transition-all duration-300 hover:bg-[#B99A67]"
          >
            <UserRound size={16} strokeWidth={1.7} />
            Patient Portal
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-full p-2 text-[#342A26] transition hover:bg-[#E8D8CC] lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X size={24} strokeWidth={1.7} />
          ) : (
            <Menu size={24} strokeWidth={1.7} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-[#E8D8CC] bg-[#F8F4EE] px-6 py-6 lg:hidden">

          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-[#E8D8CC]/70 py-4 text-sm text-[#342A26]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="mt-6 flex flex-col gap-3">

            <a
              href="/doctors"
              className="flex items-center justify-center gap-2 rounded-full border border-[#342A26] px-5 py-3 text-sm text-[#342A26]"
            >
              <CalendarDays size={16} />
              Book an Appointment
            </a>

            <a
              href="/patient-portal"
              className="flex items-center justify-center gap-2 rounded-full bg-[#342A26] px-5 py-3 text-sm text-[#F8F4EE]"
            >
              <UserRound size={16} />
              Patient Portal
            </a>

          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;