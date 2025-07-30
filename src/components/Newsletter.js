export default function Newsletter() {
  return (
    <div className="max-w-md w-full p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-md">
      <h2 className="text-3xl font-bold text-black mb-2">
        Transforming the Way you Find Jobs
      </h2>
      <p className="text-gray-700 mb-6">
        Stop searching, start discovering. Let the ideal job come to you.
      </p>

      <div className="flex items-center bg-white border border-gray-300 rounded-full overflow-hidden shadow-sm">
        <input
          type="email"
          placeholder="Enter your mail"
          className="flex-1 px-4 py-3 text-sm focus:outline-none"
        />
        <button className="bg-black text-white font-medium px-6 py-3 rounded-full hover:scale-105 transition">
          Subscribe
        </button>
      </div>
    </div>
  );
}
