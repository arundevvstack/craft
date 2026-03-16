'use client';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimatedDiagram } from '@/components/ui/animated-diagram';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

const TechnologyCard = ({
  item,
  index,
}: {
  item: {
    id: string;
    title: string;
    description: string;
    image: ReturnType<typeof PlaceHolderImages.find>;
    link: string;
  };
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true, amount: 0.3 }}
    className="bg-card rounded-lg overflow-hidden flex flex-col group border border-transparent hover:border-primary transition-colors duration-300"
  >
    {item.image && (
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={item.image.imageUrl}
          alt={item.title}
          data-ai-hint={item.image.imageHint}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    )}
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="font-headline text-xl font-bold mb-2">{item.title}</h3>
      <p className="text-muted-foreground flex-grow mb-4">{item.description}</p>
      <Button variant="ghost" asChild className="self-start p-0 h-auto text-primary">
        <Link href={item.link}>
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  </motion.div>
);

const featureSections = [
  {
    id: 'rdaas',
    title: 'R&D as a Service',
    text: 'Concept to prototype to production version. We provide State-of-the-Art solutions in industrial robotics and automation to transform your workspace.',
    buttonText: 'Discover more about our process',
    buttonLink: '/rdaas',
    image: PlaceHolderImages.find((img) => img.id === 'rdaas-diagram'),
    imagePosition: 'right',
  },
  {
    id: 'actuators',
    title: 'Advanced Actuators',
    text: 'State-of-the-Art, high precision, lightweight, rugged actuators designed and developed by in-house capital.',
    buttonText: 'Discover more about our product',
    buttonLink: '/technologies/advanced-actuators',
    image: PlaceHolderImages.find((img) => img.id === 'actuator-diagram'),
    imagePosition: 'left',
  },
  {
    id: 'construction',
    title: 'Construction Robotics',
    text: 'Internal and external walls of multi-storey buildings can be constructed and painted by Craftsmac Labs Robots with its advanced robotic arm developed for the construction industry.',
    features: ['High Repeatability', 'High Speed', 'Zero Emission – Fully Electric'],
    buttonText: 'Discover more about our products',
    buttonLink: '/technologies/construction-robotics',
    image: PlaceHolderImages.find((img) => img.id === 'construction-robot-diagram'),
    imagePosition: 'right',
  },
  {
    id: 'factory',
    title: 'Vehicle & Factory Robotics',
    text: 'Customisable for manufacturing, warehousing, logistics, and healthcare use to streamline operations, enhance productivity, and optimize safety.',
    buttonText: 'Discover more about our products',
    buttonLink: '/technologies/vehicle-factory-robotics',
    image: PlaceHolderImages.find((img) => img.id === 'factory-robot-diagram'),
    imagePosition: 'left',
  },
];

export default function Home() {
  const technologyShowcaseItems = [
    {
      id: 'showcase-rdaas',
      title: 'RDaaS',
      description: 'We Research, Design and Make machines to transform human workspace.',
      image: PlaceHolderImages.find((img) => img.id === 'showcase-rdaas'),
      link: '/rdaas',
    },
    {
      id: 'showcase-actuators',
      title: 'Advanced Actuators',
      description: 'High precision, lightweight, rugged actuators designed for peak performance.',
      image: PlaceHolderImages.find((img) => img.id === 'showcase-actuators'),
      link: '/technologies/advanced-actuators',
    },
    {
      id: 'showcase-construction',
      title: 'Construction Robotics',
      description: 'Automating construction tasks with state-of-the-art robotic systems.',
      image: PlaceHolderImages.find((img) => img.id === 'showcase-construction'),
      link: '/technologies/construction-robotics',
    },
    {
      id: 'showcase-factory',
      title: 'Vehicle & Factory Robotics',
      description: 'Optimizing industrial workflows with customizable robotic solutions.',
      image: PlaceHolderImages.find((img) => img.id === 'showcase-factory'),
      link: '/technologies/vehicle-factory-robotics',
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Robotics background"
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 p-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight">
              STATE OF THE ART ENGINEERING, AUTOMATION, INDUSTRIAL ROBOTICS
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-base md:text-xl max-w-2xl mx-auto text-gray-300"
          >
            Transition to industry 4.0 with Craftsmac Labs RDaaS. We Research, Design and Make machines to transform human workspace at the frontline and on the floor.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8"
          >
            <Button size="lg" asChild>
              <Link href="#tech-showcase">
                Learn More <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
           <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
              <motion.div 
                className="w-1 h-2 bg-gray-400 rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              />
           </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Technology Showcase Section */}
      <section id="tech-showcase" className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologyShowcaseItems.map((item, index) => (
              <TechnologyCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <div className="flex flex-col gap-20 lg:gap-40">
        {featureSections.map((section) => (
          <section key={section.id} className="container mx-auto px-4">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center`}
            >
              <motion.div
                initial={{ opacity: 0, x: section.imagePosition === 'right' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.3 }}
                className={`flex justify-center ${
                  section.imagePosition === 'right' ? 'lg:order-2' : ''
                }`}
              >
                {section.image && (
                  <AnimatedDiagram
                    src={section.image.imageUrl}
                    alt={`${section.title} diagram`}
                    aiHint={section.image.imageHint}
                  />
                )}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: section.imagePosition === 'right' ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.3 }}
                className={`${section.imagePosition === 'right' ? 'lg:order-1' : ''}`}
              >
                <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
                  {section.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {section.text}
                </p>
                {section.features && (
                  <ul className="space-y-3 mb-8">
                    {section.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary" />
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <Button variant="outline" asChild size="lg">
                  <Link href={section.buttonLink}>
                    {section.buttonText}
                    <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </section>
        ))}
      </div>
      <div className="py-10 lg:py-20"></div>
    </div>
  );
}
