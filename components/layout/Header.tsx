'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/solutions', label: 'Solutions' },
    { href: '/industries', label: 'Industries' },
    { href: '/workshop', label: 'Workshop' },
    { href: '/about', label: 'About' }
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-white"
      )}
    >
      <Container size="2xl">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="font-serif text-3xl font-semibold text-[#025082] group-hover:text-[#023d63] transition-colors">
              R²
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-base font-medium transition-colors relative group",
                  pathname === link.href
                    ? "text-[#025082]"
                    : "text-gray-600 hover:text-[#025082]"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-[#025082] transition-all",
                    pathname === link.href
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            ))}

            <Button asChild size="sm" variant="primary">
              <Link href="/contact">Contact</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-[#025082]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

        </div>
      </Container>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <Container size="2xl">
            <nav className="py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block text-lg font-medium transition-colors",
                    pathname === link.href
                      ? "text-[#025082]"
                      : "text-gray-600 hover:text-[#025082]"
                  )}
                >
                  {link.label}
                </Link>
              ))}

              <Button asChild size="md" variant="primary" className="w-full">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact
                </Link>
              </Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
