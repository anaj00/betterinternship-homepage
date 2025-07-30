export default function HeroCompanies() {
  const companies = [
    { name: "Alaska", src: "/logos/alaska.png" },
    { name: "Jollibee", src: "/logos/jollibee.png" },
    { name: "Manulife", src: "/logos/manulife.png" },
    { name: "Oracle", src: "/logos/oracle.png" },
  ];

  return (
    <div className="mt-8">
      <p className="text-sm text-gray-500 mb-4">The best are already here</p>
      <div className="flex flex-wrap justify-center gap-14">
        {companies.map((company) => (
          <img
            key={company.name}
            src={company.src}
            alt={company.name}
            className="h-14 object-contain"
          />
        ))}
      </div>
    </div>
  );
}
