import Image from 'next/image';
import { Wrench, Paintbrush, ArrowRight, CheckCircle2, Zap, Send, Construction } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const features = [
  { text: 'High Repeatability', icon: Wrench },
  { text: 'High Speed', icon: Send },
  { text: 'Zero Emission – Fully Electric', icon: Zap },
  { text: 'Enhanced Worker Safety', icon: CheckCircle2 },
  { text: 'Consistent Quality Finish', icon: CheckCircle2 },
  { text: 'Reduced Project Timelines', icon: CheckCircle2 },
];

export default function ConstructionRoboticsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://drive.usercontent.google.com/download?id=1chuGVBKhe_6IpAb80Dty-8PUZvOhifoJ"
            alt="Construction Robotics"
            fill
            className="object-cover opacity-30"
            data-ai-hint="construction robot"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Construction Robotics</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-slate-300">
            Revolutionizing the industry with automated masonry and painting solutions.
          </p>
        </div>
      </section>

      {/* Robots Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold">Our Robotic Solutions</h2>
            <p className="text-lg text-muted-foreground mt-4">
              Precision engineering for the modern construction site.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Masonry Robot */}
            <Card className="text-center bg-background">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit mb-4">
                  <Construction className="h-12 w-12" />
                </div>
                <CardTitle className="text-3xl">Masonry Robot</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">
                  Automates the bricklaying process, ensuring structural integrity and speed. Builds walls with precision, reducing manual labor and material waste.
                </p>
              </CardContent>
            </Card>
            {/* Painting Robot */}
            <Card className="text-center bg-background">
              <CardHeader>
                 <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit mb-4">
                  <Paintbrush className="h-12 w-12" />
                </div>
                <CardTitle className="text-3xl">Painting Robot</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">
                  Provides a flawless and even coat of paint on any surface. Capable of reaching difficult areas safely and completing jobs in a fraction of the time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features/Benefits Section */}
      <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl font-bold">Advantages & Features</h2>
                <p className="text-lg text-muted-foreground mt-4">
                    Our construction robots are engineered to deliver superior results while optimizing for safety and speed.
                </p>
              </div>
              <div className="max-w-4xl mx-auto">
                 <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature) => (
                      <li key={feature.text} className="flex items-center gap-4 bg-card p-4 rounded-lg">
                        <feature.icon className="h-8 w-8 text-primary flex-shrink-0" />
                        <span className="text-lg font-semibold">
                          {feature.text}
                        </span>
                      </li>
                    ))}
                 </ul>
              </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Build the Future, Today.</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Discover how our construction robotics can fit into your next project.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            <Link href="/contact">
              Inquire Now <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
