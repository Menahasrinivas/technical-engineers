export default function Footer() {
  return (
    <footer className="bg-teal-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">

        {/* ===== BRAND / ABOUT ===== */}
        <div>
          <h3 className="text-xl font-bold mb-4">Technical Engineers</h3>
          <p className="text-sm leading-6 text-teal-100">
            Reliable HVAC & MEP engineering solutions delivered with
            professionalism, safety, and long-term performance across
            Chennai and Tamil Nadu.
          </p>
        </div>

        {/* ===== ADDRESS ===== */}
        <div>
          <h4 className="text-lg font-semibold mb-4">📍 Office Address</h4>
          <p className="text-sm text-teal-100 leading-6">
            Technical Engineers<br />
            No. 2/1215A, 7th Main Road,<br />
            7th Cross Street,<br />
            Karpaga Vinayagar Nagar,<br />
            Vettuvankeni,<br />
            Chennai – 600115
          </p>
        </div>

        {/* ===== CONTACT ===== */}
        <div>
          <h4 className="text-lg font-semibold mb-4">📞 Contact</h4>
          <p className="text-sm text-teal-100 mb-2">
            <strong>Call Us:</strong><br />
            97907 04878 | 90420 90053
          </p>

          <p className="text-sm text-teal-100 mb-2">
            <strong>WhatsApp Us:</strong><br />
            97907 04878 | 90420 90053
          </p>
    <p className="text-sm text-teal-100">
       <strong>📧 Email:</strong><br />
        For enquiries, consultations, and service requests{" "}
        <a
           href="mailto:technicalengineersmd@gmail.com"
             className="underline hover:text-white"
             >
             technicalengineersmd@gmail.com
              </a>
                 </p>
            </div>


        
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="bg-teal-900 text-center py-4 text-sm text-teal-100">
        © {new Date().getFullYear()} Technical Engineers – Chennai, Tamil Nadu
      </div>
    </footer>
  );
}
