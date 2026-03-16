'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Construction,
  Zap,
  Factory,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
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
      {
        href: '/technologies/construction-robotics',
        label: 'Construction Robotics',
        description: 'Revolutionizing the industry with automation.',
        icon: Construction,
      },
      {
        href: '/technologies/advanced-actuators',
        label: 'Advanced Actuators',
        description: 'High-precision, lightweight, and rugged actuators.',
        icon: Zap,
      },
      {
        href: '/technologies/vehicle-factory-robotics',
        label: 'Vehicle & Factory Robotics',
        description: 'Custom solutions to streamline operations.',
        icon: Factory,
      },
    ],
  },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
            <DropdownMenuContent className="w-96 p-2 bg-background border-border">
              <DropdownMenuLabel className="px-2 pt-1 pb-2 text-sm font-medium text-muted-foreground">
                Technologies
              </DropdownMenuLabel>
              {link.dropdownItems?.map((item) => (
                <DropdownMenuItem
                  key={item.href}
                  asChild
                  className="p-0 cursor-pointer"
                >
                  <Link
                    href={item.href}
                    className="block w-full p-2 rounded-md hover:bg-accent focus:bg-accent focus:outline-none"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-muted">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-semibold text-foreground flex items-center">
                          {item.label}
                          <ChevronRight className="h-4 w-4 ml-1 opacity-70" />
                        </p>
                        <p className="text-sm text-muted-foreground leading-snug">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Link>
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
        'sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm'
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
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
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
