export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="container-max flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-zinc-900" />
          <div className="leading-tight">
            <div className="text-sm font-semibold">Heavy Equipment</div>
            <div className="text-xs text-zinc-500">Repair & Services</div>
          </div>
        </div>

        <nav className="hidden items-center gap-7 text-sm md:flex">
          <a className="text-zinc-700 hover:text-zinc-900" href="#services">Services</a>
          <a className="text-zinc-700 hover:text-zinc-900" href="#quote">Request a Quote</a>
          <a className="text-zinc-700 hover:text-zinc-900" href="#reviews">Reviews</a>
          <a className="text-zinc-700 hover:text-zinc-900" href="#contact">Contact</a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:5089549397"
            className="hidden rounded-xl border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50 md:inline-flex"
          >
            Call Now
          </a>
          <a
            href="#quote"
            className="inline-flex rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  );
}
