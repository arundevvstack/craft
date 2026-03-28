import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://craftsmaclabs.pages.dev'),
  title: {
    default: 'Craftsmac Labs - Industrial Robotics & Automation',
    template: '%s | Craftsmac Labs',
  },
  description: 'Transition to industry 4.0 with Craftsmac Labs RDaaS. We Research, Design and Make machines to transform human workspaces at the frontline and on the floor.',
  keywords: ['Craftsmac Labs', 'Industrial Robotics', 'Automation', 'RDaaS', 'Advanced Actuators', 'Masonry Robot', 'Painting Robot', 'Engineering services', 'Manufacturing robotics'],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Craftsmac Labs',
    title: 'Craftsmac Labs - State of the Art Engineering & Automation',
    description: 'We Research, Design and Make machines to transform human workspaces at the frontline and on the floor.',
    images: [
      {
        url: '/images/banner.png',
        width: 1200,
        height: 630,
        alt: 'Craftsmac Labs Industrial Robotics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Craftsmac Labs - Industrial Robotics & Automation',
    description: 'Transition to industry 4.0 with Craftsmac Labs RDaaS.',
    images: ['/images/banner.png'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          'font-body antialiased bg-background text-foreground min-h-screen flex flex-col overflow-x-hidden'
        )}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
