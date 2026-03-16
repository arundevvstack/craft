import { ArrowRight, BrainCircuit, Bot, Factory } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const processSteps = [
    {
        icon: BrainCircuit,
        title: 'Concept & Research',
        description: 'We start by understanding your unique challenges and goals. Our team conducts in-depth research to ideate and conceptualize the most effective robotics and automation solutions.',
    },
    {
        icon: Bot,
        title: 'Design & Prototype',
        description: 'Leveraging cutting-edge technology, we design and build functional prototypes. This iterative process allows us to refine the mechanics, electronics, and software for optimal performance.',
    },
    {
        icon: Factory,
        title: 'Production & Integration',
        description: 'Once the prototype is perfected, we move to production. We manufacture the final product and ensure seamless integration into your existing workflow for a smooth transition.',
    },
];

export default function RdaasPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase text-primary mb-3">RDaaS</p>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Research & Development as a Service</h1>
              <p className="text-lg text-muted-foreground">
                From concept to prototype to a full-scale production version, we provide state-of-the-art solutions in industrial robotics and automation to transform your workspace.
              </p>
            </div>
            <div>
              <Image
                src="https://drive.usercontent.google.com/download?id=1UMP8RJsRaGAlcaVYHqQhLB1p05zKZKMI"
                alt="RDaaS Process Diagram"
                width={600}
                height={500}
                className="mx-auto"
                data-ai-hint="process diagram"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold">Our Proven Process</h2>
            <p className="text-lg text-muted-foreground mt-4">
              We follow a structured and transparent process to take your ideas from a simple concept to a fully operational, production-ready machine.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <Card key={step.title} className="text-center">
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
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our RDaaS model can help you innovate and stay ahead of the competition.
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