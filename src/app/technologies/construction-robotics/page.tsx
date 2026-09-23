import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ParallaxBackground, ParallaxText } from '@/components/parallax';
import Link from 'next/link';

const masonryModels = [
  {
    title: 'Integrated Block-Mortar Applicator',
    timeline: '2026',
    speed: '90 Blocks/ Hour',
    imageUrl: '/images/integrated-applicator.png',
    features: [
      {
        title: 'Compact',
        description: 'Passes through standard door openings.',
      },
      {
        title: 'Floor Mobile',
        description: 'Construct internal and external walls on any floor level.',
      },
      {
        title: 'Autonomous',
        description: 'Seamless construction of walls with door and window openings.',
      },
      {
        title: 'Green Construction',
        description: 'Negligible construction waste.',
      },
    ],
  },
  {
    title: 'Humanoid Block Loading',
    timeline: 'Vision 2027',
    speed: '135 Blocks/ Hour',
    imageUrl: '/images/humanoid-loading.png',
    features: [
      {
        title: 'Portable',
        description: 'Light weight and remote controlled for floor-to-floor movements.',
      },
      {
        title: 'Remote Supervision',
        description: 'Digital management of onsite construction.',
      },
      {
        title: 'Zero Emissions',
        description: 'Entirely run on electricity with battery backup.',
      },
      {
        title: 'Industry 4.0',
        description: 'Advanced connected smart construction robotics.',
      },
    ],
  },
];

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Robotics',
  description: 'Revolutionizing the industry with automated masonry and painting robotic solutions. Built rugged for construction sites.',
  openGraph: { images: ['/images/construction-banner.png'] },
};

export default function ConstructionRoboticsPage() {
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Masonry Robot</h2>
            <p className="text-muted-foreground text-lg">
              Craftsmac Labs deployed first of its kind masonry robot in 2020. Product is in final stages of trials. Robotics for masonry robot is developed from scratch by Craftsmac Labs.
            </p>
          </div>

          {/* Side by Side Robot Models & Features Below Each Photo */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {masonryModels.map((model) => (
              <div key={model.title} className="bg-card rounded-2xl border p-6 md:p-8 flex flex-col shadow-md hover:shadow-xl transition-all">
                {/* Robot Photo */}
                <div className="relative w-full h-[400px] mb-6 rounded-xl overflow-hidden bg-muted/30 border flex items-center justify-center">
                  <Image
                    src={model.imageUrl}
                    alt={model.title}
                    fill
                    className="object-contain p-3"
                  />
                </div>

                {/* Title & Speed Labels */}
                <div className="text-center mb-6 pb-6 border-b">
                  <div className="inline-block bg-primary/10 text-primary font-bold px-4 py-1 rounded-full text-xs tracking-wide uppercase mb-2">
                    {model.timeline}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                    {model.title} - {model.timeline}
                  </h3>
                  <p className="text-primary font-semibold text-lg">
                    Construction Speed: <span className="font-extrabold">{model.speed}</span>
                  </p>
                </div>

                {/* Features Section Below Photo */}
                <div>
                  <h4 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary inline-block"></span>
                    Features
                  </h4>
                  <ul className="space-y-4">
                    {model.features.map((feat) => (
                      <li key={feat.title} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-foreground">{feat.title}</span>
                          <span className="text-muted-foreground"> - {feat.description}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Painting Robot Section */}
      <section className="py-20 bg-card border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
             <div>
              {paintingRobotImage && (
                <Image
                  src={paintingRobotImage.imageUrl}
                  alt="Painting Robot"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
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
