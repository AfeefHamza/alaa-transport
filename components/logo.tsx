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
      <span className="hidden sm:flex items-center font-arizonia text-5xl md:text-6xl text-foreground transition-colors duration-300 select-none scale-x-110 origin-left">
        <span className='mx-1'>A</span>
        <span className="text-[#B51E2B] -ml-1 md:-ml-1.5">l</span>
        <span className="-ml-0.5 md:-ml-0.75">aa</span>
      </span>
    </Link>
  );
}
