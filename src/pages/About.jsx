export default function About() {
  return (
    <div>
      {/* ================= ABOUT BANNER ================= */}
      <section className="relative h-[60vh] flex items-center bg-cover bg-center">
        {/* Background Image */}
        <img
          src="/banner/aboutbanner.webp"
          alt="About Technical Engineers"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 text-white">
          <h1
            data-aos="fade-up"
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            About Technical Engineers
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-base md:text-lg max-w-3xl"
          >
            Trusted HVAC & MEP Engineering Experts in Chennai, Tamil Nadu
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div data-aos="fade-right">
          <p className="text-gray-700 text-base md:text-lg leading-7 mb-5 text-justify">
            At Technical Engineers, we believe good engineering is not just about
            systems—it’s about trust, responsibility, and long-term
            relationships. Founded in 2014, we are a Chennai-based HVAC & MEP
            engineering company proudly serving clients across Tamil Nadu with
            reliable, high-quality, and energy-efficient solutions.
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-7 text-justify">
            Our journey began with hands-on field experience and a simple goal:
            to deliver engineering services that customers can truly depend on.
            Over the years, through consistent performance and honest work, we
            have earned the confidence of clients across multiple sectors.
          </p>
        </div>

        {/* Image */}
        <div data-aos="fade-left">
          <img
            src="/images/install.webp"
            alt="Engineering Excellence"
            className="w-full h-[220px] md:h-[360px] lg:h-[420px] object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>

      {/* ================= FOUNDER ================= */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div data-aos="fade-right"
            className="order-2 md:order-1">
            <img
              src="/images/ceo.webp"
              alt="Founder - Sekar T"
              className="w-full h-[220px] md:h-[360px] lg:h-[420px] object-cover  object-top rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Text */}
          <div data-aos="fade-left"
          className="order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-5">
              Our Founder’s Story
            </h2>

            <p className="text-gray-700 text-base md:text-lg leading-7 mb-4 text-justify">
              Technical Engineers is led by Mr. Sekar T, Proprietor, whose deep
              involvement in the MEP industry has shaped the company’s values
              and working culture. With extensive experience in installation,
              system design, project management, quality control, and cost
              planning, he brings a practical and grounded approach to every
              project.
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-7 text-justify">
              Mr. Sekar believes engineering should be holistic, not fragmented.
              By focusing on how systems work together as part of the complete
              infrastructure, he ensures efficiency, safety, and long service
              life.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SUSTAINABILITY ================= */}
<section className="max-w-7xl mx-auto px-4 py-14">
  <div className="grid md:grid-cols-2 gap-10 items-center">

    {/* TEXT */}
    <div data-aos="fade-right">
      <h2 className="text-2xl md:text-3xl font-bold mb-5">
        Our Commitment to Sustainability
      </h2>

      <p className="text-gray-700 text-base md:text-lg leading-7 text-justify">
        As part of our responsibility towards society and the environment,
        Technical Engineers promotes the <strong>“Being Ozone Friendly”</strong>
        initiative. This program encourages the use of eco-friendly, ozone-free
        products that support green building goals and sustainable engineering
        practices. For us, sustainability is not a trend — it is a responsibility.
      </p>
    </div>

    {/* IMAGE */}
    <div data-aos="fade-left">
      <img
        src="/images/commit.webp"
        alt="Sustainable HVAC Engineering"
        className="w-full h-[220px] md:h-[300px] lg:h-[340px] object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
      />
    </div>

  </div>
</section>


     

      {/* ================= WHAT WE DO ================= */}
<section className="bg-slate-50 py-14">
  <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

    {/* IMAGE */}
    <div data-aos="fade-right"
     className="order-2 md:order-1">
      <img
        src="/images/what-we-do.webp"
        alt="HVAC & MEP Services"
        className="w-full h-[220px] md:h-[300px] lg:h-[340px] object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
      />
    </div>

    {/* TEXT */}
    <div data-aos="fade-left"
     className="order-1 md:order-2">
      <h2 className="text-2xl md:text-3xl font-bold mb-5">
        What We Do
      </h2>

      <p className="text-gray-700 text-base md:text-lg leading-7 text-justify">
        We provide customized HVAC & MEP solutions including design,
        installation, maintenance, repair, and system upgrades. Every solution
        we deliver is engineered with performance, safety, efficiency, and
        durability in mind.
      </p>
    </div>

  </div>
</section>


      {/* ================= WHY TRUST US ================= */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2
          data-aos="fade-right"
          className="text-2xl md:text-3xl font-bold mb-8"
        >
          Why Customers Trust Us
        </h2>

        <ul className="grid md:grid-cols-2 gap-4 text-gray-700 text-base md:text-lg">
          {[
            "We deliver what we promise",
            "Transparent and competitive pricing",
            "Strict quality and safety standards",
            "Committed timelines",
            "Dependable after-sales support",
          ].map((item, index) => (
            <li key={index} data-aos="fade-up">
              ✔ {item}
            </li>
          ))}
        </ul>
      </section>
{/* ================= MISSION & VALUES ================= */}
<section className="bg-gray-800 text-white py-10 md:py-12">
  <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

    {/* ===== LEFT : TEXT ===== */}
    <div>
      <h2
        data-aos="fade-up"
        className="text-2xl md:text-3xl font-bold mb-6"
      >
        Mission, Vision & Values
      </h2>

      <p data-aos="fade-up" className="mb-4 text-base md:text-lg leading-7">
        <strong>Mission:</strong> To simplify engineering resources and deliver
        solutions that clearly stand apart through quality, efficiency, and
        reliability.
      </p>

      <p data-aos="fade-up" className="mb-4 text-base md:text-lg leading-7">
        <strong>Vision:</strong> To be the most sought-after consulting and
        contracting company through distinctive engineering methodologies.
      </p>

      <p data-aos="fade-up" className="text-base md:text-lg leading-7">
        <strong>Core Values:</strong> Perseverance | Reliability | Optimism |
        Safety | Passion | Excellence | Resourcefulness
      </p>
    </div>

    {/* ===== RIGHT : IMAGE ===== */}
    <div data-aos="fade-left">
      <img
        src="/images/mission.png"
        alt="Mission Vision and Values - Technical Engineers"
        className="w-full h-[200px] md:h-[280px] lg:h-[320px] object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
      

      />
    </div>

  </div>
</section>

    </div>
  );
}
