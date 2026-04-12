import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="relative w-10 h-10 overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ALAA%20Logo%20Reworked%20NO%20BG-cJ3yz7ntaA8c9qCbi7v9UgbvJKM9mZ.png"
          alt="ALAA Transport Logo"
          width={40}
          height={40}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
          priority
        />
      </div>
      <span className="hidden sm:inline font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
        ALAA
      </span>
    </Link>
  );
}
