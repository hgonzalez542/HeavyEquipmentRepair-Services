export default function Footer() {
  return (
    <footer id="contact" className="border-t border-zinc-200 bg-zinc-50">
      <div className="container-max grid gap-8 py-12 md:grid-cols-3">
        <div>
          <div className="text-sm font-semibold">Heavy Equipment Repair & Services</div>
          <p className="mt-2 text-sm text-zinc-600">
            Complete truck and heavy equipment repair. Diagnostics, programming, tires, engines, and more.
          </p>
        </div>

        <div className="text-sm">
          <div className="font-semibold">Contact</div>
          <div className="mt-2 grid gap-1 text-zinc-700">
            <div>132 Old Fall River Rd, Seekonk, MA 02771</div>
            <div>(508)-954-9397 ~ (Primary)</div>
            <div>(401)-215-8651 ~ (Secondary)</div>
          </div>
        </div>

        <div className="text-sm">
          <div className="font-semibold">Site</div>
          <div className="mt-2 grid gap-1">
            <a className="text-zinc-700 hover:text-zinc-900" href="#services">Services</a>
            <a className="text-zinc-700 hover:text-zinc-900" href="#quote">Request a Quote</a>
            <a className="text-zinc-700 hover:text-zinc-900" href="#reviews">Reviews</a>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-200 py-6 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Heavy Equipment Repair & Services. All rights reserved.
      </div>
    </footer>
  );
}
