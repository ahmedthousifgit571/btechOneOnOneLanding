"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";

const PHONE = "919895006772";
const WHATSAPP_MESSAGE =
  "Hi BTechTutor, I would like to get more details about your One-on-One mentoring program for First Year B.Tech students.";

const ACTIONS = [
  {
    label: "WhatsApp",
    href: `https://wa.me/${PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
    icon: MessageCircle,
    className: "bg-emerald-500 hover:bg-emerald-600 text-white border-2 border-dark shadow-[3px_3px_0px_0px_#0F0F0F]",
  },
  {
    label: "Call Now",
    href: `tel:+${PHONE}`,
    icon: Phone,
    className: "bg-white border-2 border-dark text-dark shadow-[3px_3px_0px_0px_#0F0F0F] hover:bg-dark/5",
  },
];

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {ACTIONS.map(({ label, href, icon: Icon, className }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          className={`group flex items-center gap-2 rounded-full pl-3.5 pr-4 py-2.5 text-sm transition-all hover:scale-[1.05] hover:-translate-x-0.5 hover:-translate-y-0.5 ${className}`}
        >
          <Icon size={17} />
          <span className="hidden sm:inline font-semibold">{label}</span>
        </a>
      ))}
    </div>
  );
}
