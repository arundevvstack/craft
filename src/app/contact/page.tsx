import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { LinkedInIcon, YouTubeIcon } from '@/components/icons';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Craftmac Labs',
  description: 'Get in touch with Craftmac Labs to schedule a consultation or inquire about our robotics engineering services.',
};

export default function ContactPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background z-0" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-30 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
              Let's Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Future</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              We’re ready to answer your questions, discuss your next big project, and explore how our robotics engineering services can help you innovate.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Cards Grid */}
      <div className="container mx-auto px-4 pb-32 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Email Card */}
          <a href="mailto:rdaas@craftsmac.com" className="group">
            <div className="h-full bg-card/50 backdrop-blur-sm border border-border/50 p-10 rounded-3xl shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-transform duration-300">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Email Us</h3>
              <p className="text-muted-foreground mb-6 flex-grow">
                For general inquiries, project proposals, and partnerships.
              </p>
              <div className="flex items-center text-primary font-medium">
                rdaas@craftsmac.com
                <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            </div>
          </a>

          {/* Phone Card */}
          <a href="tel:+919746206802" className="group">
            <div className="h-full bg-card/50 backdrop-blur-sm border border-border/50 p-10 rounded-3xl shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-transform duration-300">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Call Us</h3>
              <p className="text-muted-foreground mb-6 flex-grow">
                Speak directly with our engineering and support team.
              </p>
              <div className="flex items-center text-primary font-medium">
                +91-9746206802
                <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            </div>
          </a>

          {/* Location Card */}
          <div className="group">
            <div className="h-full bg-card/50 backdrop-blur-sm border border-border/50 p-10 rounded-3xl shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Visit Us</h3>
              <p className="text-muted-foreground mb-6 flex-grow">
                IX/412 C1, Infopark Road,<br/>
                Kusumagiri P.O., Kakkanad,<br/>
                Kochi, Kerala 682030, India
              </p>
              <div className="flex items-center text-primary font-medium">
                HQ Office
              </div>
            </div>
          </div>

        </div>

        {/* Social Connect */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl font-bold mb-8">Connect With Us</h2>
          <div className="flex justify-center items-center space-x-6">
            <a
              href="https://www.linkedin.com/company/craftsmaclabs"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center group-hover:bg-[#0A66C2] group-hover:border-[#0A66C2] transition-colors duration-300">
                <LinkedInIcon className="w-8 h-8 text-foreground group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="mt-3 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">LinkedIn</span>
            </a>
            
            <a
              href="https://www.youtube.com/@craftsmaclabs"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center group-hover:bg-[#FF0000] group-hover:border-[#FF0000] transition-colors duration-300">
                <YouTubeIcon className="w-8 h-8 text-foreground group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="mt-3 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">YouTube</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
