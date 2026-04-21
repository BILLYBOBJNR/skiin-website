"use client";

interface BookingButtonProps {
  label?: string;
  className?: string;
  id?: string;
  variant?: "primary" | "outline" | "dark";
}

export default function BookingButton({
  label = "Book Now",
  className = "",
  id = "book-btn",
  variant = "primary",
}: BookingButtonProps) {
  const base =
    "inline-block px-8 py-3.5 text-xs tracking-widest uppercase font-semibold transition-all duration-200 cursor-pointer";

  const variants = {
    primary: "bg-peach text-brown hover:bg-cream",
    outline: "border-2 border-cream text-cream hover:bg-cream hover:text-brown",
    dark: "bg-brown text-cream hover:bg-dark",
  };

  return (
    <a
      href="#onlinebookings"
      id={id}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {label}
    </a>
  );
}
