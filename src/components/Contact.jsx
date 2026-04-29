export default function Contact() {
  return (
    <section id="contact" className="py-20 text-center bg-bg text-white">

      <h2 className="text-3xl font-bold mb-6 text-primary">
        Visit Us
      </h2>

      <p className="mb-2">Nfit Club, Kurduwadi</p>
      <p className="mb-6 text-gray-400">
        Open: 6 AM – 10 PM
      </p>

      <iframe
        src="https://www.google.com/maps?q=Kurduwadi&output=embed"
        className="w-full max-w-4xl mx-auto h-64 rounded-xl border border-primary/20"
        loading="lazy"
      ></iframe>

    </section>
  );
}