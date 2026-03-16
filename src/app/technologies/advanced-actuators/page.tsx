import Image from 'next/image';
import { Zap, Weight, ShieldCheck, Thermometer } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const features = [
  {
    icon: Zap,
    title: 'High Precision',
    description: 'Achieve sub-millimeter accuracy for tasks requiring the utmost precision.',
  },
  {
    icon: Weight,
    title: 'Lightweight Design',
    description: 'Our actuators are built with advanced materials, reducing overall system weight and increasing agility.',
  },
  {
    icon: ShieldCheck,
    title: 'Rugged & Durable',
    description: 'Designed to withstand harsh industrial environments, ensuring long-lasting and reliable operation.',
  },
  {
    icon: Thermometer,
    title: 'Thermal Stability',
    description: 'Advanced thermal management systems prevent overheating and maintain peak performance.',
  },
];

export default function AdvancedActuatorsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Advanced Actuators</h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                The heart of our robotic systems. We develop state-of-the-art, high-precision, lightweight, and rugged actuators designed and developed by in-house capital.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="https://drive.usercontent.google.com/download?id=1CsqWUcBQQ4MACwFlEpwXiuCqtHZ9SCVh"
                alt="Advanced Actuator Diagram"
                width={600}
                height={500}
                className="mx-auto"
                data-ai-hint="actuator diagram"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold">Core Features</h2>
            <p className="text-lg text-muted-foreground mt-4">
              Our actuators are engineered for performance, reliability, and efficiency.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Technical Specifications</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Image 
                src="https://picsum.photos/seed/actuator-spec/600/700"
                alt="Actuator technical drawing"
                width={600}
                height={700}
                className="rounded-lg shadow-md object-cover"
                data-ai-hint="technical drawing"
            />
            <div className="space-y-6 text-lg p-4 bg-card rounded-lg">
                <h3 className="text-2xl font-bold border-b pb-2">Model CSL-A1</h3>
                <div className="flex justify-between"><span>Torque:</span> <span className="font-mono text-foreground">150 Nm</span></div>
                <div className="flex justify-between"><span>Weight:</span> <span className="font-mono text-foreground">2.5 kg</span></div>
                <div className="flex justify-between"><span>Voltage:</span> <span className="font-mono text-foreground">48V DC</span></div>
                <div className="flex justify-between"><span>IP Rating:</span> <span className="font-mono text-foreground">IP67</span></div>
                <div className="flex justify-between"><span>Gear Ratio:</span> <span className="font-mono text-foreground">100:1</span></div>
                <div className="flex justify-between"><span>Communication:</span> <span className="font-mono text-foreground">CAN, EtherCAT</span></div>
                <div className="pt-6">
                    <Button asChild className="w-full" size="lg">
                        <Link href="/contact">Request a Datasheet</Link>
                    </Button>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}