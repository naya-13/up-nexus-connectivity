
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-nexus-dark/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container max-w-7xl px-4 sm:px-8 mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className="text-nexus-light font-space font-bold text-xl">
              <span className="text-nexus-purple">Up</span>-Nexus
            </span>
          </a>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#announcements" className="text-nexus-light/80 hover:text-nexus-light transition-colors">
              Announcements
            </a>
            <a href="#ecosystem" className="text-nexus-light/80 hover:text-nexus-light transition-colors">
              Ecosystem
            </a>
            <a href="#news" className="text-nexus-light/80 hover:text-nexus-light transition-colors">
              News
            </a>
            <a href="#about" className="text-nexus-light/80 hover:text-nexus-light transition-colors">
              About
            </a>
          </nav>
          
          {/* CTA buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-white/10 hover:bg-white/20 text-nexus-light rounded-full px-5">
              Sign In
            </Button>
            <Button className="cta-primary">
              Join Now
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="text-nexus-light"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-nexus-dark/95 backdrop-blur-lg border-t border-border/30">
          <div className="container py-4 px-4 space-y-4">
            <a
              href="#announcements"
              className="block py-2 text-nexus-light/80 hover:text-nexus-light transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Announcements
            </a>
            <a
              href="#ecosystem"
              className="block py-2 text-nexus-light/80 hover:text-nexus-light transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Ecosystem
            </a>
            <a
              href="#news"
              className="block py-2 text-nexus-light/80 hover:text-nexus-light transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              News
            </a>
            <a
              href="#about"
              className="block py-2 text-nexus-light/80 hover:text-nexus-light transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <div className="pt-4 flex flex-col space-y-3">
              <Button className="bg-white/10 hover:bg-white/20 text-nexus-light w-full justify-center">
                Sign In
              </Button>
              <Button className="cta-primary w-full justify-center">
                Join Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
