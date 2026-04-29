export default function WhyChoose() {
  return (
    <section id="why" className="py-20 text-center bg-bg text-white">

      <h2 className="text-3xl font-bold mb-10 text-primary drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]">
        Why Choose Nfit Club
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6">

        <div className="bg-card p-6 rounded-xl border border-primary/20 hover:scale-105 hover:-translate-y-2 transition duration-300">
          <h3 className="font-semibold mb-2 text-lg">Expert Guidance</h3>
          <p className="text-gray-400">
            Train with experienced coaches who guide you at every step.
          </p>
        </div>

        <div className="bg-card p-6 rounded-xl border border-primary/20 hover:scale-105 hover:-translate-y-2 transition duration-300">
          <h3 className="font-semibold mb-2 text-lg">Affordable Plans</h3>
          <p className="text-gray-400">
            Flexible and budget-friendly plans for everyone.
          </p>
        </div>

        <div className="bg-card p-6 rounded-xl border border-primary/20 hover:scale-105 hover:-translate-y-2 transition duration-300">
          <h3 className="font-semibold mb-2 text-lg">Friendly Environment</h3>
          <p className="text-gray-400">
            Comfortable space for beginners and professionals alike.
          </p>
        </div>

      </div>

    </section>
  );
}