import Image from 'next/image';
import { ArrowRight, Bot, Zap, ShieldCheck, Gauge, Cpu, Leaf, Smartphone } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ParallaxBackground, ParallaxText } from '@/components/parallax';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Masonry Robot | Craftmac Labs',
  description: 'Automated masonry robotics featuring Integrated Block-Mortar Applicator and Humanoid Block Loading systems.',
  openGraph: { images: ['/images/2026.png'] },
};

const presentMachineFeatures = [
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

      {/* Robot Showcase Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* 2026 Machine Spotlight */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg mb-16">
            <div className="grid lg:grid-cols-12 gap-0 items-center">
              {/* Machine Image Frame */}
              <div className="lg:col-span-7 relative w-full h-[450px] lg:h-[540px] bg-muted/30 flex items-center justify-center p-6 border-b lg:border-b-0 lg:border-r border-border/40">
                <Image
                  src="/images/2026.png"
                  alt="Masonry Robot with Integrated mortar applicator - 2026"
                  fill
                  className="object-contain p-4 hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute top-6 right-6 bg-primary text-primary-foreground text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-md">
                  Available 2026
                </div>
              </div>

              {/* Machine Header & Speed */}
              <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center space-y-6 text-center lg:text-left">
                <div className="space-y-4">
                  <h2 className="text-3xl lg:text-4xl font-bold text-primary tracking-tight leading-tight">
                    Masonry Robot with Integrated mortar applicator - 2026
                  </h2>
                  <div>
                    <p className="text-base lg:text-lg font-semibold text-foreground/90 bg-primary/10 border border-primary/20 py-2 px-5 rounded-full inline-block">
                      Construction Speed - 90 Blocks/ Hour
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features & Capabilities Grid */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                Key Features & Capabilities
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {presentMachineFeatures.map((feature) => (
                <Card
                  key={feature.title}
                  className="border border-border bg-card hover:border-primary/50 hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between rounded-xl"
                >
                  <div>
                    <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-bold text-primary mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* 2027 Vision Model - Featured Design */}
          <div className="pt-20 border-t border-border/60">
            <div className="bg-gradient-to-br from-card via-card to-primary/5 border border-primary/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="grid lg:grid-cols-12 gap-0 items-center">
                {/* Details Side */}
                <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center space-y-6 text-center lg:text-left order-2 lg:order-1">
                  <div className="space-y-4">
                    <h3 className="text-3xl lg:text-4xl font-bold text-primary tracking-tight leading-tight">
                      Humanoid Block Loading - Vision 2027
                    </h3>
                    <div>
                      <p className="text-base lg:text-lg font-semibold text-foreground/90 bg-primary/10 border border-primary/20 py-2.5 px-6 rounded-full inline-block">
                        Construction Speed - 135 Blocks/ Hour
                      </p>
                    </div>
                  </div>
                </div>

                {/* Machine Image Frame */}
                <div className="lg:col-span-7 relative w-full h-[450px] lg:h-[540px] bg-muted/30 flex items-center justify-center p-6 border-b lg:border-b-0 lg:border-l border-border/40 order-1 lg:order-2">
                  <Image
                    src="/images/humanoid-loading.png"
                    alt="Humanoid Block Loading - Vision 2027"
                    fill
                    className="object-contain p-4 hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-6 right-6 bg-primary text-primary-foreground text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-md">
                    Vision 2027
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Transform Onsite Masonry Construction</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Partner with Craftsmac Labs to integrate masonry robotics into your construction projects.
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
