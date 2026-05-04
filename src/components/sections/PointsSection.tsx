import SectionLabel from "./SectionLabel";

const points = [
  {
    no: "01",
    en: "MENS ONLY",
    title: "メンズ特化10年の技術",
    body: "創業から一貫してメンズだけを切り続けた経験値。骨格・髪質・毛流れの読み取り精度が違います。",
  },
  {
    no: "02",
    en: "PRIVATE SPACE",
    title: "黒を基調とした完全個室",
    body: "周りの目を気にせず集中できる、ダークトーンの個室空間。プロのバーバーラウンジを意識した設計。",
  },
  {
    no: "03",
    en: "LIFESTYLE",
    title: "ライフスタイル提案型",
    body: "髪型だけでなく、似合うファッション・スキンケア・眉まで、トータルで&quot;最強&quot;をプロデュース。",
  },
];

export default function PointsSection() {
  return (
    <section id="points" className="relative w-full bg-zinc-950 text-white py-28 md:py-40 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionLabel en="WHY SENSE" ja="選ばれる3つの理由" />

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {points.map((p) => (
            <div
              key={p.no}
              className="group relative bg-black/60 border border-white/10 p-8 md:p-10 hover:border-accent/60 transition"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-5xl md:text-6xl font-black text-accent leading-none">
                  {p.no}
                </span>
                <span className="font-display text-[10px] tracking-[0.3em] text-white/50">
                  {p.en}
                </span>
              </div>
              <h3 className="mt-8 font-sans text-xl md:text-2xl font-bold tracking-wide">
                {p.title}
              </h3>
              <p className="mt-4 text-sm md:text-base leading-loose text-white/70">
                {p.body.replace(/&quot;/g, '"')}
              </p>
              <div className="mt-8 flex items-center gap-3">
                <span className="block h-px w-10 bg-accent/60 group-hover:w-16 transition-all" />
                <span className="font-display text-[10px] tracking-[0.3em] text-white/40">
                  POINT.{p.no}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
