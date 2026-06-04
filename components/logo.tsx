import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative w-12 h-12 md:w-14 md:h-14 shrink-0">
        <Image
          src="/images/logos/alaa-logo.webp"
          alt="ALAA Transport"
          width={56}
          height={56}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
          priority
        />
      </div>
      <div className="hidden sm:flex flex-col justify-center select-none">
        <span className="text-2xl md:text-3xl font-extrabold tracking-wide text-secondary uppercase font-heading leading-none">
          A<span className="text-[#B51E2B]">L</span>AA
        </span>
        <span className="text-[9px] md:text-[10px] font-bold tracking-[0.25em] text-foreground/60 uppercase font-sans mt-0.5 pl-0.5">
          Transport
        </span>
      </div>
    </Link>
  );
}
