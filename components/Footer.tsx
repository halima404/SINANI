"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111111] px-6 md:px-8 pt-20 pb-8">
      <div className="max-w-7xl mx-auto">

        {/* Logo centré */}
        <div className="flex justify-center mb-10">
          <Link href="/">
            <Image
              src="/images/Blanc.png"
              alt="SINANI"
              width={160}
              height={64}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Tagline centrée */}
        <p
          className="text-center mb-12"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(16px, 2vw, 20px)",
            fontWeight: "400",
            lineHeight: "1.6",
            color: "rgba(255,255,255,0.5)",
            maxWidth: "500px",
            margin: "0 auto 48px",
          }}
        >
          Incubateur audiovisuel & agence de publicité.
          <br />
          Conakry, Guinée.
        </p>

        {/* Réseaux sociaux — centré, horizontal */}
        <div className="flex justify-center gap-5 mb-14">
          {[
            { label: "Instagram", href: "https://instagram.com" },
            { label: "Facebook", href: "https://facebook.com" },
            { label: "LinkedIn", href: "https://linkedin.com" },
            { label: "YouTube", href: "https://youtube.com" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: "500",
                color: "rgba(255,255,255,0.45)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#E84010"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.45)"; }}
            >
              {s.label}
            </a>
          ))}
        </div>

        {/* Ligne de séparation */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} />

        {/* Copyright */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>
            © {new Date().getFullYear()} SINANI. Tous droits réservés.
          </p>
          <a
            href="mailto:contact@sinani.gn"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.25)", textDecoration: "none" }}
          >
            contact@sinani.gn
          </a>
        </div>

      </div>
    </footer>
  );
}
