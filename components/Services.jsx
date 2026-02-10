import Image from "next/image";

const services = [
  {
    title: "Live Event Production",
    description:
      "Full-service audio, lighting, and video production for concerts, festivals, corporate events, and private shows. We bring the gear, the crew, and the experience to make your event hit.",
    features: ["Sound reinforcement", "Stage lighting", "Video production", "On-site engineering"],
    image: "/audience-1835431.jpg",
    imageAlt: "Guitarist performing on stage in front of a live audience",
  },
  {
    title: "Live Streaming",
    description:
      "Multi-platform live streaming for events, performances, and hosted broadcasts. We handle the tech so you can focus on the show.",
    features: ["Multi-camera setups", "Multi-platform streaming", "Hosted events", "Remote production"],
    image: "/on-air-4901461.jpg",
    imageAlt: "Neon ON AIR sign glowing in a studio",
  },
  {
    title: "Podcast Production",
    description:
      "Equipment, setup, and consulting for podcast creators. Whether you're starting from scratch or leveling up your sound, we'll get you dialed in.",
    features: ["Equipment selection", "Studio setup", "Audio consulting", "Production support"],
    image: "/audio-console-6037338.jpg",
    imageAlt: "Close-up of a professional audio mixing console",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-brand-gray/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Our Services
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-red/30 transition-colors"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover"
                  quality={75}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-5 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-gray-500 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-brand-red rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
