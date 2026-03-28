import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ParallaxBackground, ParallaxText } from '@/components/parallax';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const masonryFeatures = [
  'Compact Design',
  'Mobile construction robot- Omnidirectional',
  'Payload versatility',
  'High payload to weight ratio',
];

export default function ConstructionRoboticsPage() {
  const masonryRobotImage = {
    imageUrl: '/images/masonry-robot.jpg',
    imageHint: 'Masonry Robot on site',
  };
  const paintingRobotImage = {
    imageUrl: '/images/painting-robot.jpg',
    imageHint: 'Painting Robot close up',
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-center overflow-hidden">
        <ParallaxBackground>
          <Image
            src="/images/construction-banner.png"
            alt="Construction Robotics"
            fill
            className="object-cover"
            data-ai-hint="construction robot"
          />
          <div className="absolute inset-0 bg-black/50" />
        </ParallaxBackground>
        <ParallaxText className="relative z-10 container mx-auto px-4 pointer-events-none">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">Construction Robotics</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-slate-300 drop-shadow-md">
            Revolutionizing the industry with automated masonry and painting solutions.
          </p>
        </ParallaxText>
      </section>

      {/* Masonry Robot Section */}
      <section className="min-h-screen flex items-center bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4">Masonry Robot</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Craftsmac labs deployed first of its kind masonry robot in 2020. Product is in final stages of trials. Robotics for masonry robot is developed from scratch by Craftsmac labs.
              </p>
              <h3 className="text-2xl font-bold mt-8 mb-4">Critical features and specifications of the robot are:</h3>
              <ul className="space-y-3">
                {masonryFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-lg text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2">
              {masonryRobotImage && (
                <Image
                  src={masonryRobotImage.imageUrl}
                  alt="Masonry Robot"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                  data-ai-hint={masonryRobotImage.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Painting Robot Section */}
      <section className="min-h-screen flex items-center bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
             <div>
              {paintingRobotImage && (
                <Image
                  src={paintingRobotImage.imageUrl}
                  alt="Painting Robot"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                  data-ai-hint={paintingRobotImage.imageHint}
                />
              )}
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Painting Robot</h2>
              <p className="text-muted-foreground text-lg">
                Initial field trials of wall painting robot completed successfully. Craftsmac labs has developed robotics technologies essential for construction industries. These technologies can be used to develop any solutions for the construction industry. Research capability and solutions developed by company since 2014 can be leveraged to deliver automation and robotics solution to the construction industry.
              </p>
            </div>
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
