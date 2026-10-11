import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Activity,
  CalendarDays,
  Check,
  Clock3,
  FlaskConical,
  HeartPulse,
  Microscope,
  ShieldCheck,
  TestTube,
  Users,
} from "lucide-react";

const labCategories = [
  "All Tests",
  "Blood Tests",
  "Health Packages",
  "Specialized Tests",
];

const labTests = [
  {
    id: 1,
    name: "Complete Blood Count",
    shortName: "CBC",
    category: "Blood Tests",
    description:
      "A blood test that measures different blood cells to help assess general health.",
    price: 450,
    duration: "Same-day sample collection",
    popular: true,
  },
  {
    id: 2,
    name: "Liver Function Test",
    shortName: "LFT",
    category: "Blood Tests",
    description:
      "A group of tests used to evaluate liver-related markers.",
    price: 850,
    duration: "Results according to laboratory processing",
    popular: true,
  },
  {
    id: 3,
    name: "Kidney Function Test",
    shortName: "KFT",
    category: "Blood Tests",
    description:
      "Measures selected markers used to assess kidney function.",
    price: 750,
    duration: "Results according to laboratory processing",
    popular: false,
  },
  {
    id: 4,
    name: "Thyroid Profile",
    shortName: "TFT",
    category: "Blood Tests",
    description:
      "Measures thyroid-related hormones to help evaluate thyroid function.",
    price: 650,
    duration: "Preparation depends on the tests ordered",
    popular: true,
  },
  {
    id: 5,
    name: "Complete Health Check",
    shortName: "Wellness",
    category: "Health Packages",
    description:
      "A configurable collection of common screening tests for general health assessment.",
    price: 2499,
    duration: "Multiple tests may require additional time",
    popular: true,
  },
  {
    id: 6,
    name: "Diabetes Screening",
    shortName: "Glucose",
    category: "Specialized Tests",
    description:
      "A screening option using glucose-related testing selected for your needs.",
    price: 550,
    duration: "Preparation depends on the test selected",
    popular: false,
  },
  {
    id: 7,
    name: "Vitamin D Test",
    shortName: "Vitamin D",
    category: "Specialized Tests",
    description:
      "Measures the level of vitamin D in a blood sample.",
    price: 1100,
    duration: "Results according to laboratory processing",
    popular: false,
  },
  {
    id: 8,
    name: "Lipid Profile",
    shortName: "Lipid",
    category: "Blood Tests",
    description:
      "Measures selected blood lipids, including cholesterol and triglycerides.",
    price: 700,
    duration: "Fasting may be recommended for some testing situations",
    popular: true,
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Quality-focused process",
    description:
      "A professional approach to sample handling, testing, and reporting.",
  },
  {
    icon: Clock3,
    title: "Convenient scheduling",
    description:
      "Explore test options and choose a convenient time for your demo booking.",
  },
  {
    icon: Microscope,
    title: "A broad test selection",
    description:
      "Explore common screening tests and specialized diagnostic options.",
  },
  {
    icon: HeartPulse,
    title: "Care with context",
    description:
      "Discuss appropriate testing with a qualified healthcare professional.",
  },
];

