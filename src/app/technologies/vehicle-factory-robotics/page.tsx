import Image from 'next/image';
import { Factory, Warehouse, HeartPulse, Truck, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ParallaxBackground, ParallaxText } from '@/components/parallax';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const applications = [
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Automate assembly lines, material handling, and quality control checks to boost production rates.',
  },
  {
    icon: Warehouse,
    title: 'Warehousing & Logistics',
    description: 'Streamline order picking, packing, and sorting with autonomous mobile robots (AMRs).',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare',
    description: 'Assist with lab automation, medical supply transport, and sanitation in clinical environments.',
  },
  {
    icon: Truck,
    title: 'Autonomous Vehicles',
    description: 'Develop and integrate custom robotics for last-mile delivery and specialized transport solutions.',
  },
];


export default function FactoryRoboticsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-center overflow-hidden">
        <ParallaxBackground>
          <Image
            src="https://drive.usercontent.google.com/download?id=1OOZHKc77k7gvXSEQ2zPjeX7nvPL62tWW"
            alt="Factory Robotics"
            fill
            className="object-cover opacity-30"
            data-ai-hint="factory robot"
          />
          <div className="absolute inset-0 bg-black/50" />
        </ParallaxBackground>
        <ParallaxText className="relative z-10 container mx-auto px-4 pointer-events-none">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">Vehicle & Factory Robotics</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-slate-300 drop-shadow-md">
            Customizable solutions to streamline operations, enhance productivity, and optimize safety.
          </p>
        </ParallaxText>
      </section>
      
      {/* Applications Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold">Wide Range of Applications</h2>
            <p className="text-lg text-muted-foreground mt-4">
              Our versatile robotics platforms can be adapted to meet the specific needs of your industry.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app) => (
              <Card key={app.title} className="text-center bg-background">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit mb-4">
                    <app.icon className="h-8 w-8" />
                  </div>
                  <CardTitle>{app.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{app.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Let's Build Your Custom Solution</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Whether you need to automate a single process or an entire facility, our team has the expertise to deliver.
            </p>
            <Button size="lg" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link href="/contact">
                    Schedule a Consultation <ArrowRight className="ml-2" />
                </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
