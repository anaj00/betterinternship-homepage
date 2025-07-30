export default function HeroSearch() {
  return (
    <div className="mt-8 flex items-center gap-2 max-w-xl w-full">
      <input
        type="text"
        placeholder="Search an internship"
        className="flex-1 rounded-full px-4 py-2 border border-gray-300 focus:outline-none"
      />
      <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
        Search
      </button>
    </div>
  );
}
