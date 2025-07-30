import { Gloria_Hallelujah } from 'next/font/google';

const gloria = Gloria_Hallelujah({ subsets: ['latin'], weight: '400' });

export default function HeroTag() {
  return (
    <div className="relative inline-block text-[2.5rem] sm:text-[3rem] text-white px-12 py-3 rounded-full bg-[var(--color-blue)] overflow-hidden group shadow-lg rotate-[-6deg]">
      <span
        className={`${gloria.className} text-[2.5rem] sm:text-[3rem] text-white`}
      >
        10x faster
      </span>
      <span className="absolute inset-0 bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
    </div>
  );
}
