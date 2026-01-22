export default function Hero() {
  return (
    <section className="border-b border-zinc-200">
      <div className="container-max grid gap-10 py-14 md:grid-cols-2 md:items-center md:py-20">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-medium text-zinc-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Heavy-duty truck & equipment specialists
          </div>

          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Complete Truck & Heavy Equipment Repair
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-600">
            Diagnostics, engine work, tires, and construction equipment repairs — built for fleets and owner-operators who need fast, dependable service.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#quote"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
            >
              Request a Quote
            </a>
            <a
              href="tel:5089549397"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-200 px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
            >
              Call 508-954-9397
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
            <div className="rounded-2xl border border-zinc-200 p-4">
              <div className="text-zinc-500">Fast</div>
              <div className="mt-1 font-semibold">Turnarounds</div>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-4">
              <div className="text-zinc-500">Clean</div>
              <div className="mt-1 font-semibold">Workmanship</div>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-4">
              <div className="text-zinc-500">Trusted</div>
              <div className="mt-1 font-semibold">By Fleets</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-br from-zinc-100 to-zinc-200">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(0,0,0,0.06),transparent_40%)]" />
          </div>

          <div className="pointer-events-none absolute -bottom-5 -left-5 hidden rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm md:block">
            <div className="text-xs text-zinc-500">Now accepting</div>
            <div className="mt-1 text-sm font-semibold">Fleet service requests</div>
          </div>
        </div>
      </div>
    </section>
  );
}
