import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-white border-t border-white/10">
      {/* 上部CTAバー */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-display text-xs tracking-[0.4em] text-accent">
              READY TO BE THE STRONGEST?
            </p>
            <p className="mt-3 font-sans text-2xl md:text-4xl font-bold tracking-wider">
              最強の自分に、なる準備を。
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-accent text-black font-sans text-base font-bold tracking-wider hover:opacity-90 transition"
          >
            ご予約はこちら
            <span className="font-display text-[10px] tracking-[0.3em]">RESERVE</span>
          </a>
        </div>
      </div>

      {/* メイン */}
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="font-display text-3xl font-black tracking-wider">SENSE</div>
          <p className="mt-2 font-display text-[10px] tracking-[0.3em] text-white/60">
            MEN&apos;S HAIR SENSE — SHIBUYA
          </p>
          <p className="mt-6 text-sm leading-loose text-white/55 max-w-md">
            最強の男を創る、メンズ専門美容室。
            <br />
            渋谷の中心で、あなたの&quot;センス&quot;を引き出します。
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="font-display text-[10px] tracking-[0.3em] text-accent">SITEMAP</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li><a href="#concept" className="hover:text-accent transition">CONCEPT</a></li>
            <li><a href="#menu" className="hover:text-accent transition">MENU</a></li>
            <li><a href="#stylist" className="hover:text-accent transition">STYLIST</a></li>
            <li><a href="#gallery" className="hover:text-accent transition">GALLERY</a></li>
            <li><a href="#salon" className="hover:text-accent transition">SALON INFO</a></li>
            <li><Link href="/company" className="hover:text-accent transition">COMPANY</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="font-display text-[10px] tracking-[0.3em] text-accent">FOLLOW</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li><a href="#" className="hover:text-accent transition">Instagram — @sense_shibuya</a></li>
            <li><a href="#" className="hover:text-accent transition">YouTube — SENSE Channel</a></li>
            <li><a href="#" className="hover:text-accent transition">TikTok — @sense_shibuya</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} MEN&apos;S HAIR SENSE. All rights reserved.</p>
          <p className="font-display tracking-[0.3em]">PRIVACY / TERMS</p>
        </div>
      </div>
    </footer>
  );
}
