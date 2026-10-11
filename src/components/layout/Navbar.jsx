import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

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

  const location = useLocation();

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Doctors", href: "/doctors" },
    { name: "Hospital", href: "/hospital" },
    { name: "Pharmacy", href: "/pharmacy" },
    { name: "Skincare", href: "/skincare" },
    { name: "Lab", href: "/laboratory" },
    { name: "About", href: "/about" },
  ];

  const navLinkClass = ({ isActive }) =>
    `relative py-2 text-sm transition-colors duration-300 ${
      isActive
        ? "font-semibold text-[#342A26]"
        : "text-[#6F625B] hover:text-[#342A26]"
    }`;

  const actionLinkClass =
    "flex items-center justify-center gap-2 rounded-full border border-[#342A26] px-5 py-2.5 text-sm text-[#342A26] transition-all duration-300 hover:bg-[#342A26] hover:text-[#F8F4EE]";

  return (
    <header className="sticky top-0 z-50 border-b border-[#E8D8CC]/70 bg-[#F8F4EE]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

        {/* MÉDORA Logo */}
        <Link
          to="/"
          className="shrink-0 font-display text-2xl tracking-wide text-[#342A26] sm:text-3xl"
          aria-label="MÉDORA home"
        >
          MÉDORA
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 xl:gap-7 lg:flex"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              end={link.href === "/"}
              className={navLinkClass}
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-[#B99A67] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-1 xl:gap-2 lg:flex">

          {/* Search */}
          <Link
            to="/doctors"
            aria-label="Find a doctor"
            title="Find a doctor"
            className="rounded-full p-3 text-[#342A26] transition hover:bg-[#E8D8CC]"
          >
            <Search size={18} strokeWidth={1.7} />
          </Link>

          {/* Shopping Cart */}
          <Link
            to="/cart"
            aria-label="Shopping cart"
            title="Shopping cart"
            className="rounded-full p-3 text-[#342A26] transition hover:bg-[#E8D8CC]"
          >
            <ShoppingBag size={18} strokeWidth={1.7} />
          </Link>

          {/* Appointment */}
          <Link
            to="/doctors"
            className={`${actionLinkClass} ml-1`}
          >
            <CalendarDays size={16} strokeWidth={1.7} />
            Appointment
          </Link>

          {/* Patient Portal */}
          <Link
            to="/patient-portal"
            className="flex items-center justify-center gap-2 rounded-full bg-[#342A26] px-5 py-2.5 text-sm text-[#F8F4EE] transition-all duration-300 hover:bg-[#B99A67] hover:text-[#342A26]"
          >
            <UserRound size={16} strokeWidth={1.7} />
            Patient Portal
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="rounded-full p-2 text-[#342A26] transition hover:bg-[#E8D8CC] lg:hidden"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="medora-mobile-navigation"
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
        <div
          id="medora-mobile-navigation"
          className="border-t border-[#E8D8CC] bg-[#F8F4EE] px-5 py-5 sm:px-6 lg:hidden"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) =>
                  `border-b border-[#E8D8CC]/70 py-4 text-sm transition-colors ${
                    isActive
                      ? "font-semibold text-[#342A26]"
                      : "text-[#6F625B] hover:text-[#342A26]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="mt-6 flex flex-col gap-3">

            <Link
              to="/cart"
              className="flex items-center justify-center gap-2 rounded-full border border-[#342A26] px-5 py-3 text-sm text-[#342A26] transition hover:bg-[#E8D8CC]"
            >
              <ShoppingBag size={16} />
              Shopping Cart
            </Link>

            <Link
              to="/doctors"
              className="flex items-center justify-center gap-2 rounded-full border border-[#342A26] px-5 py-3 text-sm text-[#342A26] transition hover:bg-[#E8D8CC]"
            >
              <CalendarDays size={16} />
              Book an Appointment
            </Link>

            <Link
              to="/patient-portal"
              className="flex items-center justify-center gap-2 rounded-full bg-[#342A26] px-5 py-3 text-sm text-[#F8F4EE] transition hover:bg-[#B99A67] hover:text-[#342A26]"
            >
              <UserRound size={16} />
              Patient Portal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;