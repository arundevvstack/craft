'use client';
import {
  ArrowRight,
  CheckCircle2,
  Construction,
  Paintbrush,
  Send,
  Wrench,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ParallaxBackground, ParallaxText } from '@/components/parallax';
import { AnimatedDiagram } from '@/components/ui/animated-diagram';
import { TextRotator } from '@/components/ui/text-rotator';

const actuatorSection = {
  id: 'actuators',
  title: 'Advanced Actuators',
  text: 'State-of-the-Art, high precision, lightweight, rugged actuators designed and developed by in-house capital.',
  buttonText: 'Discover more about our product',
  buttonLink: '/technologies/advanced-actuators',
  image: { imageUrl: '/images/advanced-actuators.gif', imageHint: 'actuators diagram' },
  imagePosition: 'left',
};

const constructionSectionImage = {
  imageUrl: '/images/construction-robotics.png',
  imageHint: 'Construction robotics machine',
};

const factoryRoboticsSection = {
  id: 'factory',
  title: 'Vehicle & Factory Robotics',
  text: 'Customisable for manufacturing, warehousing, logistics, and healthcare use to streamline operations, enhance productivity, and optimize safety.',
  buttonText: 'Discover more about our products',
  buttonLink: '/technologies/vehicle-factory-robotics',
  image: {
    imageUrl: '/images/factory-robotics.jpg',
    imageHint: 'Vehicle and Factory Robotics machine on site',
  },
  imagePosition: 'left',
  showContainer: false,
};

const constructionFeatures = [
  { text: 'High Repeatability', icon: Wrench },
  { text: 'High Speed', icon: Send },
  { text: 'Zero Emission – Fully Electric', icon: Zap },
];

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <ParallaxBackground>
          <Image
            src="/images/banner.png"
            alt="Robotic arm background"
            fill
            priority
            className="object-cover object-center"
          />
        </ParallaxBackground>
        <ParallaxText className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="font-thin text-muted-foreground">
                  STATE OF THE ART{' '}
                </span>
                <TextRotator
                  phrases={['ENGINEERING', 'AUTOMATION', 'INDUSTRIAL ROBOTICS']}
                  delay={5000}
                  className="text-primary"
                />
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-sm md:text-base max-w-2xl text-muted-foreground"
            >
              Transition to industry 4.0 with Craftsmac Labs RDaaS. We Research,
              Design and Make machines to transform human workspace at the
              frontline and on the floor.
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
        </ParallaxText>
      </section>

      {/* RDaaS Section */}
      <section
        id="tech-showcase"
        className="bg-[#f5f5f5] min-h-screen flex items-center dark:text-slate-900"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-left"
            >
              <p className="text-sm font-semibold uppercase text-primary mb-3">
                RDaaS
              </p>
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">
                R&D as a Service
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Concept to prototype to production version. We provide
                State-of-the-Art solutions in industrial robotics and automation
                to transform your workspace.
              </p>
              <Button variant="outline" asChild size="lg">
                <Link href="/rdaas">
                  Discover more about our process
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </motion.div>

            {/* Animated Diagram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex justify-center"
            >
              <AnimatedDiagram
                src="/images/rdaas-diagram.png"
                alt="RDaaS Process Diagram"
                aiHint="process diagram"
                showContainer={false}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Actuators Section */}
      <section className="bg-background min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex justify-center"
            >
              {actuatorSection.image && (
                <AnimatedDiagram
                  src={actuatorSection.image.imageUrl}
                  alt={`${actuatorSection.title} diagram`}
                  aiHint={actuatorSection.image.imageHint}
                  showContainer={false}
                />
              )}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-right"
            >
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
                {actuatorSection.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {actuatorSection.text}
              </p>
              <Button variant="outline" asChild size="lg">
                <Link href={actuatorSection.buttonLink}>
                  {actuatorSection.buttonText}
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Construction Robotics Section */}
      <section className="bg-primary text-primary-foreground min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="font-headline text-3xl md:text-4xl font-thin uppercase tracking-widest mb-4">
                Construction Robotics
              </h2>
              <p className="text-lg mb-8">
                Internal and external walls of multi-storey buildings can be
                constructed and painted by Craftsmac Labs Robots with its
                advanced robotic arm developed for the construction industry.
              </p>
              <div className="grid grid-cols-2 gap-8 my-8">
                <div className="flex items-center gap-4">
                  <Construction className="h-10 w-10" />
                  <span className="font-semibold">Masonry Robot</span>
                </div>
                <div className="flex items-center gap-4">
                  <Paintbrush className="h-10 w-10" />
                  <span className="font-semibold">Painting Robot</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {constructionFeatures.map((feature) => (
                  <li key={feature.text} className="flex items-center gap-4">
                    <div className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-full p-3">
                      <feature.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <span className="text-lg font-semibold uppercase">
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <Link href="/technologies/construction-robotics">
                  Discover more about our products
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex justify-center"
            >
              {constructionSectionImage && (
                <AnimatedDiagram
                  src={constructionSectionImage.imageUrl}
                  alt="Construction Robotics diagram"
                  aiHint={constructionSectionImage.imageHint}
                  showContainer={false}
                />
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vehicle & Factory Robotics Section */}
      <section className="bg-background min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center`}
          >
            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`flex justify-center`}
            >
              {factoryRoboticsSection.image && (
                <AnimatedDiagram
                  src={factoryRoboticsSection.image.imageUrl}
                  alt={`${factoryRoboticsSection.title} diagram`}
                  aiHint={factoryRoboticsSection.image.imageHint}
                  showContainer={factoryRoboticsSection.showContainer}
                />
              )}
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
              className={``}
            >
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
                {factoryRoboticsSection.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {factoryRoboticsSection.text}
              </p>
              <Button variant="outline" asChild size="lg">
                <Link href={factoryRoboticsSection.buttonLink}>
                  {factoryRoboticsSection.buttonText}
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
