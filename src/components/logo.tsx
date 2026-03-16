import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn(className)}>
      <Image
        src="/logo.png"
        alt="Craftsmac Labs Logo"
        width={180}
        height={35}
        priority
      />
    </Link>
  );
}
