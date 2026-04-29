export default function Services() {
  const services = [
    {
      title: "Weight Training",
      desc: "Build strength with proper guidance and modern equipment.",
      icon: "🏋️‍♂️",
    },
    {
      title: "Fat Loss",
      desc: "Structured programs to help you lose fat effectively.",
      icon: "🔥",
    },
    {
      title: "Personal Training",
      desc: "1-on-1 coaching tailored to your fitness goals.",
      icon: "💪",
    },
    {
      title: "Cardio Programs",
      desc: "Improve stamina and overall fitness with guided cardio.",
      icon: "🏃‍♂️",
    },
  ];

  return (
    <section id="services" className="py-20 bg-bg text-white text-center">
      
      <h2 className="text-3xl font-bold mb-12 text-primary drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]">
        Our Services
      </h2>

      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-card p-6 rounded-xl border border-primary/20 hover:border-primary hover:scale-105 transition duration-300"
          >
            <div className="text-3xl mb-3">{s.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-400">{s.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
}