function Laboratory() {
  const [activeCategory, setActiveCategory] = useState("All Tests");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTest, setSelectedTest] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
  });
  const [bookingError, setBookingError] = useState("");
  const [bookingConfirmation, setBookingConfirmation] = useState(null);

  const filteredTests = labTests.filter((test) => {
    const matchesCategory =
      activeCategory === "All Tests" ||
      test.category === activeCategory;

    const matchesSearch =
      test.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      test.shortName.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const formatPrice = (price) =>
    `₹${price.toLocaleString("en-IN")}`;

  const openBooking = (test) => {
    setSelectedTest(test);
    setBookingError("");
    setBookingConfirmation(null);
    setBookingForm({
      name: "",
      email: "",
      phone: "",
      date: "",
    });
  };

  const closeBooking = () => {
    setSelectedTest(null);
    setBookingError("");
  };

  const handleBookingChange = (event) => {
    const { name, value } = event.target;

    setBookingForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setBookingError("");
  };

  const handleBookingSubmit = (event) => {
    event.preventDefault();

    if (
      !bookingForm.name.trim() ||
      !bookingForm.email.trim() ||
      !bookingForm.phone.trim() ||
      !bookingForm.date
    ) {
      setBookingError("Please complete all fields.");
      return;
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(bookingForm.email)
    ) {
      setBookingError("Please enter a valid email address.");
      return;
    }

    if (!/^[0-9]{10}$/.test(bookingForm.phone.replace(/\s/g, ""))) {
      setBookingError("Please enter a valid 10-digit phone number.");
      return;
    }

    const appointment = {
      id: `LAB-${Date.now().toString(36).toUpperCase()}`,
      testId: selectedTest.id,
      testName: selectedTest.name,
      price: selectedTest.price,
      patientName: bookingForm.name.trim(),
      email: bookingForm.email.trim(),
      phone: bookingForm.phone.trim(),
      date: bookingForm.date,
      status: "Demo booking",
      createdAt: new Date().toISOString(),
    };

    try {
      const existingBookings = JSON.parse(
        localStorage.getItem("medoraLabBookings") || "[]"
      );

      const bookings = Array.isArray(existingBookings)
        ? existingBookings
        : [];

      localStorage.setItem(
        "medoraLabBookings",
        JSON.stringify([appointment, ...bookings])
      );

      setBookingConfirmation(appointment);
    } catch {
      setBookingError(
        "Unable to save the demo booking in this browser."
      );
    }
  };

  return (
    <main className="min-h-screen bg-[#F8F4EE]">
      {/* HERO */}
      <section className="overflow-hidden">
        <div className="medora-container grid gap-12 py-14 md:py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="medora-eyebrow">
              MÉDORA DIAGNOSTICS
            </p>

            <h1 className="mt-5 font-display text-5xl leading-tight text-[#342A26] md:text-7xl">
              Clarity begins
              <br />
              with <span className="italic">care.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#746B65] md:text-lg">
              Explore diagnostic testing options designed to support
              informed conversations about your health, with a more
              thoughtful and convenient experience.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#available-tests"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#342A26] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#514039]"
              >
                Explore Tests
                <ArrowRight size={18} />
              </a>

              <a
                href="#why-medora"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[#D8C3B5] px-7 py-4 text-sm font-medium text-[#342A26] transition hover:bg-white"
              >
                Why MÉDORA?
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 border-t border-[#E8D8CC] pt-6">
              <div className="flex items-center gap-3">
                <FlaskConical
                  size={21}
                  strokeWidth={1.5}
                  className="text-[#A89589]"
                />

                <span className="text-sm text-[#746B65]">
                  Diagnostic services
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CalendarDays
                  size={21}
                  strokeWidth={1.5}
                  className="text-[#A89589]"
                />

                <span className="text-sm text-[#746B65]">
                  Convenient scheduling
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/4.5] overflow-hidden rounded-[28px] bg-[#E8D8CC]">
              <img
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1100&q=85"
                alt="Laboratory professional working with diagnostic samples"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-[#E8D8CC] bg-[#FDFBF8] p-5 shadow-lg sm:-left-6 sm:right-8 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E8D8CC]">
                  <Activity
                    size={23}
                    strokeWidth={1.5}
                    className="text-[#342A26]"
                  />
                </div>

                <div>
                  <p className="font-display text-xl text-[#342A26]">
                    Your health, understood.
                  </p>

                  <p className="mt-1 text-sm leading-6 text-[#746B65]">
                    Explore testing options with care and clarity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mt-12 border-y border-[#E8D8CC] bg-[#FDFBF8] md:mt-16">
        <div className="medora-container grid gap-8 py-12 md:grid-cols-3 md:gap-10 md:py-16">
          <div>
            <p className="medora-eyebrow">
              OUR APPROACH
            </p>

            <h2 className="mt-3 font-display text-3xl leading-tight text-[#342A26]">
              More thoughtful diagnostics.
            </h2>
          </div>

          <p className="text-sm leading-8 text-[#746B65] md:col-span-2 md:text-base">
            Diagnostic testing can provide useful information when
            selected appropriately and interpreted in context. MÉDORA
            brings test information and demo booking options together
            in one convenient place.
          </p>
        </div>
      </section>

      {/* AVAILABLE TESTS */}
      <section
        id="available-tests"
        className="medora-container py-16 md:py-24"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="medora-eyebrow">
              THE TEST COLLECTION
            </p>

            <h2 className="mt-3 font-display text-4xl text-[#342A26] md:text-5xl">
              Explore our tests
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#746B65] md:text-base">
              Browse common diagnostic options and select a test to
              view its information or start a demo booking.
            </p>
          </div>

          <div className="relative w-full md:max-w-xs">
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search tests..."
              aria-label="Search laboratory tests"
              className="w-full rounded-full border border-[#E8D8CC] bg-white px-5 py-3.5 text-sm text-[#342A26] outline-none transition placeholder:text-[#A89589] focus:border-[#A89589]"
            />
          </div>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="mt-8 flex gap-3 overflow-x-auto pb-3">
          {labCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 rounded-full border px-5 py-3 text-sm transition ${
                activeCategory === category
                  ? "border-[#342A26] bg-[#342A26] text-white"
                  : "border-[#E8D8CC] bg-white text-[#746B65] hover:border-[#A89589]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between border-b border-[#E8D8CC] pb-4">
          <p className="text-sm text-[#746B65]">
            {filteredTests.length}{" "}
            {filteredTests.length === 1 ? "test" : "tests"} available
          </p>

          {(searchTerm || activeCategory !== "All Tests") && (
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("All Tests");
              }}
              className="text-sm text-[#746B65] underline underline-offset-4 hover:text-[#342A26]"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* TEST CARDS */}
        {filteredTests.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {filteredTests.map((test) => (
              <article
                key={test.id}
                className="group flex flex-col rounded-[20px] border border-[#E8D8CC] bg-[#FDFBF8] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E8D8CC]">
                    <TestTube
                      size={22}
                      strokeWidth={1.5}
                      className="text-[#342A26]"
                    />
                  </div>

                  {test.popular && (
                    <span className="rounded-full bg-[#E8D8CC] px-3 py-1.5 text-xs text-[#342A26]">
                      Popular
                    </span>
                  )}
                </div>

                <p className="mt-6 text-xs uppercase tracking-[0.14em] text-[#A89589]">
                  {test.category}
                </p>

                <h3 className="mt-2 font-display text-2xl leading-snug text-[#342A26]">
                  {test.name}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-[#746B65]">
                  {test.description}
                </p>

                <div className="mt-5 flex items-end justify-between gap-3 border-t border-[#E8D8CC] pt-5">
                  <div>
                    <p className="text-xs text-[#A89589]">
                      Demo price
                    </p>

                    <p className="mt-1 text-xl font-semibold text-[#342A26]">
                      {formatPrice(test.price)}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => openBooking(test)}
                    aria-label={`Book ${test.name}`}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#342A26] text-white transition hover:bg-[#514039]"
                  >
                    <ArrowUpRight size={19} />
                  </button>
                </div>

                <p className="mt-4 text-xs leading-6 text-[#746B65]">
                  <Clock3
                    size={13}
                    className="mr-1 inline-block"
                  />
                  {test.duration}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <FlaskConical
              size={36}
              strokeWidth={1.2}
              className="mx-auto text-[#A89589]"
            />

            <h3 className="mt-4 font-display text-2xl text-[#342A26]">
              No tests found
            </h3>

            <p className="mt-3 text-sm text-[#746B65]">
              Try another search term or choose a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("All Tests");
              }}
              className="mt-5 rounded-full bg-[#342A26] px-6 py-3 text-sm text-white"
            >
              Show all tests
            </button>
          </div>
        )}

        <p className="mt-8 text-xs leading-6 text-[#746B65]">
          These tests, prices, and service descriptions are sample
          demonstration content. Actual test availability, preparation,
          pricing, and reporting times must be confirmed with a qualified
          laboratory.
        </p>
      </section>

      {/* WHY MÉDORA */}
      <section
        id="why-medora"
        className="border-y border-[#E8D8CC] bg-[#FDFBF8]"
      >
        <div className="medora-container py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="medora-eyebrow">
              THE MÉDORA DIFFERENCE
            </p>

            <h2 className="mt-4 font-display text-4xl leading-tight text-[#342A26] md:text-5xl">
              Care that starts with the details.
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#746B65] md:text-base">
              A thoughtful diagnostic experience begins with clear
              information, convenient planning, and appropriate
              professional guidance.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="rounded-[20px] border border-[#E8D8CC] bg-[#F8F4EE] p-6"
                >
                  <span className="text-xs tracking-[0.18em] text-[#A89589]">
                    0{index + 1}
                  </span>

                  <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#E8D8CC]">
                    <Icon
                      size={22}
                      strokeWidth={1.5}
                      className="text-[#342A26]"
                    />
                  </div>

                  <h3 className="mt-5 font-display text-xl text-[#342A26]">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#746B65]">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="medora-container py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="medora-eyebrow">
              A SIMPLE PROCESS
            </p>

            <h2 className="mt-4 font-display text-4xl leading-tight text-[#342A26] md:text-5xl">
              From selection to your next step.
            </h2>

            <div className="mt-8 space-y-6">
              {[
                {
                  number: "01",
                  title: "Explore available tests",
                  text: "Review the sample test catalogue and descriptions.",
                },
                {
                  number: "02",
                  title: "Request a convenient date",
                  text: "Use the demo booking form to select a preferred date.",
                },
                {
                  number: "03",
                  title: "Confirm with a laboratory",
                  text: "In a real service, confirm availability, preparation, and instructions with the provider.",
                },
              ].map((step) => (
                <div key={step.number} className="flex gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D8C3B5] font-display text-lg text-[#342A26]">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="font-display text-xl text-[#342A26]">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-[#746B65]">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] bg-[#342A26] p-8 md:p-12">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#514039]">
              <HeartPulse
                size={27}
                strokeWidth={1.4}
                className="text-[#E8D8CC]"
              />
            </div>

            <p className="mt-8 text-xs tracking-[0.2em] text-[#D8C3B5]">
              YOUR HEALTH MATTERS
            </p>

            <h3 className="mt-4 font-display text-3xl leading-tight text-[#F8F4EE] md:text-4xl">
              The right information can help you take the next step.
            </h3>

            <p className="mt-5 text-sm leading-8 text-[#D8C3B5]">
              Diagnostic tests should be chosen based on individual
              needs and interpreted with appropriate clinical guidance.
            </p>

            <Link
              to="/doctors"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#F8F4EE] px-6 py-4 text-sm font-medium text-[#342A26] transition hover:bg-white"
            >
              Explore Our Doctors
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pb-16 md:pb-24">
        <div className="medora-container">
          <div className="rounded-[24px] border border-[#E8D8CC] bg-[#E8D8CC] px-6 py-12 text-center md:px-12 md:py-16">
            <p className="medora-eyebrow">
              A MORE THOUGHTFUL EXPERIENCE
            </p>

            <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl leading-tight text-[#342A26] md:text-5xl">
              Begin with a little more clarity.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#746B65] md:text-base">
              Explore the test collection or speak with a healthcare
              professional about the next step that's right for you.
            </p>

            <a
              href="#available-tests"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#342A26] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#514039]"
            >
              Browse Laboratory Tests
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* LAB BOOKING MODAL */}
      {selectedTest && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#242321]/60 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeBooking();
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="lab-booking-title"
            className="my-8 w-full max-w-lg rounded-[24px] border border-[#E8D8CC] bg-[#FDFBF8] p-6 shadow-2xl md:p-8"
          >
            {bookingConfirmation ? (
              <div className="py-6 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E8D8CC]">
                  <Check
                    size={30}
                    className="text-[#342A26]"
                  />
                </div>

                <p className="medora-eyebrow mt-6">
                  DEMO BOOKING
                </p>

                <h2 className="mt-3 font-display text-3xl text-[#342A26]">
                  Request recorded
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#746B65]">
                  Your demo request for {bookingConfirmation.testName}
                  {" "}has been saved in this browser.
                </p>

                <div className="mt-6 rounded-xl border border-[#E8D8CC] bg-white p-4 text-left">
                  <p className="text-xs text-[#A89589]">
                    Reference
                  </p>

                  <p className="mt-1 font-semibold text-[#342A26]">
                    {bookingConfirmation.id}
                  </p>

                  <p className="mt-4 text-xs text-[#A89589]">
                    Preferred date
                  </p>

                  <p className="mt-1 text-sm text-[#342A26]">
                    {bookingConfirmation.date}
                  </p>
                </div>

                <p className="mt-4 text-xs leading-6 text-[#746B65]">
                  This is not a real laboratory appointment. No
                  laboratory has been notified.
                </p>

                <button
                  type="button"
                  onClick={closeBooking}
                  className="mt-7 w-full rounded-full bg-[#342A26] px-6 py-4 text-sm text-white transition hover:bg-[#514039]"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="medora-eyebrow">
                      LABORATORY SERVICES
                    </p>

                    <h2
                      id="lab-booking-title"
                      className="mt-3 font-display text-3xl text-[#342A26]"
                    >
                      Request a test
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-[#746B65]">
                      {selectedTest.name}
                    </p>

                    <p className="mt-2 font-semibold text-[#342A26]">
                      {formatPrice(selectedTest.price)}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={closeBooking}
                    aria-label="Close booking form"
                    className="rounded-full border border-[#E8D8CC] px-3 py-2 text-sm text-[#746B65] transition hover:bg-[#F8F4EE]"
                  >
                    Close
                  </button>
                </div>

                <form
                  onSubmit={handleBookingSubmit}
                  className="mt-7 space-y-4"
                >
                  <div>
                    <label
                      htmlFor="lab-name"
                      className="mb-2 block text-sm font-medium text-[#342A26]"
                    >
                      Full Name
                    </label>

                    <input
                      id="lab-name"
                      name="name"
                      value={bookingForm.name}
                      onChange={handleBookingChange}
                      required
                      placeholder="Enter your full name"
                      autoComplete="name"
                      className="w-full rounded-xl border border-[#E8D8CC] bg-white px-4 py-3.5 text-sm text-[#342A26] outline-none focus:border-[#A89589]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lab-email"
                      className="mb-2 block text-sm font-medium text-[#342A26]"
                    >
                      Email Address
                    </label>

                    <input
                      id="lab-email"
                      name="email"
                      type="email"
                      value={bookingForm.email}
                      onChange={handleBookingChange}
                      required
                      placeholder="you@example.com"
                      autoComplete="email"
                      className="w-full rounded-xl border border-[#E8D8CC] bg-white px-4 py-3.5 text-sm text-[#342A26] outline-none focus:border-[#A89589]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lab-phone"
                      className="mb-2 block text-sm font-medium text-[#342A26]"
                    >
                      Phone Number
                    </label>

                    <input
                      id="lab-phone"
                      name="phone"
                      type="tel"
                      value={bookingForm.phone}
                      onChange={handleBookingChange}
                      required
                      pattern="[0-9 ]{10,14}"
                      placeholder="10-digit mobile number"
                      autoComplete="tel"
                      className="w-full rounded-xl border border-[#E8D8CC] bg-white px-4 py-3.5 text-sm text-[#342A26] outline-none focus:border-[#A89589]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lab-date"
                      className="mb-2 block text-sm font-medium text-[#342A26]"
                    >
                      Preferred Date
                    </label>

                    <input
                      id="lab-date"
                      name="date"
                      type="date"
                      value={bookingForm.date}
                      onChange={handleBookingChange}
                      min={new Date().toLocaleDateString("en-CA")}
                      required
                      className="w-full rounded-xl border border-[#E8D8CC] bg-white px-4 py-3.5 text-sm text-[#342A26] outline-none focus:border-[#A89589]"
                    />
                  </div>

                  {bookingError && (
                    <p
                      role="alert"
                      className="text-sm text-red-700"
                    >
                      {bookingError}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-3 rounded-full bg-[#342A26] px-6 py-4 text-sm font-medium text-white transition hover:bg-[#514039]"
                  >
                    Save Demo Request
                    <ArrowRight size={17} />
                  </button>

                  <p className="text-xs leading-6 text-[#746B65]">
                    Demo only. Use fictional information while testing.
                    This form does not contact a laboratory or confirm
                    a real appointment.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default Laboratory;