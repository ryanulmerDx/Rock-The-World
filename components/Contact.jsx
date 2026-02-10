import Waveform from "./Waveform";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden bg-brand-dark">
      {/* Animated soundwave */}
      <Waveform />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Let&apos;s Make It Happen
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Ready to book an event or want to talk production? Reach out
            directly — we&apos;re always up for a conversation.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-lg mx-auto">
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">
                Contact
              </p>
              <p className="text-xl font-semibold">L.J. Crandell</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">
                Phone
              </p>
              <a
                href="tel:6022888917"
                className="text-lg text-brand-red hover:text-red-400 transition-colors"
              >
                (602) 288-8917
              </a>
            </div>

            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">
                Email
              </p>
              <a
                href="mailto:ljcrandell@gmail.com"
                className="text-lg text-brand-red hover:text-red-400 transition-colors break-all"
              >
                ljcrandell@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
