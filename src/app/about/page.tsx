import { Users, Target, Eye } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    image: 'https://picsum.photos/seed/team1/400/400',
    hint: 'person portrait',
  },
  {
    name: 'Jane Smith',
    role: 'Chief Technology Officer',
    image: 'https://picsum.photos/seed/team2/400/400',
    hint: 'person portrait',
  },
  {
    name: 'Peter Jones',
    role: 'Lead Robotics Engineer',
    image: 'https://picsum.photos/seed/team3/400/400',
    hint: 'person portrait',
  },
];

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

      {/* Mission and Vision Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Target className="h-12 w-12 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">Our Mission</h2>
                  <p className="text-muted-foreground text-lg">
                    To research, design, and create state-of-the-art machines that transform human workspaces, enhancing productivity and safety through innovative robotics and automation solutions.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Eye className="h-12 w-12 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">Our Vision</h2>
                  <p className="text-muted-foreground text-lg">
                    To be a global leader in the transition to Industry 4.0, empowering businesses to achieve unparalleled efficiency and operational excellence with our custom-built robotics.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="https://picsum.photos/seed/about-vision/600/400"
                alt="Robotics team working"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                data-ai-hint="team collaboration"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
            A passionate group of engineers, designers, and innovators dedicated to pushing the boundaries of technology.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center">
                <CardHeader>
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                      data-ai-hint={member.hint}
                    />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}