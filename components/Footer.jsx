export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-bold text-lg">
            <span className="text-brand-red">Rock The World</span> Productions
          </p>
          <p className="text-gray-500 text-sm mt-1">We Do It Live.</p>
        </div>

        <div className="text-center md:text-right text-sm text-gray-500 space-y-1">
          <p>
            <a
              href="tel:6022888917"
              className="hover:text-gray-300 transition-colors"
            >
              (602) 288-8917
            </a>
            {" · "}
            <a
              href="mailto:ljcrandell@gmail.com"
              className="hover:text-gray-300 transition-colors"
            >
              ljcrandell@gmail.com
            </a>
          </p>
          <p>
            &copy; {new Date().getFullYear()} Rock The World Productions. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
