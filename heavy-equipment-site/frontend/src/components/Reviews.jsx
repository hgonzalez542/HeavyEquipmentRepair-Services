import { reviews } from "../data/reviews";

export default function Reviews() {
  return (
    <section id="reviews" className="py-14 md:py-20">
      <div className="container-max">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Customer Reviews</h2>
        <p className="mt-2 text-zinc-600">Real feedback from people who rely on their trucks and equipment.</p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-3xl border border-zinc-200 p-6">
              <div className="text-sm font-semibold">{r.name}</div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">{r.text}</p>
              <div className="mt-4 text-xs text-zinc-500">★★★★★</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
