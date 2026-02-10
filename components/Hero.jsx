import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background image */}
      <Image
        src="/band-4671748.jpg"
        alt="Live band performing with crowd surfing"
        fill
        className="object-cover object-center"
        priority
        quality={85}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/80" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-4">
          Since 1991
        </p>
        <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6">
          We Do It{" "}
          <span className="text-brand-red">Live</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Professional audio, video, and live event production for artists,
          venues, and organizers who need it done right — in the moment.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="bg-brand-red text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-red-600 transition-colors"
          >
            Contact / Book an Event
          </a>
          <a
            href="#services"
            className="border border-white/20 text-gray-300 font-semibold px-8 py-4 rounded-lg text-lg hover:bg-white/5 transition-colors"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
