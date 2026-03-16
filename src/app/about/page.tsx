import { Target, Eye } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0 bg-black/50">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt="About us background"
              fill
              className="object-cover opacity-30"
              data-ai-hint={heroImage.imageHint}
            />
          )}
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">About Craftsmac Labs</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-slate-300">
            Pioneering the future of automation and industrial robotics.
          </p>
        </div>
      </section>

      {/* About Company Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Our Story</h2>
            <p className="text-lg text-muted-foreground text-justify leading-relaxed">
            Craftsmac Labs, a deep technology Indian start-up company was founded by a group of Engineers in 2014 at Kochi, India for R&D in masonry robotics. Alpha version of the Masonry Robot started trials in October 2016. Version 2.1 released for commercial use in Aug 2020 was preceded by 2 versions in 2018 and 2019 that was upgraded after extensive tests and trials. With 6 years of R&D towards the development of the Masonry Robot, Craftsmac Labs has developed state-of-the-art construction purpose robotics technologies. With this core robotics asset, solutions for other construction tasks are in the pipeline.
            </p>
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
