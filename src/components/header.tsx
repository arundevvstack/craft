'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from './logo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/rdaas', label: 'RDaaS' },
  {
    label: 'Technologies',
    isDropdown: true,
    dropdownItems: [
      { href: '/technologies/construction-robotics', label: 'Construction Robotics' },
      { href: '/technologies/advanced-actuators', label: 'Advanced Actuators' },
      { href: '/technologies/vehicle-factory-robotics', label: 'Vehicle & Factory Robotics' },
    ],
  },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

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

  const NavContent = ({ isMobile = false }) => (
    <nav
      className={cn(
        'flex items-center gap-6 text-sm font-medium',
        isMobile && 'flex-col items-start gap-4 p-6'
      )}
    >
      {navLinks.map((link) =>
        link.isDropdown ? (
          <DropdownMenu key={link.label}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  'flex items-center gap-1 hover:bg-transparent hover:text-primary',
                  'data-[state=open]:text-primary',
                  isMobile && 'justify-between w-full p-0'
                )}
              >
                {link.label} <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background border-border">
              {link.dropdownItems?.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href}>{item.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'transition-colors hover:text-primary',
              pathname === link.href ? 'text-primary' : 'text-foreground',
              isMobile && 'w-full text-lg'
            )}
            onClick={() => isMobile && setIsMobileMenuOpen(false)}
          >
            {link.label}
          </Link>
        )
      )}
    </nav>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center gap-6">
            <NavContent />
          </div>
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background w-[80%]">
                <div className="flex justify-between items-center p-6 border-b border-border">
                  <Logo />
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                    <X />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <NavContent isMobile />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
