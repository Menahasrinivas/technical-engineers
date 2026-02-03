export default function Home() {
  return (
    <div>
      {/* ================= HERO BANNER ================= */}
      <section
        className="relative h-[75vh] flex items-center justify-center bg-cover bg-center"
        
      >
         <img
    src="/banner/homebanner.webp"
    alt="HVAC & MEP Engineering"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/65"></div>

        {/* Centered Content */}
        <div className="relative text-center text-white max-w-4xl px-4">
          <h1
            data-aos="fade-up"
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            HVAC & MEP Engineering Experts in Chennai, Tamil Nadu
          </h1>

          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-lg md:text-2xl italic font-light"
          >
            “Delivering dependable engineering solutions that stand the test of time.”
          </h2>
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div data-aos="fade-right">
          <p className="text-gray-700 text-base md:text-lg leading-7 mb-5 text-justify">
            Technical Engineers is a Chennai-based HVAC & MEP engineering company
            delivering high-quality, reliable, and energy-efficient solutions
            across Tamil Nadu. Since our establishment in 2014, we have built a
            strong reputation through technical excellence, professional
            integrity, and consistent project delivery.
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-7 text-justify">
            From design and installation to maintenance, repair, and system
            expansion, we provide end-to-end engineering services tailored to the
            unique needs of each client.
          </p>
        </div>

        {/* Image */}
        <div data-aos="fade-left">
          <img
            src="/images/introimg.webp"
            alt="HVAC Engineering"
        className="w-full h-[220px] md:h-[360px] lg:h-[420px] object-cover rounded-lg shadow-lg"

          />
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div data-aos="fade-right">
            <img
              src="/images/whowe.webp"
              alt="Who We Are"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Text */}
          <div data-aos="fade-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-5">
              Who We Are
            </h2>

            <p className="text-gray-700 text-base md:text-lg leading-7 mb-4 text-justify">
              Founded on hard-earned experience and strong engineering
              principles, Technical Engineers specializes in HVAC systems, air
              conditioning, refrigeration, ventilation, and process cooling
              solutions for commercial, industrial, healthcare, hospitality,
              retail, and institutional sectors.
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-7 text-justify">
              Our approach is practical and holistic — we design systems that
              work efficiently as part of the entire infrastructure, not as
              isolated components.
            </p>
          </div>
        </div>
      </section>

      {/* ================= OUR SERVICES ================= */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2
          data-aos="fade-right"
          className="text-2xl md:text-3xl font-bold mb-10"
        >
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "HVAC System Design & Installation",
            "Air Conditioning & Refrigeration",
            "Heating, Ventilation & Extraction Systems",
            "Cooling Towers (New Installations & Upgrades)",
            "Process Cooling & Heating",
            "Ducting Systems",
            "Chillers & Boilers",
            "Ventilation & Condensation Control",
            "Product Storage & Chilling Solutions",
          ].map((service, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="border rounded-lg p-6 bg-white text-gray-800
                         hover:bg-teal-700 hover:text-white
                         transition-all duration-300 cursor-pointer"
            >
              <p className="font-medium">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= GET IN TOUCH ================= */}
      <section className="bg-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2
            data-aos="fade-up"
            className="text-2xl md:text-3xl font-bold mb-4"
          >
            Get in Touch
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-base md:text-lg mb-6"
          >
            Looking for a reliable HVAC & MEP engineering partner?
          </p>

          <p
            data-aos="zoom-in"
            className="text-lg md:text-xl font-semibold"
          >
            📍 Chennai, Tamil Nadu <br />
            📞 97907 04878 | 90420 90053
          </p>
        </div>
      </section>
    </div>
  );
}
