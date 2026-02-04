import { useEffect, useState } from "react";

export default function Home() {
  const images = [
    "/banner/homebanner.webp",
    "/banner/homebanner-one.webp",
    "/banner/homebanner-two.webp",
  ];

  // clone first image at the end
  const slides = [...images, images[0]];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransition, setIsTransition] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // reset without animation after last clone
  useEffect(() => {
    if (currentSlide === slides.length - 1) {
      setTimeout(() => {
        setIsTransition(false); // remove animation
        setCurrentSlide(0);     // jump to first real slide
      }, 1000); // match transition duration
    } else {
      setIsTransition(true);
    }
  }, [currentSlide]);

  return (
    <div>
      {/* ================= HERO BANNER ================= */}
      <section className="relative h-[75vh] overflow-hidden flex items-center justify-center">

        {/* SLIDING CAROUSEL */}
        <div
          className={`absolute inset-0 flex ${
            isTransition
              ? "transition-transform duration-1000 ease-in-out"
              : ""
          }`}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="HVAC & MEP Engineering"
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65"></div>

        {/* Content */}
        <div className="relative text-center text-white max-w-4xl px-4">
          <h1 data-aos="fade-down" className="text-3xl md:text-5xl font-bold mb-4">
            HVAC & MEP Engineering Experts in Chennai, Tamil Nadu
          </h1>
          <h2 data-aos="fade-up" data-aos-delay="200" className="text-lg md:text-2xl italic">
            “Delivering dependable engineering solutions that stand the test of time.”
          </h2>
        </div>
      </section>
    

      {/* ================= INTRO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div data-aos="fade-up">
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
        <div data-aos="fade-down">
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
          <div data-aos="fade-up">
            <img
              src="/images/who-we-are.webp"
              alt="Who We Are"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Text */}
          <div data-aos="fade-down">
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
    data-aos="fade-up"
    className="text-2xl md:text-3xl font-bold mb-12 text-center"
  >
    Our Services
  </h2>

  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
    {[
      {
        title: "HVAC System Design & Installation",
        desc: "End-to-end HVAC planning and installation solutions ensuring efficiency, comfort, and long-term reliability.",
        img: "/images/hvac-design.webp",
      },
      {
        title: "Heating, Ventilation & Extraction Systems",
        desc: "Advanced heating and ventilation systems designed to maintain healthy indoor air quality.",
        img: "/images/heating-ventilation.webp",
      },
      {
        title: "Cooling Towers (Installations & Upgrades)",
        desc: "Energy-efficient cooling tower solutions for industrial and commercial applications.",
        img: "/images/cooling-tower.webp",
      },
      {
        title: "Process Cooling & Heating",
        desc: "Customized process cooling and heating systems for manufacturing and industrial operations.",
        img: "/images/process-cooling.webp",
      },
      {
        title: "Ducting Systems",
        desc: "Precision-engineered ducting systems for optimal airflow and reduced energy loss.",
        img: "/images/ducting.webp",
      },
      {
        title: "Chillers & Boilers",
        desc: "Reliable chiller and boiler systems delivering consistent temperature control and performance.",
        img: "/images/chiller-boiler.webp",
      },
      {
        title: "Ventilation & Condensation Control",
        desc: "Effective ventilation and moisture control solutions to protect structures and equipment.",
        img: "/images/ventilation-control.webp",
      },
      {
        title: "Product Storage & Chilling Solutions",
        desc: "Cold storage and chilling solutions designed to preserve product quality and safety.",
        img: "/images/cold-storage.webp",
      },
    ].map((service, index) => (
      <div
        key={index}
        data-aos="zoom-in"
        className="group bg-white rounded-xl shadow-md 
                   hover:shadow-xl transition duration-300 group"
      >
        {/* Image */}
        <div className="h-44 overflow-hidden">
          <img
            src={service.img}
            alt={service.title}
            className="w-full h-full object-cover
                       group-hover:scale-105 transition duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-6"
        data-aos="fade-up"
  data-aos-delay="150"
  data-aos-easing="ease-out-cubic"
        >
          <h3 className="text-lg font-semibold mb-2 group-hover:text-teal-700">
            {service.title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {service.desc}
          </p>
        </div>
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
