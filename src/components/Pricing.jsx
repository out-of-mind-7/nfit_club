export default function Pricing() {
  const phone = "918111831107";

  const getWhatsAppLink = (message) => {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

  const plans = [
    {
      name: "Monthly",
      price: "₹899",
      duration: "30 Days",
    },
    {
      name: "Quarterly",
      price: "₹2399",
      duration: "90 Days",
    },
    {
      name: "Half Year",
      price: "₹4499",
      duration: "183 Days",
    },
    {
      name: "Annual",
      price: "₹8999",
      duration: "365 Days",
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-bg text-white text-center">

      <h2 className="text-3xl font-bold mb-12 text-primary drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]">
        Membership Plans
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">

        {plans.map((plan, i) => (
          <div
            key={i}
            className={`p-6 rounded-xl border transform transition duration-300 ease-in-out ${
              plan.highlight
                ? "bg-primary text-black scale-105 shadow-[0_0_25px_rgba(212,175,55,0.6)]"
                : "bg-card border-primary/20 hover:scale-105 hover:-translate-y-2 hover:border-primary hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            }`}
          >
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>

            <p className="text-2xl font-bold my-4">
              {plan.price}
            </p>

            <p className="text-gray-400 mb-6">
              {plan.duration}
            </p>
            <a
            href={getWhatsAppLink(
              `Hi Nfit Club, I am interested in your ${plan.price} (${plan.name}) plan. Please share details.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              plan.highlight
              ? "bg-black text-white hover:opacity-90"
              : "bg-primary text-black hover:scale-105"
            }`}
          >
            Enquire Now
            </a>
            

          </div>
        ))}

      </div>

    </section>
  );
}