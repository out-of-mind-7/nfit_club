export default function Hero() {
  const phone = "8111831107";

  const getWhatsAppLink = (message) => {
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="relative h-screen flex items-center justify-center text-center">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-6">

        {/* Logo */}
        <img 
          src="/src/assets/logo.jpg" 
          alt="Nfit Club"
          className="w-40 md:w-56 mx-auto mb-6"
        />

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Transform Your Body at{" "}
          <span className="text-primary drop-shadow-[0_0_10px_rgba(212,175,55,0.6)]">
            Nfit Club
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-gray-400 mb-8">
          SUSTAINABLE | STRENGTH | STAMINA
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">

          <a
            href={getWhatsAppLink(
              "Hi Nfit Club, I saw your website and I'm interested in joining."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
          >
            Join via WhatsApp
          </a>

          <a
            href={`tel:${phone}`}
            className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-black transition"
          >
            Call Now
          </a>

        </div>

      </div>
    </div>
  );
}