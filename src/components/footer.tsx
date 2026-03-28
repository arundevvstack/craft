import Link from 'next/link';
import { LinkedInIcon, YouTubeIcon } from './icons';

const socialLinks = [
  { name: 'LinkedIn', icon: LinkedInIcon, href: 'https://www.linkedin.com/company/craftsmaclabs' },
  { name: 'YouTube', icon: YouTubeIcon, href: 'https://www.youtube.com/@craftsmaclabs' },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-muted-foreground">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <img src="/images/logo.png" alt="Craftmac Labs Logo" className="h-16 w-auto" />
            </Link>
            <p>Craftsmac Laboratories Pvt. Ltd</p>
            <p className="max-w-xs">
              IX/412 C1, Infopark Road, Kusumagiri P.O., Kakkanad, Kochi, Kerala 682030, India
            </p>
          </div>
          
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="font-headline text-lg font-semibold text-foreground mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>Phone: <a href="tel:+919746206802" className="hover:text-primary transition-colors">+91-9746206802</a></li>
                <li>Email: <a href="mailto:rdaas@craftsmac.com" className="hover:text-primary transition-colors">rdaas@craftsmac.com</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-headline text-lg font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/rdaas" className="hover:text-primary transition-colors">RDaaS</Link></li>
                <li><Link href="/technologies/construction-robotics" className="hover:text-primary transition-colors">Technologies</Link></li>
                <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-headline text-lg font-semibold text-foreground mb-4">Follow Us</h3>
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <social.icon className="h-6 w-6" />
                    <span className="sr-only">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Craftsmac Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
