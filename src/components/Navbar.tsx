import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="container-max h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <div className="w-14 h-14 flex items-center justify-center bg-primary text-white rounded-lg shadow-sm overflow-hidden border border-slate-200">
            <img 
              src="https://lh3.googleusercontent.com/aida/ADBb0ui-CBFiJrT-yMleHrNrRjcdkJfvUGdAudBR3x-3lgb9EaAIE62gW8Yx2mgoKi75bmEV8kQtZ8iCdl_UqfD6-t0RS-luowzz5YTUKWd9RUzqHegLo682Q4DrnsKAOz3zxt0kkibcj6YoT9ydcdU2-r46cCx6TFQoev2FRaLTjPSWCukPCRaw736gXaJ9vWn2TBR8wWfjmXTN0UyVhiqZtDIFtUCTjdmsIkSdtyJ3SyWUyUNw8FFvZuRBCFM-odSkGSqh6i-uopzbcw" 
              alt="Acuris Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-3xl font-black text-primary tracking-tighter uppercase whitespace-nowrap">
            ACURIS MED AI
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-slate-600 hover:text-secondary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#demo"
            className="bg-primary text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-slate-800 transition-all shadow-sm animate-pulse-glow"
          >
            Request Demo
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-on-surface" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-outline-variant p-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="body-lg font-medium text-on-surface-variant"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#demo"
              className="bg-action-blue text-white px-5 py-3 rounded-default font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              Request Demo
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
