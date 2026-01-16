import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Villas", href: "/rooms" },
    { name: "Dining", href: "/dining" },
    { name: "Rooftop", href: "/rooftop" },
    { name: "Experiences", href: "/events" },
    { name: "Boutique", href: "/boutique" },
    { name: "Contact", href: "/contact" },
  ];

  const isHome = location === "/";
  
  const textColorClass = isHome && !scrolled ? "text-white" : "text-foreground";
  const hoverColorClass = isHome && !scrolled ? "hover:text-white/80" : "hover:text-primary";
  const buttonClass = isHome && !scrolled 
    ? "bg-white text-black hover:bg-white/90" 
    : "bg-primary text-primary-foreground hover:bg-primary/90";

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-sans",
        scrolled ? "bg-white shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <a className={cn("text-xl md:text-2xl font-serif font-medium tracking-widest uppercase cursor-pointer transition-colors duration-300", textColorClass)}>
            Lumière <span className="text-xs md:text-sm block md:inline font-sans font-light tracking-[0.3em] opacity-80 mt-1 md:mt-0 md:ml-2">Beach Resort</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className={cn(
                  "text-[10px] lg:text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300",
                  textColorClass,
                  hoverColorClass,
                  location === link.href && (isHome && !scrolled ? "border-b border-white pb-1" : "border-b border-primary pb-1")
                )}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <button className={cn("px-6 lg:px-8 py-3 rounded-none uppercase text-[10px] font-bold tracking-[0.2em] transition-all duration-300", buttonClass)}>
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn("md:hidden transition-colors duration-300", textColorClass)}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white fixed inset-0 z-40 flex flex-col pt-24 px-6"
          >
             <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <a
                    className="text-2xl font-serif text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </Link>
              ))}
              <button className="bg-primary text-white w-full py-4 rounded-none uppercase text-sm font-bold tracking-widest mt-8">
                Book a Stay
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
