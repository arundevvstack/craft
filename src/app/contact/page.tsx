import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { InstagramIcon, LinkedInIcon, TwitterIcon, YouTubeIcon } from '@/components/icons';

const socialLinks = [
  { name: 'LinkedIn', icon: LinkedInIcon, href: '#' },
  { name: 'Twitter', icon: TwitterIcon, href: '#' },
  { name: 'YouTube', icon: YouTubeIcon, href: '#' },
  { name: 'Instagram', icon: InstagramIcon, href: '#' },
];


export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We’d love to hear from you. Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="bg-card p-8 rounded-lg shadow-sm">
            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
            <ContactForm />
          </div>

          <div className="space-y-8">
             <h2 className="text-3xl font-bold">Contact Information</h2>
            <div className="space-y-6 text-lg">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Our Address</h3>
                    <p className="text-muted-foreground">
                      IX/412 C1, Infopark Road, Kusumagiri P.O., Kakkanad, Kochi, Kerala 682030, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a href="mailto:rdaas@craftsmac.com" className="text-muted-foreground hover:text-primary transition-colors">rdaas@craftsmac.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <a href="tel:+919746206802" className="text-muted-foreground hover:text-primary transition-colors">+91-9746206802</a>
                  </div>
                </div>
            </div>
             <div className="pt-8 border-t">
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full bg-card hover:bg-accent"
                  >
                    <social.icon className="h-6 w-6" />
                    <span className="sr-only">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}