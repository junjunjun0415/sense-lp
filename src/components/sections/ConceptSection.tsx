import SectionLabel from "./SectionLabel";

export default function ConceptSection() {
  return (
    <section id="concept" className="relative w-full bg-black text-white py-28 md:py-40 overflow-hidden">
      {/* 背景の薄い装飾タイポ */}
      <span
        className="pointer-events-none absolute -top-10 right-[-3%] font-display font-black text-white/[0.04] leading-none tracking-tighter select-none"
        style={{ fontSize: "clamp(160px, 20vw, 320px)" }}
      >
        CONCEPT
      </span>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <SectionLabel en="CONCEPT" ja="コンセプト" />

        <div className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* 左：仮ビジュアル */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, #1f1f1f 0%, #2e2e2e 40%, #0a0a0a 100%)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-5xl font-black tracking-wider text-white/10">
                  PHOTO
                </span>
              </div>
              <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-accent" />
            </div>
          </div>

          {/* 右：テキスト */}
          <div className="lg:col-span-7">
            <p className="font-sans text-3xl md:text-5xl font-bold leading-[1.4] tracking-wider">
              最強の男を、<br />創る美容室。
            </p>
            <div className="mt-10 space-y-6 text-base md:text-lg leading-loose text-white/80">
              <p>
                髪型ひとつで、表情も、姿勢も、自信も変わる。
                <br />
                SENSEは、メンズだけのために設計された空間で、
                <br />
                あなただけの&quot;最強&quot;を提案します。
              </p>
              <p>
                似合わせカット、骨格・髪質診断、ライフスタイルに合わせたスタイリング提案まで。
                ただ髪を切る場所ではなく、生き方を整える場所として。
              </p>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <span className="block h-px w-16 bg-white/40" />
              <span className="font-display text-xs tracking-[0.3em] text-white/60">
                SINCE 2015 — SHIBUYA, TOKYO
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
