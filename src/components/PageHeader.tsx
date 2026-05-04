import Link from "next/link";

export default function PageHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 md:px-10 py-4">
        <Link href="/" className="flex items-center gap-4">
          <div className="flex flex-col items-center leading-none">
            <span className="font-display text-2xl md:text-3xl font-black tracking-wider text-white">
              SENSE
            </span>
            <span className="mt-1 text-[9px] tracking-[0.3em] text-white/60">
              センスは創れる
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-8">
          <nav className="hidden lg:flex items-center gap-8 font-display text-sm tracking-[0.25em] text-white">
            <Link href="/#concept" className="hover:opacity-70 transition">CONCEPT</Link>
            <Link href="/#menu" className="hover:opacity-70 transition">MENU</Link>
            <Link href="/#stylist" className="hover:opacity-70 transition">STYLIST</Link>
            <Link href="/#salon" className="hover:opacity-70 transition">SALON</Link>
            <Link href="/company" className="hover:opacity-70 transition">COMPANY</Link>
          </nav>
          <button
            aria-label="メニュー"
            className="flex h-11 w-11 md:h-12 md:w-12 items-center justify-center bg-accent text-black hover:opacity-90 transition"
          >
            <span className="flex flex-col gap-1.5">
              <span className="block h-[2px] w-5 bg-black" />
              <span className="block h-[2px] w-5 bg-black" />
              <span className="block h-[2px] w-5 bg-black" />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
