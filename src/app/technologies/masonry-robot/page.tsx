import Image from 'next/image';
import { ArrowRight, Bot, CheckCircle2, Zap, ShieldCheck, Gauge, Cpu, Leaf, Smartphone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ParallaxBackground, ParallaxText } from '@/components/parallax';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Masonry Robot | Craftmac Labs',
  description: 'Automated masonry robotics featuring Integrated Block-Mortar Applicator and Humanoid Block Loading systems.',
  openGraph: { images: ['/images/integrated-applicator.png'] },
};

const robotModels = [
  {
    title: 'Integrated Block-Mortar Applicator - 2026',
    speed: 'Construction Speed - 90 Blocks/ Hour',
    image: '/images/integrated-applicator.png',
    alt: 'Integrated Block-Mortar Applicator',
    badge: 'Available 2026',
    features: [
      {
        title: 'Compact',
        description: 'Passes through standard door openings.',
        icon: ShieldCheck,
      },
      {
        title: 'Floor Mobile',
        description: 'Construct internal and external walls on any floor level.',
        icon: Gauge,
      },
      {
        title: 'Autonomous',
        description: 'Seamless construction of walls with door and window openings.',
        icon: Bot,
      },
      {
        title: 'Green Construction',
        description: 'Negligible construction waste.',
        icon: Leaf,
      },
    ],
  },
  {
    title: 'Humanoid Block Loading - Vision 2027',
    speed: 'Construction Speed - 135 Blocks/ Hour',
    image: '/images/humanoid-loading.png',
    alt: 'Humanoid Block Loading Masonry Robot',
    badge: 'Vision 2027',
    features: [
      {
        title: 'Portable',
        description: 'Light weight and remote controlled for floor-to-floor movements.',
        icon: Zap,
      },
      {
        title: 'Remote Supervision',
        description: 'Digital management of onsite construction.',
        icon: Smartphone,
      },
      {
        title: 'Zero Emissions',
        description: 'Entirely run on electricity with battery backup.',
        icon: Leaf,
      },
      {
        title: 'Industry 4.0',
        description: 'Fully integrated digital construction workflow.',
        icon: Cpu,
      },
    ],
  },
];

export default function MasonryRobotPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-center overflow-hidden">
        <ParallaxBackground>
          <Image
            src="/images/construction-banner.png"
            alt="Masonry Robot Banner"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </ParallaxBackground>
        <ParallaxText className="relative z-10 container mx-auto px-4 pointer-events-none">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg tracking-tight">
            Masonry Robot
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-slate-300 drop-shadow-md">
            Next-generation automated wall construction solutions engineered by Craftsmac Labs.
          </p>
        </ParallaxText>
      </section>

      {/* Robot Models Showcase with Features Below Each Image */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {robotModels.map((model) => (
              <Card
                key={model.title}
                className="overflow-hidden border border-border bg-card hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Robot Image Header */}
                <div className="relative w-full h-[450px] bg-muted/40 flex items-center justify-center p-4">
                  <Image
                    src={model.image}
                    alt={model.alt}
                    fill
                    className="object-contain p-4 hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    {model.badge}
                  </div>
                </div>

                {/* Model Title & Speed */}
                <div className="p-6 text-center bg-card border-b border-border/40">
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">
                    {model.title}
                  </h3>
                  <p className="text-base md:text-lg font-semibold text-foreground/90 bg-primary/10 py-1.5 px-4 rounded-full inline-block">
                    {model.speed}
                  </p>
                </div>

                {/* Features Directly Below Each Photo */}
                <CardContent className="p-6 flex-1 bg-background/50 space-y-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                    Key Features & Capabilities
                  </h4>
                  <div className="space-y-4">
                    {model.features.map((feature) => (
                      <div key={feature.title} className="flex items-start gap-3">
                        <div className="p-1.5 rounded-full bg-primary/10 text-primary flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm md:text-base font-semibold text-primary">
                            {feature.title}{' '}
                            <span className="font-normal text-muted-foreground">
                              - {feature.description}
                            </span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Transform Onsite Masonry Construction</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Partner with Craftsmac Labs to integrate automated masonry robotics into your construction projects.
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
