export default function HeroIllustration() {
  const images = [
    { src: "/landing/student-2.png", alt: "Student 1", delay: "0s" },
    { src: "/landing/student-4.png", alt: "Student 3", delay: "0.7s" },
    { src: "/landing/student-1.png", alt: "Student 2", delay: "0.3s" },
    { src: "/landing/student-3.png", alt: "Student 3", delay: "0.5s" },
  ];

  return (
    <div className="relative flex justify-center items-center gap-4 flex-wrap max-w-3xl w-full">
      {images.map((img, index) => (
        <img
          key={index}
          src={img.src}
          alt={img.alt}
          className={`w-28 sm:w-36 md:w-44 animate-float ${img.delay}`}
        />
      ))}
    </div>
  );
}
