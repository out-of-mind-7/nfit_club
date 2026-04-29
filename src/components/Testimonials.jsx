export default function Testimonials() {
  return (
    <section className="py-20 text-center bg-bg text-white">

      <h2 className="text-3xl font-bold mb-10 text-primary drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]">
        What Clients Say
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 px-6">

        <div className="bg-card p-6 rounded-xl border border-primary/20">
          <p>⭐⭐⭐⭐⭐</p>
          <p className="mt-2 text-gray-300">
            Best gym in Kurduwadi!
          </p>
        </div>

        <div className="bg-card p-6 rounded-xl border border-primary/20">
          <p>⭐⭐⭐⭐⭐</p>
          <p className="mt-2 text-gray-300">
            Great trainer and environment.
          </p>
        </div>

      </div>

    </section>
  );
}