import Image from 'next/image';
import { Factory, Warehouse, HeartPulse, Truck } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
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
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Vehicle & Factory Robotics</h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Highly customizable solutions to streamline operations, enhance productivity, and optimize safety across various industries.
              </p>
            </div>
            <div>
              <Image
                src="https://drive.usercontent.google.com/download?id=1OOZHKc77k7gvXSEQ2zPjeX7nvPL62tWW"
                alt="Factory Robot Diagram"
                width={600}
                height={500}
                className="mx-auto"
                data-ai-hint="factory robot"
              />
            </div>
          </div>
        </div>
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
              <Card key={app.title} className="text-center">
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Let's Build Your Custom Solution</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you need to automate a single process or an entire facility, our team has the expertise to deliver.
            </p>
            <Button size="lg" asChild>
                <Link href="/contact">
                    Schedule a Consultation
                </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}