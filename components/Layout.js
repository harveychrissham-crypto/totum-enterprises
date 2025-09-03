// components/Layout.js
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useState, useEffect } from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

// Branch settings
const brands = {
  home: {
    name: "Totum Enterprises",
    logo: "/totum-enterprises-logo.png",
    link: "/",
  },
  education: {
    name: "Totum Education",
    logo: "/totum-education-logo.png",
    link: "/education",
  },
  podcast: {
    name: "Totum Podcast",
    logo: "/totum-podcast-logo.png",
    link: "/podcast",
  },
  tech: {
    name: "Totum Tech",
    logo: "/totum-tech-logo.png",
    link: "/tech",
  },
  finance: {
    name: "Totum Finance",
    logo: "/totum-finance-logo.png",
    link: "/finance",
  },
  health: {
    name: "Totum Health",
    logo: "/totum-health-logo.png",
    link: "/health",
  },
  "coming-soon": {
    name: "More Branches",
    logo: "/totum-enterprises-logo.png",
    link: "/coming-soon",
  },
};

// Branch theme colors
const branchColors = {
  home: "bg-yellow-400 hover:bg-yellow-500",
  education: "bg-indigo-400 hover:bg-indigo-500",
  podcast: "bg-pink-400 hover:bg-pink-500",
  tech: "bg-sky-400 hover:bg-sky-500",
  finance: "bg-green-400 hover:bg-green-500",
  health: "bg-red-400 hover:bg-red-500",
  "coming-soon": "bg-gray-400 hover:bg-gray-500",
};

const orderedBrands = [
  "home",
  "education",
  "podcast",
  "tech",
  "finance",
  "health",
  "coming-soon",
];

export default function TotumEnterprisesLayout({ children, page }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const brand = brands[page] || brands.home;

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
      setScrolled(scrollTop > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Page title + favicon
  useEffect(() => {
    document.title = `${brand.name} | Totum Enterprises`;
    const favicon = document.querySelector("link[rel='icon']") || document.createElement("link");
    favicon.rel = "icon";
    favicon.href = brand.logo;
    document.head.appendChild(favicon);
  }, [brand]);

  // Navbar classes
  const navClasses = `sticky top-0 z-50 flex items-center justify-between px-6 py-4 text-white transition-all duration-300 ${
    scrolled ? "bg-blue-950 shadow-lg" : "bg-blue-900 shadow-md"
  }`;

  // Progress bar color
  const progressBarColor =
    {
      home: "bg-yellow-400",
      education: "bg-indigo-400",
      podcast: "bg-pink-400",
      tech: "bg-sky-400",
      finance: "bg-green-400",
      health: "bg-red-400",
      "coming-soon": "bg-gray-400",
    }[page] || "bg-yellow-400";

  // Link styling
  const linkClass = (name, isMobile = false) => {
    if (page === name) {
      return `px-3 py-2 rounded-lg text-white font-semibold text-center ${branchColors[name]}`;
    }
    return isMobile
      ? "text-gray-700 hover:text-blue-800 px-3 py-2 rounded-lg"
      : "hover:underline hover:underline-offset-4";
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Navbar */}
      <nav className={navClasses}>
        {/* Scroll progress bar */}
        <div
          className={`absolute top-0 left-0 h-1 ${progressBarColor} transition-all duration-100`}
          style={{ width: `${scrollProgress}%` }}
        />

        {/* Logo + Title */}
        <Link href="/" className="flex items-center space-x-2 relative z-10">
          <Image
            src={brand.logo}
            alt={`${brand.name} Logo`}
            width={40}
            height={40}
            className="hover:scale-105 transition-transform"
          />
          <span className="text-lg font-semibold hover:text-yellow-300 transition-colors">
            {page === "home" ? "Totum Enterprises" : brand.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-6 text-sm relative z-10">
          {orderedBrands
            .filter((b) => !(page === "home" && b === "home"))
            .map((key) => (
              <Link key={key} href={brands[key].link} className={linkClass(key)}>
                {brands[key].name}
              </Link>
            ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white text-2xl relative z-10"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile nav */}
      <div
        className={`md:hidden absolute top-[64px] left-0 w-full bg-white shadow-md flex flex-col p-4 space-y-2 z-40 transform transition-all duration-300 ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        {orderedBrands.map((key) => (
          <Link
            key={key}
            href={brands[key].link}
            className={linkClass(key, true)}
            onClick={() => setMenuOpen(false)}
          >
            {brands[key].name}
          </Link>
        ))}
      </div>

      {/* Page Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-600 text-sm bg-gray-100 mt-20">
        <div className="mb-4">
          © {new Date().getFullYear()}{" "}
          <Link href="/" className="hover:text-blue-700 font-semibold">
            Totum Enterprises
          </Link>
          . All rights reserved.
        </div>

        {/* Quick Links */}
        <div className="flex justify-center space-x-6 mb-4 text-gray-500 text-xs">
          {orderedBrands.map((key) => (
            <Link
              key={key}
              href={brands[key].link}
              className="hover:text-blue-700"
            >
              {brands[key].name}
            </Link>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-500"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600"
          >
            <Youtube size={20} />
          </a>
        </div>
      </footer>
    </div>
  );
}
