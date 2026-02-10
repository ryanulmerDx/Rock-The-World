import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">
          About Us
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
          Three Decades of Live Production
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              Rock The World Productions started in 1991 with a love for live
              sound and a simple setup — speakers, a mixer, and a few bands
              willing to trust us. From local bars to full-scale events, that
              passion turned into decades of experience in audio and video
              production.
            </p>
            <p>
              We&apos;ve been part of the live event world ever since, adapting as
              technology evolved while keeping the same focus: making events
              sound and look right in the moment. No shortcuts. No
              overproduction. Just solid execution where it matters most.
            </p>
            <p>
              Today, Rock The World partners with artists, venues, and organizers
              to support live events of all kinds. We&apos;re hands-on, experienced,
              and at our best when everything is happening in real time — because
              we do it live.
            </p>
          </div>

          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="/musician-1658887.jpg"
              alt="Musician performing live on stage"
              fill
              className="object-cover"
              quality={80}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
