import { Target, Eye } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ParallaxBackground, ParallaxText } from '@/components/parallax';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the history of Craftsmac Labs, pioneers in masonry robotics and industrial automation since 2014.',
  openGraph: { images: ['/images/about-banner.png'] },
};

export default function AboutPage() {
  const heroImage = { imageUrl: '/images/about-banner.png', imageHint: 'Construction robotics banner' };
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-center overflow-hidden">
        <ParallaxBackground>
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt="About us background"
              fill
              className="object-cover opacity-30"
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/50" />
        </ParallaxBackground>
        <ParallaxText className="relative z-10 container mx-auto px-4 pointer-events-none">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">About Craftsmac Labs</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-slate-300 drop-shadow-md">
            Pioneering the future of automation and robotics.
          </p>
        </ParallaxText>
      </section>

      {/* About Company Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground text-justify leading-relaxed">
              <p>
                Founded in 2014 in Kochi, India, Craftsmac Laboratories Pvt. Ltd. began as a technology venture focused on the research and development of Masonry Robot for wall construction of buildings. Driven by the challenges of developing practical robotics for construction, the company evolved into a deep-tech robotics enterprise, pioneering the development of indigenous robotics technologies, precision mechanisms and advanced actuation systems.
              </p>
              <p>
                Building on its extensive in-house R&D capabilities, Craftsmac Labs became the first Indian company to indigenously develop high-precision robot joints and actuators. Among its pioneering achievements in construction robotics is the development of the world&apos;s first floor-mobile block-laying robot designed for wall construction in multi-storey buildings.
              </p>
              <p>
                Today, Craftsmac Labs has developed a portfolio of state-of-the-art robotics technologies, backed by over a decade of in-house research, engineering and development. With proprietary technologies spanning robot joints, actuators, mechanisms, control systems and complete robotic platforms, the company is poised to expand into global markets for construction robots, industrial robots and high-precision robot actuators.
              </p>
              <p>
                At Craftsmac Labs, we are committed to advancing robotics technology and engineering practical, high-performance robotic systems for real-world applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center md:flex-row md:text-left gap-6">
              <div className="flex-shrink-0">
                <div className="bg-primary/10 p-4 rounded-full">
                    <Target className="h-12 w-12 text-primary" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">Our Mission</h2>
                <p className="text-muted-foreground text-lg">
                  Research, design and deploy technically feasible and economically viable robots.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center md:flex-row md:text-left gap-6">
              <div className="flex-shrink-0">
                <div className="bg-primary/10 p-4 rounded-full">
                    <Eye className="h-12 w-12 text-primary" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">Our Vision</h2>
                <p className="text-muted-foreground text-lg">
                  Transform human workspaces with robots at the frontline and on the floor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
