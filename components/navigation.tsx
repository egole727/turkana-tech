"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/why-us", label: "Why Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <span className="font-bold text-xl">TurkanaTech</span>
        </Link>

        <div className="hidden md:flex items-center space-x-4">
          {navItems.map(({ href, label }) => (
            <Link key={href} href={href}>
              <Button
                variant="ghost"
                className={cn(
                  "relative",
                  pathname === href &&
                    "text-blue-600 dark:text-blue-400 font-medium"
                )}
              >
                {label}
                {pathname === href && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-600 dark:bg-blue-400"
                    layoutId="navbar-underline"
                  />
                )}
              </Button>
            </Link>
          ))}
          <ThemeToggle />
          <Button>Get in Touch</Button>
        </div>

        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </Button>
      </nav>

      {/* Mobile menu dropdown */}
      <motion.div
        className={cn(
          "md:hidden overflow-hidden",
          isScrolled
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
            : "bg-white dark:bg-gray-900"
        )}
        initial="closed"
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { height: "auto", opacity: 1 },
          closed: { height: 0, opacity: 0 }
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
          {navItems.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setIsMobileMenuOpen(false)}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start",
                  pathname === href &&
                    "text-blue-600 dark:text-blue-400 font-medium"
                )}
              >
                {label}
              </Button>
            </Link>
          ))}
          <div className="flex items-center justify-between px-2">
            <ThemeToggle />
            <Button className="flex-1 ml-4">Get in Touch</Button>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}