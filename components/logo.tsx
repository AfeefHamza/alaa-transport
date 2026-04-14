import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="relative w-12 h-12">
        <Image
          src="/images/logos/ALAA Logo Reworked NO BG.png"
          alt="ALAA Transport"
          width={48}
          height={48}
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
