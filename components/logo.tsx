import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative w-14 h-14 md:w-16 md:h-16">
        <Image
          src="/images/logos/ALAA Logo Reworked NO BG.png"
          alt="ALAA Transport"
          width={64}
          height={64}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
          priority
        />
      </div>
      <span className="hidden sm:flex items-center font-serif italic font-black text-3xl tracking-widest text-foreground transition-colors duration-300">
        <span>A</span>
        <span className="text-[#B51E2B] scale-110 mx-0.5">L</span>
        <span>AA</span>
      </span>
    </Link>
  );
}
