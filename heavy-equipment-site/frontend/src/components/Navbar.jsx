export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/70">
      <div className="container-max flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-zinc-900 dark:bg-white" />
          <div className="leading-tight">
            <div className="text-sm font-semibold">Heavy Equipment</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">Repair & Services</div>
          </div>
        </div>

        <nav className="hidden items-center gap-7 text-sm md:flex">
          <a className="text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white" href="#services">
            Services
          </a>
          <a className="text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white" href="#quote">
            Request a Quote
          </a>
          <a className="text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white" href="#reviews">
            Reviews
          </a>
          <a className="text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white" href="#contact">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-xl border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:text-white dark:hover:bg-zinc-900"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>

          <a
            href="#quote"
            className="inline-flex rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  );
}
