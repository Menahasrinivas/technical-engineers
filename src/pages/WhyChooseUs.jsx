export default function WhyChooseUs() {
  return (
    <div>
      {/* ================= BANNER ================= */}
      <section className="relative h-[55vh] flex items-center">
        <img
          src="/banner/whychoose.webp"
          alt="Why Choose Technical Engineers"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative max-w-7xl mx-auto px-4 text-white">
          <h1
            data-aos="fade-up"
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Why Choose Technical Engineers
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="max-w-3xl text-base md:text-lg"
          >
            A Network of Trust Built Across Industries
          </p>
        </div>
      </section>

    {/* ================= INTRO ================= */}
<section className="max-w-7xl mx-auto px-4 py-16">
  <div className="grid md:grid-cols-2 gap-10 items-center">

    {/* ===== LEFT : TEXT ===== */}
    <div data-aos="fade-up">
      <p className="text-gray-700 text-base md:text-lg leading-7 text-justify">
        At Technical Engineers, our growth has been shaped by the trust of
        organizations operating in highly demanding environments. Over the
        years, we have partnered with clients across healthcare, hospitality,
        retail, IT, infrastructure, manufacturing, education, and commercial
        sectors—delivering HVAC & MEP solutions that meet strict performance,
        safety, and reliability expectations.
      </p>

      <p className="text-gray-700 text-base md:text-lg leading-7 mt-4 text-justify">
        Each client relationship represents a commitment fulfilled through
        responsible engineering, consistent client service, and professional
        integrity.
      </p>
    </div>

    {/* ===== RIGHT : IMAGE ===== */}
    <div data-aos="fade-left">
      <img
        src="/images/about.webp"
        alt="Trusted HVAC & MEP Engineering Partner"
        className="w-full h-[220px] md:h-[360px] lg:h-[420px] object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
      />
    </div>

  </div>
</section>

      {/* ================= CLIENT SECTIONS ================= */}
      <section className="bg-slate-50 py-16">
        <div className="text-center mb-12">
  <h2
    data-aos="fade-up"
    className="text-2xl md:text-3xl font-bold text-gray-800 mb-3"
  >
    Our Valuable Clients
  </h2>

  <p
    data-aos="fade-up"
    data-aos-delay="100"
    className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto"
  >
    Building long-term partnerships across industries through reliable HVAC & MEP solutions.
  </p>
</div>

        <div className="max-w-7xl mx-auto px-4 space-y-16">

          <ClientGroup title="Architecture & Design">
            <li>ARCHITECTURE RED – Besant Nagar</li>
            <li>MARLECHA INTERIORS PRIVATE LIMITED (MIPL)</li>
            <li>STUDIOKON VENTURES PVT LTD</li>
          </ClientGroup>

          <ClientGroup title="Hospitals & Healthcare">
            <li>BLOOM LIFE HOSPITAL – Chennai (All Branches)</li>
            <li>Dr. RAI MEMORIAL MEDICAL CENTRE – Teynampet</li>
            <li>MATHA PITHA HOSPITAL</li>
            <li>M N ORTHOPEDIC HOSPITAL – Kilpauk</li>
            <li>M N EYE HOSPITAL – Tondiarpet</li>
            <li>M N EYE HOSPITAL – Adyar</li>
            <li>M N EYE HOSPITAL – Redhill</li>
            <li>M N EYE HOSPITAL – Perungalathur</li>
            <li>SANCHU ANIMAL HOSPITAL (CAVINKARE PVT LTD)</li>
            <li>WORLD SOURCE HEALTHCARE INDIA PVT LTD</li>
          </ClientGroup>

          <ClientGroup title="Hospitality, Restaurants & Food Chains">
            <li>CHINESE WOK – Chennai (All Branches)</li>
            <li>C K BAKERY</li>
            <li>GEETHAM RESTAURANT</li>
            <li>HARDCASTLE RESTAURANTS PVT LTD (McDonald’s)</li>
            <li>ILLARA HOTELS & SPA</li>
            <li>KAILASH MAHAL – OMR</li>
            <li>KAILASH MAHAL – ECR</li>
            <li>LENEXIS FOODWORKS PVT LTD</li>
            <li>RED APPLE KITCHEN CONSULTANCY PVT LTD</li>
            <li>RESTAURANT BRANDS ASIA LIMITED (Burger King)</li>
            <li>REBEL FOODS PVT LTD</li>
            <li>SALEM R R BRIYANI – ECR</li>
            <li>SAPPHIRE FOODS PVT LTD (KFC)</li>
            <li>SAPPHIRE FOODS PVT LTD (Pizza Hut)</li>
            <li>SPICE KLUB SND VENTURES LLP</li>
            <li>VPMA’S CAPTAIN MAHAL – Tondiarpet</li>
            <li>ZUBI CONFECTIONARIES PRIVATE LIMITED</li>
          </ClientGroup>

          <ClientGroup title="Retail, Fashion & Lifestyle">
            <li>FASHIN PARK – Royapuram</li>
            <li>H & M – Phoenix Mall</li>
            <li>HI STYLE FURNITURE</li>
            <li>N K EXOTICA</li>
            <li>SILA SOLUTIONS PRIVATE LIMITED (Decathlon)</li>
            <li>SPAR MAX HYPER MARKET</li>
            <li>W – Pondy Bazar</li>
            <li>70MM MALE CLOTHING – Thiruvanmiyur</li>
          </ClientGroup>

          <ClientGroup title="IT, Software & Digital Services">
            <li>CHRONUS SOFTWARE INDIA PVT LTD</li>
            <li>CONCEPT CONSILIO INDIA PVT LTD</li>
            <li>NETLINK DIGITAL SOLUTIONS PVT LTD</li>
            <li>NITTANY CREATIVE SERVICES LLP</li>
            <li>QATALYS SOFTWARE TECHNOLOGIES</li>
            <li>TECHNOLOGY FRONTIES INDIA PVT LTD</li>
            <li>XEBIA NDS INDIA PRIVATE LIMITED</li>
          </ClientGroup>

          <ClientGroup title="Infrastructure, Manufacturing & Industrial">
            <li>CANADIAN CRYSTALLINE WATER INDIA LTD</li>
            <li>DUPRO CONSULTANTS PVT LTD</li>
            <li>FOCUS INFRA SOLUTIONS</li>
            <li>KRITICONS LTD</li>
            <li>NEW CHENNAI TOWNSHIP PRIVATE LIMITED</li>
            <li>PSTS LOGISTICS PVT LTD – Parrys</li>
            <li>QUTE EXTRUSIONS PVT LTD – Gummidipundi</li>
            <li>SREI EQUIPMENT FINANCE LIMITED</li>
            <li>TRACTORS AND FARM EQUIPMENT LIMITED (TAFE)</li>
            <li>VALEO FRICTION MATERIALS INDIA LIMITED</li>
            <li>VRV ENGINEERS INDIA LLP</li>
            <li>VSI – MINT</li>
          </ClientGroup>

          <ClientGroup title="Education & Institutions">
            <li>SRM INSTITUTE OF SCIENCE AND TECHNOLOGY – Kattankulathur</li>
            <li>SRM COLLEGE OF AGRICULTURAL SCIENCES</li>
          </ClientGroup>

          <ClientGroup title="Entertainment, Leisure & Other Organizations">
            <li>VGP UNIVERSAL KINGDOM – ECR</li>
            <li>VGP MARINE KINGDOM – ECR</li>
            <li>THE VICTORY CHURCHES OF INDIA</li>
          </ClientGroup>
        </div>
      </section>

      {/* ================= COMMITMENT ================= */}
      <section className="bg-slate-50 text-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p
            data-aos="fade-up"
            className="text-base md:text-lg max-w-4xl mx-auto"
          >
            We value every client relationship—regardless of project size or
            industry. Our focus remains on long-term performance, operational
            reliability, and professional responsibility.
          </p>
        </div>
      </section>
    </div>
  );
}

/* ================= CLIENT GROUP COMPONENT ================= */
function ClientGroup({ title, children }) {
  return (
    <div
      data-aos="fade-up"
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
    >
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-teal-800">
        {title}
      </h2>

      <ul className="grid md:grid-cols-2 gap-x-6 gap-y-2 text-gray-700 text-sm md:text-base">
        {children}
      </ul>
    </div>
  );
}
