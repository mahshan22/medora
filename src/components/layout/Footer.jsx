import {
  ArrowUpRight,
  HeartPulse,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { Link } from "react-router-dom";

const footerLinks = {
  Explore: [
    { label: "Home", to: "/" },
    { label: "About MÉDORA", to: "/about" },
    { label: "Our Doctors", to: "/doctors" },
    { label: "Departments", to: "/departments" },
    { label: "Hospital", to: "/hospital" },
  ],

  Services: [
    { label: "Pharmacy", to: "/pharmacy" },
    { label: "Skincare", to: "/skincare" },
    { label: "Laboratory", to: "/laboratory" },
    { label: "Patient Portal", to: "/patient-portal" },
    { label: "Shopping Bag", to: "/cart" },
  ],

  Support: [
    { label: "Book an Appointment", to: "/doctors" },
    { label: "Patient Portal", to: "/patient-portal" },
    { label: "Contact Us", to: "/about" },
    { label: "Checkout", to: "/checkout" },
  ],
};

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#242321] text-[#F8F4EE]">

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-5 pb-12 pt-16 sm:px-8 lg:px-16 lg:pb-14 lg:pt-20">

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-10">

          {/* Brand section */}
          <div className="lg:col-span-2">

            <Link
              to="/"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#B99A67]/50 text-[#D8C3B5]">
                <HeartPulse size={23} strokeWidth={1.4} />
              </div>

              <div>
                <span className="font-display text-3xl tracking-[0.16em]">
                  MÉDORA
                </span>

                <p className="mt-1 text-[9px] uppercase tracking-[0.28em] text-[#D8C3B5]">
                  Healthcare, elevated
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
              A thoughtful approach to modern healthcare, bringing together
              expert consultations, diagnostic services, pharmacy, and
              personalised wellness.
            </p>

            {/* Contact information */}
            <div className="mt-7 space-y-4">

              <a
                href="mailto:hello@medora.example"
                className="flex items-center gap-3 text-sm text-white/65 transition hover:text-[#D8C3B5]"
              >
                <Mail size={17} className="shrink-0 text-[#B99A67]" />
                hello@medora.example
              </a>

              <a
                href="tel:+910000000000"
                className="flex items-center gap-3 text-sm text-white/65 transition hover:text-[#D8C3B5]"
              >
                <Phone size={17} className="shrink-0 text-[#B99A67]" />
                +91 00000 00000
              </a>

              <div className="flex items-start gap-3 text-sm leading-6 text-white/65">
                <MapPin size={17} className="mt-1 shrink-0 text-[#B99A67]" />

                <span>
                  Your location
                  <br />
                  Your city, India
                </span>
              </div>

            </div>
          </div>

          {/* Navigation columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>

              <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#D8C3B5]">
                {heading}
              </h3>

              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="group inline-flex items-center gap-1 text-sm text-white/60 transition hover:text-[#F8F4EE]"
                    >
                      {link.label}

                      <ArrowUpRight
                        size={13}
                        className="opacity-0 transition group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>

        {/* Newsletter-style note */}
        <div className="mt-14 flex flex-col justify-between gap-5 border-t border-white/10 pt-8 md:flex-row md:items-center">

          <div>
            <h3 className="font-display text-xl text-[#F8F4EE]">
              Your health. Your journey.
            </h3>

            <p className="mt-2 text-sm text-white/50">
              Thoughtful healthcare experiences, designed around you.
            </p>
          </div>

          <Link
            to="/doctors"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-[#B99A67]/50 px-5 py-3 text-sm text-[#D8C3B5] transition hover:bg-[#D8C3B5] hover:text-[#342A26]"
          >
            Find a Doctor
            <ArrowUpRight size={16} />
          </Link>

        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-white/45">
            © {currentYear} MÉDORA. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              to="/about"
              className="text-xs text-white/45 transition hover:text-[#D8C3B5]"
            >
              Privacy
            </Link>

            <Link
              to="/about"
              className="text-xs text-white/45 transition hover:text-[#D8C3B5]"
            >
              Terms
            </Link>

          
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;