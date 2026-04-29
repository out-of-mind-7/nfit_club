export default function Transformations() {
  return (
    <section className="py-20 bg-bg text-white text-center">

      <h2 className="text-3xl font-bold mb-12 text-primary">
        Real Transformations
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">

        {/* Card 1 */}
        <div className="bg-card p-4 rounded-xl border border-primary/20">
          <img
            src="https://images.unsplash.com/photo-1594737625785-a6cbdabd333c"
            alt="Transformation"
            className="rounded-lg mb-4"
          />
          <p className="text-gray-400">3 Month Transformation</p>
        </div>

        {/* Card 2 */}
        <div className="bg-card p-4 rounded-xl border border-primary/20">
          <img
            src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61"
            alt="Transformation"
            className="rounded-lg mb-4"
          />
          <p className="text-gray-400">Fat Loss Journey</p>
        </div>

      </div>

    </section>
  );
}