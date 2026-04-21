"use client";

export default function AnnouncementBanner() {
  return (
    <div className="bg-brown text-cream text-center py-2.5 px-4 text-xs tracking-widest uppercase font-medium">
      <span>Free Consultation Available — </span>
      <a
        href="#onlinebookings"
        id="announcement-book-btn"
        className="underline underline-offset-2 hover:text-peach transition-colors font-semibold"
      >
        Book Today
      </a>
    </div>
  );
}
