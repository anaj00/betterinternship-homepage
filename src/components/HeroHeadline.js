export default function HeroHeadline() {
  return (
    <>
      {/* Mobile */}
      <h1 className="block sm:hidden text-3xl font-bold text-white px-6 py-3 rounded-full bg-primary text-center shadow-[0_0_20px_rgba(221,100,184,0.4)]">
        Land an internship
      </h1>

      {/* Tablet */}
      <h1 className="hidden sm:block md:hidden text-4xl font-bold text-white px-8 py-3 rounded-full bg-primary text-center shadow-[0_0_25px_rgba(221,100,184,0.4)]">
        Land an internship
      </h1>

      {/* Desktop */}
      <h1 className="hidden md:block -mt-9 text-[6rem] font-bold text-white px-16 py-3 rounded-full bg-primary text-center shadow-[0_0_30px_rgba(221,100,184,0.5)]">
        Land an internship
      </h1>
    </>
  );
}
