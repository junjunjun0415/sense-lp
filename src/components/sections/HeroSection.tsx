import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* 背景 */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.85) 100%), url('/hero.jpg'), linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #0a0a0a 100%)",
        }}
      />

      {/* 巨大タイポ */}
      <div className="pointer-events-none absolute inset-0 z-10 select-none">
        <span
          className="absolute top-[6%] left-[58%] font-display font-black text-white/90 leading-none tracking-tighter whitespace-nowrap"
          style={{ fontSize: "clamp(180px, 22vw, 360px)" }}
        >
          SEN
        </span>
        <span
          className="absolute bottom-[-8%] left-[-6%] font-display font-black text-white/15 leading-none tracking-tighter whitespace-nowrap"
          style={{ fontSize: "clamp(180px, 22vw, 360px)" }}
        >
          SE
        </span>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-2/3 bg-gradient-to-t from-black via-black/60 to-transparent" />

      {/* ヘッダー */}
      <header className="relative z-30 flex items-start justify-between px-6 py-5 md:px-10 md:py-7">
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center leading-none">
            <span className="font-display text-3xl md:text-4xl font-black tracking-wider">
              SENSE
            </span>
            <span className="mt-1 text-[10px] tracking-[0.3em] text-white/70">
              センスは創れる
            </span>
          </div>
          <div className="hidden md:block text-[11px] leading-tight text-white/80">
            <div>渋谷口コミNO.1</div>
            <div>メンズ専門美容室</div>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <nav className="hidden lg:flex items-center gap-8 font-display text-sm tracking-[0.25em]">
            <a href="#concept" className="hover:opacity-70 transition">CONCEPT</a>
            <a href="#menu" className="hover:opacity-70 transition">MENU</a>
            <a href="#stylist" className="hover:opacity-70 transition">STYLIST</a>
            <a href="#salon" className="hover:opacity-70 transition">SALON</a>
            <Link href="/company" className="hover:opacity-70 transition">COMPANY</Link>
          </nav>
          <button
            aria-label="メニュー"
            className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center bg-accent text-black hover:opacity-90 transition"
          >
            <span className="flex flex-col gap-1.5">
              <span className="block h-[2px] w-6 bg-black" />
              <span className="block h-[2px] w-6 bg-black" />
              <span className="block h-[2px] w-6 bg-black" />
            </span>
          </button>
        </div>
      </header>

      {/* 右サイド */}
      <aside className="hidden md:flex absolute right-5 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-3">
          <span
            className="font-display text-xs tracking-[0.4em] text-white"
            style={{ writingMode: "vertical-rl" }}
          >
            OFFICIAL
          </span>
          <span className="block h-10 w-px bg-white/60" />
        </div>
        <div className="flex flex-col items-center gap-4">
          <a href="#" aria-label="Instagram" className="hover:opacity-70 transition">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          </a>
          <a href="#" aria-label="YouTube" className="hover:opacity-70 transition">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5 3-5 3z" />
            </svg>
          </a>
          <a href="#" aria-label="TikTok" className="hover:opacity-70 transition">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.6 6.7a5.3 5.3 0 0 1-3.2-1.1 5.3 5.3 0 0 1-2-3.6h-3.3v13.5a2.7 2.7 0 1 1-2.7-2.7c.3 0 .6 0 .9.1V9.6a6 6 0 0 0-.9-.1 6 6 0 1 0 6 6V9.3a8.6 8.6 0 0 0 5.2 1.7V7.7c0-.3 0-.7-.1-1z" />
            </svg>
          </a>
        </div>
      </aside>

      {/* 左下キャッチ */}
      <div className="absolute bottom-32 md:bottom-40 left-6 md:left-10 z-30 max-w-[90%]">
        <p className="font-sans text-3xl md:text-5xl font-bold tracking-wider drop-shadow-lg">
          存在するなら進化しろ！
        </p>
        <p className="mt-3 text-sm md:text-base text-white/85 tracking-wider">
          メンズヘア専門のプロフェッショナルが、あなたのセンスを引き出す。
        </p>
      </div>

      {/* スクロール */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1">
        <span className="font-display text-[10px] tracking-[0.3em] text-white/70">SCROLL</span>
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" className="animate-bounce">
          <path d="M8 2v14M2 12l6 6 6-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* 予約CTA */}
      <a
        href="#reserve"
        className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-40 flex h-24 w-24 md:h-28 md:w-28 flex-col items-center justify-center rounded-full bg-accent text-black shadow-xl hover:scale-105 transition-transform"
      >
        <span className="font-sans text-base md:text-lg font-bold leading-none">ご予約</span>
        <span className="mt-1 font-display text-[10px] md:text-xs tracking-[0.2em] leading-none">RESERVE</span>
      </a>
    </section>
  );
}
