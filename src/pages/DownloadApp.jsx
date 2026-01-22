import { Sparkles } from "lucide-react";

export default function DownloadApp() {
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
              Premium Beauty App
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Beautytap{" "}
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              App
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            Book • Relax • Glow ✨
          </p>

          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-12">
            Discover salons, book services instantly, manage appointments, and
            make secure payments — all in one beautiful app.
          </p>

          {/* STORE LOGOS */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            {/* App Store Badge */}
            <a
              href="https://apps.apple.com/in/app/beautytap-book-glow/id6757469615"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-16 max-w-[380px] object-contain"
              />
            </a>

            {/* Play Store Badge */}
            <a
              href="https://play.google.com/store/apps/details?id=com.beautytap.consumer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition"
            >
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                className="h-17 max-w-[280px] object-contain"
              />
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div className="bg-white rounded-3xl p-10 shadow-lg">
            <h3 className="text-xl font-bold mb-2">Instant Booking</h3>
            <p className="text-gray-600">
              Book your favorite salon services in seconds.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-lg">
            <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
            <p className="text-gray-600">
              Pay safely with UPI, cards, and wallets.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-lg">
            <h3 className="text-xl font-bold mb-2">Trusted Salons</h3>
            <p className="text-gray-600">
              Verified professionals and real customer reviews.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-pink-100 via-purple-100 to-white rounded-[3rem] p-14 shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Your beauty journey starts here 💖
          </h3>

          <p className="text-gray-600 max-w-md mx-auto mb-10">
            Download Beautytap today and experience effortless beauty bookings.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-12 max-w-[200px] object-contain"
            />
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Play Store"
              className="h-16 max-w-[200px] object-contain"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
