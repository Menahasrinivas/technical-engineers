export default function Contact() {
  return (
    <div>
      {/* ================= BANNER ================= */}
      <section className="relative h-[50vh] flex items-center">
        <img
          src="/banner/contactbanner.webp"
          alt="Contact Technical Engineers"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative max-w-7xl mx-auto px-4 text-white">
          <h1
            data-aos="fade-up"
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Contact Us
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-base md:text-lg max-w-3xl"
          >
            Reliable HVAC & MEP Support in Chennai & Tamil Nadu
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2
          data-aos="fade-up"
          className="text-2xl md:text-3xl font-bold mb-6"
        >
          Technical Engineers – Chennai, Tamil Nadu
        </h2>

        <p
          data-aos="fade-up"
          className="text-gray-700 text-base md:text-lg leading-7 max-w-4xl text-justify"
        >
          At Technical Engineers, we’re always ready to help you with reliable
          HVAC & MEP solutions. Whether you need a quick service visit, technical
          consultation, or support for an ongoing project, our team is just a
          call or message away.
        </p>

        <p
          data-aos="fade-up"
          className="text-gray-700 text-base md:text-lg leading-7 max-w-4xl mt-4 text-justify"
        >
          We believe good service starts with clear communication and quick
          response. Reach out to us—we’ll guide you with the right solution
          based on your requirement.
        </p>
      </section>

    <section className="bg-teal-50 py-16">
  <div
    data-aos="fade-up"
    className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-stretch"
  >
    {/* ========== LEFT : CONTACT INFO ========== */}
    <div className="bg-white rounded-2xl shadow-md p-8 h-full flex flex-col">
      <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6">
        Get in Touch
      </h2>

      <div className="space-y-5 text-gray-700 leading-7">
        <div>
          <h3 className="font-semibold text-gray-800">📍 Office Address</h3>
          <p>
            Technical Engineers<br />
            No. 2/1215A, 7th Main Road,<br />
            7th Cross Street,<br />
            Karpaga Vinayagar Nagar,<br />
            Vettuvankeni,<br />
            Chennai – 600115
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800">📞 Call Us</h3>
          <p>97907 04878 | 90420 90053</p>
        </div>
<div>
  <h3 className="font-semibold text-gray-800 flex items-center gap-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="w-6 h-6"
    >
      {/* Green Circle */}
      <circle cx="256" cy="256" r="256" fill="#25D366" />

      {/* White Chat Bubble */}
      <path
        fill="#ffffff"
        d="M256 96c-88.4 0-160 64.5-160 144 0 32.2 11.7 61.9 31.3 85.6L96 416l96.8-28.7c19.1 6.3 39.8 9.7 63.2 9.7 88.4 0 160-64.5 160-144S344.4 96 256 96z"
      />

      {/* Phone Icon */}
      <path
        fill="#25D366"
        d="M304.3 289.7c-3.5-1.8-20.6-10.1-23.8-11.3-3.2-1.2-5.6-1.8-8 1.8-2.4 3.5-9.2 11.3-11.3 13.7-2.1 2.4-4.1 2.7-7.6.9-20.6-10.3-34-18.5-47.6-42.2-3.6-6.2 3.6-5.8 10.3-19.3 1.2-2.4.6-4.5-.3-6.3-.9-1.8-8-19.3-11-26.4-2.9-7-5.9-6-8-6.1-2.1-.1-4.5-.1-6.9-.1s-6.3.9-9.6 4.5c-3.2 3.5-12.7 12.4-12.7 30.2s13 35 14.8 37.4c1.8 2.4 25.6 39 62 54.6 8.6 3.7 15.3 5.9 20.5 7.5 8.6 2.7 16.4 2.3 22.6 1.4 6.9-1 20.6-8.4 23.5-16.6 2.9-8.1 2.9-15.1 2.1-16.6-.9-1.5-3.2-2.4-6.7-4.2z"
      />
      </svg>

       WhatsApp Us
      </h3>
       <p>97907 04878 | 90420 90053</p>
       </div>
<div>
   <p className="font-semibold text-lg">
  📧 Email:<br />
  For enquiries, consultations, and service requests{" "}
  <a
    href="mailto:technicalengineersmd@gmail.com"
    className="underline hover:text-black"
  >
    technicalengineersmd@gmail.com
  </a>
</p>

</div>

      </div>
    </div>

    {/* ========== RIGHT : CONTACT FORM ========== */}
    <div className="bg-white rounded-2xl shadow-md p-8 h-full flex flex-col">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Send Us a Message
      </h2>

      <form className="flex flex-col h-full space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500 outline-none"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500 outline-none"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500 outline-none"
        />

        <textarea
          rows="4"
          placeholder="Your Message"
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500 outline-none"
        ></textarea>

        {/* Push button to bottom */}
        <button
          type="button"
          className="mt-auto w-full bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 rounded-lg transition"
        >
          Submit Enquiry
        </button>
      </form>
    </div>
  </div>
</section>

{/* ================= WORKING HOURS & SERVICE AREAS ================= */}
<section className="bg-slate-50 py-16">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-10 items-stretch">

      {/* ========== WORKING HOURS ========== */}
      <div
        data-aos="fade-up"
        className="bg-white rounded-xl shadow-sm p-8 h-full"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-teal-800">
          Working Hours
        </h2>

        <p className="text-gray-700 text-base md:text-lg mb-3">
          🕘 <strong>Monday – Saturday:</strong> 9:00 AM to 6:30 PM
        </p>

        <p className="text-gray-700 text-base md:text-lg">
          🕘 <strong>Sunday:</strong> Emergency & on-call support
          <span className="block text-sm text-gray-500 mt-1">
            (Based on availability)
          </span>
        </p>
      </div>

      {/* ========== SERVICE AREAS ========== */}
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="bg-white rounded-xl shadow-sm p-8 h-full"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-teal-800">
          Service Areas
        </h2>

        <ul className="space-y-3 text-gray-700 text-base md:text-lg">
          <li className="flex items-start gap-2">
            <span>📍</span>
            <span>Chennai (All Major Areas)</span>
          </li>

          <li className="flex items-start gap-2">
            <span>📍</span>
            <span>Tamil Nadu (Project-based & Contract Services)</span>
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>


      {/* ================= QUICK BOOKING CTA ================= */}
      <section className="bg-gray-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2
            data-aos="fade-up"
            className="text-2xl md:text-3xl font-bold mb-4"
          >
            Quick Booking & Same-Day Visit
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-base md:text-lg max-w-3xl mx-auto mb-6"
          >
            Need immediate assistance? Call or WhatsApp us to book a same-day
            service visit (subject to availability). Our team will assess your
            requirement and schedule the visit at the earliest possible time.
          </p>

          <p className="font-semibold text-lg">
            📞 97907 04878 | 90420 90053
          </p>
  <p className="font-semibold text-lg">
  📧 Email:<br />
  For enquiries, consultations, and service requests{" "}
  <a
    href="mailto:technicalengineersmd@gmail.com"
    className="underline hover:text-white"
  >
    technicalengineersmd@gmail.com
  </a>
</p>


        </div>
      </section>

     
    </div>
  );
}
