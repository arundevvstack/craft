import {
  ArrowRight,
  BrainCircuit,
  Bot,
  Cpu,
  Wrench,
  Zap,
  Code,
  Rocket,
  ClipboardCheck,
  BadgeCheck,
  Factory,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ParallaxBackground, ParallaxText } from '@/components/parallax';

const processSteps = [
  {
    icon: BrainCircuit,
    title: 'Concept',
    description:
      'We start by understanding your unique challenges and goals, laying the groundwork for innovative solutions.',
  },
  {
    icon: Bot,
    title: 'Research & Development',
    description:
      'Our team conducts in-depth research and development, leveraging cutting-edge technology to create effective solutions.',
  },
  {
    icon: Rocket,
    title: 'Rapid Prototyping',
    description:
      'We build functional prototypes, allowing for iterative testing and refinement to ensure optimal performance.',
  },
  {
    icon: ClipboardCheck,
    title: 'Trials and Validation',
    description: 'Rigorous testing and validation cycles to ensure the solution meets all specifications and quality standards.',
  },
  {
    icon: BadgeCheck,
    title: 'Certification',
    description: 'We assist with the necessary certification processes to ensure your product is compliant and market-ready.',
  },
  {
    icon: Factory,
    title: 'Pilot and Series',
    description: 'From pilot programs to full-scale series production, we support you in scaling up your operations.',
  },
  {
    icon: Wrench,
    title: 'Service and Maintenance',
    description: 'Providing ongoing support, service, and maintenance to ensure the longevity and performance of your machines.',
  },
];

const engineeringCapabilities = [
  {
    icon: Cpu,
    title: 'Electronics',
  },
  {
    icon: Wrench,
    title: 'Mechanical',
  },
  {
    icon: Zap,
    title: 'Electrical',
  },
  {
    icon: Code,
    title: 'Programming',
  },
];

export default function RdaasPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 bg-background flex items-center min-h-[60vh] overflow-hidden">
        <ParallaxBackground>
          <img
            src="/images/rdaas-page-diagram.jpg"
            alt="RDaaS Process Background"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-background/50 z-10" />
        </ParallaxBackground>
        <ParallaxText className="container mx-auto px-4 relative z-20 pointer-events-none">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-primary mb-3 drop-shadow-sm">
              RDaaS
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-sm">
              Research & Development as a Service
            </h1>
            <p className="text-xl font-medium text-foreground mb-4 drop-shadow-sm">
              Concept to prototype to production version. We provide
              state-of-the-art solutions in industrial robotics and automation
              to transform your workspace.
            </p>
          </div>
        </ParallaxText>
      </section>

      {/* Proven Engineering Capabilities Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold">
              Proven Engineering Capabilities
            </h2>
            <p className="text-lg text-muted-foreground mt-4">
              Inter-disciplinary engineering team with proven capabilities in
              engineering sciences.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {engineeringCapabilities.map((capability) => (
              <div
                key={capability.title}
                className="text-center flex flex-col items-center"
              >
                <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit mb-4">
                  <capability.icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold">{capability.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Core Competency Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/custom-engineering.jpg"
                alt="Custom engineering solutions"
                width={600}
                height={450}
                className="rounded-lg mx-auto"
                data-ai-hint="engineering components collage"
              />
            </div>
            <div>
                <h2 className="text-3xl font-bold mb-4">From Motion to Innovation</h2>
                <p className="text-lg text-muted-foreground">
                    We can research, design and make any thing that has motion and/or anything that can change the form of another thing. Partner with us for new product development, automation of your process and upgradation of your factory floor.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold">Our Process</h2>
            <p className="text-lg text-muted-foreground mt-4">
              We follow a structured and transparent process to take your ideas
              from a simple concept to a fully operational, production-ready
              machine.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <Card key={step.title} className="text-center bg-card">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit mb-4">
                    <step.icon className="h-10 w-10" />
                  </div>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our RDaaS model can help you innovate and stay
            ahead of the competition.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            <Link href="/contact">
              Contact Us Today <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
