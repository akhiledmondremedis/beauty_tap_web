import {
  Mail,
  Phone,
  Clock,
  Sparkles,
  Heart,
  MessageCircle,
  Headphones,
} from "lucide-react";

export default function Support() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-white text-gray-900">
      {/* HERO */}
      <section className="relative overflow-hidden py-28 px-4">
        {/* Decorative blobs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow mb-6">
            <Sparkles size={16} className="text-pink-600" />
            <span className="text-sm font-semibold text-gray-700">
              Premium Support Experience
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Beautytap{" "}
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Support
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            Book • Relax • Glow ✨
          </p>

          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-10">
            We help you with bookings, payments, salons, and technical issues —
            so your beauty journey stays effortless.
          </p>

          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-10 py-5 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition">
            <Heart size={20} />
            Contact Support
          </button>
        </div>
      </section>

      {/* SUPPORT CHANNELS */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            How can we help?
          </h2>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-14">
            Choose the most convenient way to reach our support team.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* EMAIL */}
            <div className="group bg-white/80 backdrop-blur border border-gray-100 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition">
              <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Mail className="text-pink-600" size={30} />
              </div>

              <h3 className="text-2xl font-bold mb-3">Email Support</h3>

              <a
                href="mailto:support@beautytap.in"
                className="text-lg font-semibold text-pink-600 hover:underline inline-flex items-center gap-2"
              >
                support@beautytap.in →
              </a>

              <p className="mt-4 text-gray-600 flex items-center gap-2">
                <MessageCircle size={16} />
                Replies within 24 hours
              </p>
            </div>

            {/* PHONE */}
            <div className="group bg-white/80 backdrop-blur border border-gray-100 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Phone className="text-purple-600" size={30} />
              </div>

              <h3 className="text-2xl font-bold mb-3">Phone Support</h3>

              <a
                href="tel:+919344925022"
                className="text-lg font-semibold text-purple-600 hover:underline"
              >
                +91-93449-25022
              </a>

              <div className="mt-6 bg-gray-50 rounded-2xl p-4 flex gap-3">
                <Clock className="text-gray-700" />
                <div>
                  <p className="font-semibold">Support Hours</p>
                  <p className="text-sm text-gray-600">
                    Mon – Sat · 10:00 AM – 6:00 PM (IST)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-pink-100 via-purple-100 to-white rounded-[3rem] p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-pink-300/30 rounded-full blur-3xl" />

          <Headphones
            size={56}
            className="text-pink-600 mx-auto mb-6"
          />

          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Still need help?
          </h3>

          <p className="text-gray-600 max-w-md mx-auto mb-10">
            Our beauty experts are always ready to assist you — no matter the
            question.
          </p>

          <button className="px-10 py-4 rounded-full bg-gray-900 text-white font-semibold text-lg hover:bg-black transition">
            Talk to Support
          </button>
        </div>
      </section>
    </main>
  );
}
