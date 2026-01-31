import { services } from "../data/services";

export default function Services() {
  return (
    <section id="services" className="py-14 md:py-20">
      <div className="container-max">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Our Services
            </h2>
            <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-300">
              Full-service heavy-duty repair — trucks, commercial vehicles, and
              construction equipment.
            </p>
          </div>

          <a
            href="#quote"
            className="hidden rounded-xl border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:text-white dark:hover:bg-zinc-900 md:inline-flex"
          >
            Request a Quote
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-3xl border border-zinc-200 bg-white p-6 transition-all hover:scale-[1.02] hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
            >
              {/* Image */}
              <div className="mb-4 h-36 w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-contain p-4 transition-transform group-hover:scale-105"
                />
              </div>

              {/* Text */}
              <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
                {s.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
