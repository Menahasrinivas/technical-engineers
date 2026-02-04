export default function Services() {
  return (
    <div>
      {/* ================= SERVICES BANNER ================= */}
      <section className="relative h-[55vh] flex items-center bg-cover bg-center">
        <img
          src="/banner/service.webp"
          alt="HVAC Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative max-w-7xl mx-auto px-4 text-white">
          <h1
            data-aos="fade-up"
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            AC & HVAC Services
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-base md:text-lg max-w-3xl"
          >
            Reliable HVAC repair, maintenance, and emergency services across
            Chennai & Tamil Nadu
          </p>
        </div>
      </section>

      {/* ================= SERVICE 1 ================= */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div data-aos="fade-right"
         className="order-2 md:order-1">
          <img
            src="/images/serviceone.webp"
            alt="AC & HVAC Repair"
            className="w-full h-[220px] md:h-[360px] lg:h-[420px] object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div data-aos="fade-left"
         className="order-1 md:order-2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            AC & HVAC Repair Services
          </h2>

          <p className="font-semibold mb-2">What customers face</p>
          <p className="text-gray-700 text-base md:text-lg leading-7 mb-4 text-justify">
            AC not cooling, unusual noise, water leakage, frequent tripping, or
            complete system failure—often at the worst possible time.
          </p>

          <p className="font-semibold mb-2">Our solution</p>
          <p className="text-gray-700 text-base md:text-lg leading-7 mb-4 text-justify">
            Our technicians quickly diagnose the issue and provide reliable AC
            and HVAC repair services using the right tools and proven methods.
            We focus on fixing the root cause, not just temporary relief.
          </p>

          <p className="font-semibold mb-2">Benefits</p>
          <ul className="list-disc pl-6 text-gray-700 text-base md:text-lg mb-4">
            <li>Faster issue resolution</li>
            <li>Cost-effective repairs</li>
            <li>Safe and reliable operation</li>
            <li>Minimal downtime</li>
          </ul>

          <p className="font-semibold text-teal-700">
            📞 Call us for quick repair support in Chennai
          </p>
        </div>
      </section>

      {/* ================= SERVICE 2 ================= */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* Content */}
          <div data-aos="fade-right">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Preventive Maintenance Services
            </h2>

            <p className="font-semibold mb-2">What customers face</p>
            <p className="text-gray-700 text-base md:text-lg leading-7 mb-4 text-justify">
              Lack of regular maintenance leads to dust buildup, reduced
              cooling, poor air quality, higher power consumption, and sudden
              breakdowns.
            </p>

            <p className="font-semibold mb-2">Our solution</p>
            <p className="text-gray-700 text-base md:text-lg leading-7 mb-4 text-justify">
              We offer customized preventive maintenance plans including
              inspection, cleaning, performance checks, and early issue
              detection—tailored to your usage and system type.
            </p>

            <p className="font-semibold mb-2">Benefits</p>
            <ul className="list-disc pl-6 text-gray-700 text-base md:text-lg mb-4">
              <li>Consistent cooling performance</li>
              <li>Lower electricity bills</li>
              <li>Improved indoor air quality</li>
              <li>Reduced emergency repairs</li>
            </ul>

            <p className="font-semibold text-teal-700">
              📞 Schedule routine maintenance with our service team
            </p>
          </div>

          {/* Image */}
          <div data-aos="fade-left">
            <img
              src="/images/service-two.webp"
              alt="Preventive Maintenance"
              className="w-full h-[220px] md:h-[360px] lg:h-[420px] object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* ================= SERVICE 3 ================= */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div data-aos="fade-right"
         className="order-2 md:order-1">
          <img
            src="/images/serviceac.webp"
            alt="Emergency HVAC Services"
            className="w-full h-[220px] md:h-[360px] lg:h-[420px] object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div data-aos="fade-left"
         className="order-1 md:order-2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Emergency AC & HVAC Services
          </h2>

          <p className="font-semibold mb-2">What customers face</p>
          <p className="text-gray-700 text-base md:text-lg leading-7 mb-4 text-justify">
            Unexpected breakdowns during peak summer hours or critical business
            operations can cause discomfort and disruption.
          </p>

          <p className="font-semibold mb-2">Our solution</p>
          <p className="text-gray-700 text-base md:text-lg leading-7 mb-4 text-justify">
            We provide emergency AC and HVAC services in Chennai, responding
            quickly to urgent calls and ensuring fast, safe restoration of your
            system.
          </p>

          <p className="font-semibold mb-2">Benefits</p>
          <ul className="list-disc pl-6 text-gray-700 text-base md:text-lg mb-4">
            <li>Quick response time</li>
            <li>Reduced operational disruption</li>
            <li>Professional on-site support</li>
            <li>Peace of mind</li>
          </ul>

          <p className="font-semibold text-teal-700">
            📞 Call us immediately for emergency service assistance
          </p>
        </div>
      </section>

      {/* ================= PROMISE ================= */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p
            data-aos="fade-up"
            className="text-gray-700 text-base md:text-lg max-w-4xl mx-auto"
          >
            At Technical Engineers, our service is built on trust, experience,
            and responsibility. We don’t believe in shortcuts—only in delivering
            solutions that keep your systems running efficiently and safely
            over the long term.
          </p>
        </div>
      </section>
    </div>
  );
}
