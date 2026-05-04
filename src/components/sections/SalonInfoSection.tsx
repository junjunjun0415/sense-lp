import SectionLabel from "./SectionLabel";

const info = [
  { label: "STORE", value: "MEN'S HAIR SENSE 渋谷店" },
  { label: "ADDRESS", value: "東京都渋谷区道玄坂2-XX-XX SENSE BLDG. 3F" },
  { label: "TEL", value: "03-XXXX-XXXX" },
  { label: "OPEN", value: "11:00 — 22:00 (最終受付21:00)" },
  { label: "CLOSED", value: "毎週火曜日" },
  { label: "ACCESS", value: "JR渋谷駅 ハチ公口より徒歩4分" },
];

export default function SalonInfoSection() {
  return (
    <section id="salon" className="relative w-full bg-zinc-950 text-white py-28 md:py-40 border-t border-white/5 overflow-hidden">
      <span
        className="pointer-events-none absolute -top-10 right-[-3%] font-display font-black text-white/[0.04] leading-none tracking-tighter select-none"
        style={{ fontSize: "clamp(160px, 20vw, 320px)" }}
      >
        SALON
      </span>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <SectionLabel en="SALON INFO" ja="店舗情報" />

        <div className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* 左：情報リスト */}
          <div className="lg:col-span-6">
            <dl className="divide-y divide-white/10 border-y border-white/10">
              {info.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-3 gap-4 py-5 md:py-6"
                >
                  <dt className="font-display text-[11px] tracking-[0.3em] text-accent self-center">
                    {row.label}
                  </dt>
                  <dd className="col-span-2 font-sans text-sm md:text-base text-white/85 self-center">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-black font-sans text-sm font-bold tracking-wider hover:opacity-90 transition"
              >
                ご予約はこちら
              </a>
              <a
                href="tel:03-0000-0000"
                className="inline-flex items-center gap-2 font-display text-sm tracking-[0.2em] text-white hover:text-accent transition"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                CALL
              </a>
            </div>
          </div>

          {/* 右：地図プレースホルダ */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-black border border-white/10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 40%, rgba(232,255,59,0.08), transparent 50%), linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)",
                }}
              />
              {/* 偽の地図ライン */}
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 300" fill="none">
                <path d="M0 80 L400 100" stroke="white" strokeWidth="0.5" />
                <path d="M0 160 L400 180" stroke="white" strokeWidth="0.5" />
                <path d="M0 230 L400 240" stroke="white" strokeWidth="0.5" />
                <path d="M120 0 L140 300" stroke="white" strokeWidth="0.5" />
                <path d="M240 0 L260 300" stroke="white" strokeWidth="0.5" />
                <path d="M340 0 L350 300" stroke="white" strokeWidth="0.5" />
              </svg>
              {/* ピン */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="h-4 w-4 rounded-full bg-accent shadow-[0_0_24px_rgba(232,255,59,0.6)]" />
                <div className="mt-2 px-3 py-1 bg-accent text-black font-display text-[10px] tracking-[0.2em]">
                  SENSE
                </div>
              </div>
              <div className="absolute bottom-3 left-3 font-display text-[10px] tracking-[0.3em] text-white/40">
                MAP / SHIBUYA
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
