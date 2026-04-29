export default function Navbar() {
  return (
    <div className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-primary/30 shadow-lg shadow-black/50 flex justify-between items-center px-6 py-4">
      
      {/* Logo */}
      <h1 className="text-xl font-bold text-white">
        Nfit <span className="text-primary">Club</span>
      </h1>

      {/* Button */}
      <a
        href="https://wa.me/91XXXXXXXXXX"
        className="bg-primary text-black px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition"
      >
        Join Now
      </a>

    </div>
  );
}