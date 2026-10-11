import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CreditCard,
  MapPin,
  PackageCheck,
  ShieldCheck,
  ShoppingBag,
  Truck,
} from "lucide-react";

function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [order, setOrder] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    paymentMethod: "cod",
  });

  useEffect(() => {
    try {
      const savedCart = JSON.parse(
        localStorage.getItem("medoraCart") || "[]"
      );

      setCartItems(Array.isArray(savedCart) ? savedCart : []);
    } catch {
      setCartItems([]);
    }
  }, []);

  const formatPrice = (price) =>
    `₹${price.toLocaleString("en-IN")}`;

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Demo delivery charge
  const deliveryCharge = subtotal === 0 || subtotal >= 2000 ? 0 : 99;

  const total = subtotal + deliveryCharge;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setFormErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.fullName.trim()) {
      errors.fullName = "Please enter your full name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ""))) {
      errors.phone = "Enter a valid 10-digit phone number.";
    }

    if (!formData.address.trim()) {
      errors.address = "Please enter your delivery address.";
    }

    if (!formData.city.trim()) {
      errors.city = "Please enter your city.";
    }

    if (!formData.state.trim()) {
      errors.state = "Please enter your state.";
    }

    if (!/^[0-9]{6}$/.test(formData.postalCode.trim())) {
      errors.postalCode = "Enter a valid 6-digit PIN code.";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (cartItems.length === 0) {
      return;
    }

    if (!validateForm()) {
      return;
    }

    const newOrder = {
      id: `MED-${Date.now().toString(36).toUpperCase()}`,
      items: cartItems,
      customer: {
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        address: formData.address.trim(),
        city: formData.city.trim(),
        state: formData.state.trim(),
        postalCode: formData.postalCode.trim(),
      },
      paymentMethod: formData.paymentMethod,
      subtotal,
      deliveryCharge,
      total,
      status: "Demo order placed",
      createdAt: new Date().toISOString(),
    };

    // Store demo order locally
    try {
      const existingOrders = JSON.parse(
        localStorage.getItem("medoraOrders") || "[]"
      );

      const orders = Array.isArray(existingOrders)
        ? existingOrders
        : [];

      localStorage.setItem(
        "medoraOrders",
        JSON.stringify([newOrder, ...orders])
      );

      // Clear the cart after successful demo submission
      localStorage.setItem("medoraCart", "[]");

      setOrder(newOrder);
      setCartItems([]);
    } catch {
      setFormErrors({
        general:
          "Unable to save your demo order. Please check your browser storage and try again.",
      });
    }
  };

  // Order confirmation screen
  if (order) {
    return (
      <main className="min-h-screen bg-[#F8F4EE] px-6 py-16">
        <div className="mx-auto max-w-2xl rounded-[24px] border border-[#E8D8CC] bg-[#FDFBF8] px-6 py-12 text-center md:px-12 md:py-16">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#E8D8CC]">
            <Check size={36} className="text-[#342A26]" />
          </div>

          <p className="medora-eyebrow mt-8">
            MÉDORA ORDER CONFIRMATION
          </p>

          <h1 className="mt-4 font-display text-4xl text-[#342A26] md:text-5xl">
            Thank you, {order.customer.fullName.split(" ")[0]}.
          </h1>

          <p className="mt-5 leading-8 text-[#746B65]">
            Your demo order has been recorded in this browser.
            This is a frontend demonstration, not a real purchase.
          </p>

          <div className="mt-8 rounded-2xl border border-[#E8D8CC] bg-white p-6 text-left">
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm text-[#746B65]">
                Demo order reference
              </span>

              <span className="text-sm font-semibold text-[#342A26]">
                {order.id}
              </span>
            </div>

            <div className="mt-5 flex items-center justify-between gap-4 border-t border-[#E8D8CC] pt-5">
              <span className="text-sm text-[#746B65]">
                Total
              </span>

              <span className="font-display text-2xl text-[#342A26]">
                {formatPrice(order.total)}
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between gap-4">
              <span className="text-sm text-[#746B65]">
                Payment method
              </span>

              <span className="text-sm text-[#342A26]">
                {order.paymentMethod === "cod"
                  ? "Cash on Delivery (Demo)"
                  : "Online Payment (Demo)"}
              </span>
            </div>
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#342A26] px-7 py-4 text-sm text-white transition hover:bg-[#514039]"
            >
              Continue Shopping
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full border border-[#D8C3B5] px-7 py-4 text-sm text-[#342A26] transition hover:bg-white"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // Empty cart screen
  if (cartItems.length === 0) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-[#F8F4EE] px-6 py-16">
        <div className="max-w-md text-center">
          <ShoppingBag
            size={44}
            strokeWidth={1.2}
            className="mx-auto text-[#A89589]"
          />

          <h1 className="mt-6 font-display text-4xl text-[#342A26]">
            Your bag is empty
          </h1>

          <p className="mt-4 leading-7 text-[#746B65]">
            Add something to your shopping bag before proceeding
            to checkout.
          </p>

          <Link
            to="/products"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#342A26] px-6 py-4 text-sm text-white transition hover:bg-[#514039]"
          >
            Explore Products
            <ArrowRight size={17} />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8F4EE]">
      {/* Page heading */}
      <section className="border-b border-[#E8D8CC]">
        <div className="medora-container py-12 md:py-16">
          <Link
            to="/cart"
            className="inline-flex items-center gap-2 text-sm text-[#746B65] transition hover:text-[#342A26]"
          >
            <ArrowLeft size={17} />
            Return to Cart
          </Link>

          <p className="medora-eyebrow mt-7">
            ALMOST YOURS
          </p>

          <h1 className="mt-3 font-display text-4xl text-[#342A26] md:text-6xl">
            Checkout
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-7 text-[#746B65] md:text-base">
            Review your selection and enter your delivery information
            to complete your demo order.
          </p>
        </div>
      </section>

      <section className="medora-container py-12 md:py-16">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="grid items-start gap-10 lg:grid-cols-[1fr_380px]"
        >
          {/* Delivery form */}
          <div className="space-y-8">
            {/* Delivery information */}
            <section className="rounded-[22px] border border-[#E8D8CC] bg-[#FDFBF8] p-6 md:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E8D8CC]">
                  <MapPin
                    size={21}
                    strokeWidth={1.5}
                    className="text-[#342A26]"
                  />
                </div>

                <div>
                  <p className="medora-eyebrow">STEP 01</p>

                  <h2 className="mt-1 font-display text-2xl text-[#342A26]">
                    Delivery Information
                  </h2>
                </div>
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <FormField
                  label="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  error={formErrors.fullName}
                  placeholder="Your full name"
                  autoComplete="name"
                />

                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={formErrors.email}
                  placeholder="you@example.com"
                  autoComplete="email"
                />

                <FormField
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  error={formErrors.phone}
                  placeholder="10-digit mobile number"
                  autoComplete="tel"
                />

                <FormField
                  label="PIN Code"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  error={formErrors.postalCode}
                  placeholder="6-digit PIN code"
                  autoComplete="postal-code"
                  maxLength={6}
                />

                <div className="sm:col-span-2">
                  <FormField
                    label="Street Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    error={formErrors.address}
                    placeholder="House number, street, area"
                    autoComplete="street-address"
                  />
                </div>

                <FormField
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  error={formErrors.city}
                  placeholder="Your city"
                  autoComplete="address-level2"
                />

                <FormField
                  label="State"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  error={formErrors.state}
                  placeholder="Your state"
                  autoComplete="address-level1"
                />
              </div>
            </section>

            {/* Payment options */}
            <section className="rounded-[22px] border border-[#E8D8CC] bg-[#FDFBF8] p-6 md:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E8D8CC]">
                  <CreditCard
                    size={21}
                    strokeWidth={1.5}
                    className="text-[#342A26]"
                  />
                </div>

                <div>
                  <p className="medora-eyebrow">STEP 02</p>

                  <h2 className="mt-1 font-display text-2xl text-[#342A26]">
                    Payment Method
                  </h2>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-[#746B65]">
                Choose a demonstration payment option. No payment
                will be collected.
              </p>

              <div className="mt-6 space-y-4">
                <PaymentOption
                  value="cod"
                  selected={formData.paymentMethod === "cod"}
                  onChange={handleChange}
                  title="Cash on Delivery"
                  description="Demo selection — no real delivery is arranged."
                />

                <PaymentOption
                  value="online"
                  selected={formData.paymentMethod === "online"}
                  onChange={handleChange}
                  title="Online Payment"
                  description="Demo selection — no payment gateway is connected."
                />
              </div>
            </section>

            {formErrors.general && (
              <p role="alert" className="text-sm text-red-700">
                {formErrors.general}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-full bg-[#342A26] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#514039]"
            >
              Place Demo Order
              <ArrowRight size={18} />
            </button>

            <p className="text-center text-xs leading-6 text-[#746B65]">
              This is a portfolio demonstration. No real order or payment
              will be processed.
            </p>
          </div>

          {/* Order summary */}
          <aside className="rounded-[22px] border border-[#E8D8CC] bg-[#FDFBF8] p-6 md:p-8 lg:sticky lg:top-28">
            <p className="medora-eyebrow">YOUR SELECTION</p>

            <h2 className="mt-3 font-display text-3xl text-[#342A26]">
              Order Summary
            </h2>

            <div className="mt-7 space-y-5">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4"
                >
                  <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded-lg bg-[#E8D8CC]">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <ShoppingBag
                          size={22}
                          className="text-[#A89589]"
                        />
                      </div>
                    )}

                    <span className="absolute -right-1 -top-1 flex h-6 min-w-6 items-center justify-center rounded-full bg-[#342A26] px-1 text-xs text-white">
                      {item.quantity}
                    </span>
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col justify-center">
                    <p className="text-xs uppercase tracking-wide text-[#A89589]">
                      {item.category}
                    </p>

                    <p className="mt-1 font-display text-base text-[#342A26]">
                      {item.name}
                    </p>

                    <p className="mt-2 text-sm font-medium text-[#342A26]">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 space-y-4 border-t border-[#E8D8CC] pt-6">
              <SummaryRow
                label="Subtotal"
                value={formatPrice(subtotal)}
              />

              <SummaryRow
                label="Delivery"
                value={
                  deliveryCharge === 0
                    ? "Free"
                    : formatPrice(deliveryCharge)
                }
              />

              <div className="border-t border-[#E8D8CC] pt-5">
                <SummaryRow
                  label="Total"
                  value={formatPrice(total)}
                  strong
                />
              </div>
            </div>

            <div className="mt-7 flex items-start gap-3 rounded-xl bg-[#F8F4EE] p-4">
              <ShieldCheck
                size={20}
                strokeWidth={1.5}
                className="mt-0.5 shrink-0 text-[#A89589]"
              />

              <p className="text-xs leading-6 text-[#746B65]">
                Your order details are saved locally in this browser
                for demonstration purposes.
              </p>
            </div>
          </aside>
        </form>
      </section>

      {/* Delivery reassurance */}
      <section className="border-t border-[#E8D8CC] bg-[#FDFBF8]">
        <div className="medora-container grid gap-8 py-10 sm:grid-cols-2">
          <div className="flex items-center gap-4">
            <Truck
              size={25}
              strokeWidth={1.4}
              className="text-[#A89589]"
            />

            <div>
              <h3 className="text-sm font-medium text-[#342A26]">
                Delivery details
              </h3>

              <p className="mt-1 text-xs leading-6 text-[#746B65]">
                Delivery fees are calculated using the demo pricing rules.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <PackageCheck
              size={25}
              strokeWidth={1.4}
              className="text-[#A89589]"
            />

            <div>
              <h3 className="text-sm font-medium text-[#342A26]">
                Order review
              </h3>

              <p className="mt-1 text-xs leading-6 text-[#746B65]">
                Review your details before placing your demo order.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Reusable form field
function FormField({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
  autoComplete,
  maxLength,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-[#342A26]"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        maxLength={maxLength}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-[#342A26] outline-none transition placeholder:text-[#A89589] focus:border-[#A89589] ${
          error ? "border-red-500" : "border-[#E8D8CC]"
        }`}
      />

      {error && (
        <p
          id={`${name}-error`}
          className="mt-2 text-xs text-red-700"
        >
          {error}
        </p>
      )}
    </div>
  );
}

// Reusable payment option
function PaymentOption({
  value,
  selected,
  onChange,
  title,
  description,
}) {
  return (
    <label
      className={`flex cursor-pointer items-start gap-4 rounded-xl border p-4 transition ${
        selected
          ? "border-[#342A26] bg-[#F8F4EE]"
          : "border-[#E8D8CC] bg-white hover:border-[#A89589]"
      }`}
    >
      <input
        type="radio"
        name="paymentMethod"
        value={value}
        checked={selected}
        onChange={onChange}
        className="mt-1 accent-[#342A26]"
      />

      <span className="min-w-0">
        <span className="block text-sm font-medium text-[#342A26]">
          {title}
        </span>

        <span className="mt-1 block text-xs leading-6 text-[#746B65]">
          {description}
        </span>
      </span>
    </label>
  );
}

// Reusable order summary row
function SummaryRow({ label, value, strong = false }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span
        className={`text-sm ${
          strong
            ? "font-semibold text-[#342A26]"
            : "text-[#746B65]"
        }`}
      >
        {label}
      </span>

      <span
        className={`${
          strong
            ? "font-display text-2xl text-[#342A26]"
            : "text-sm font-medium text-[#342A26]"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

export default Checkout;