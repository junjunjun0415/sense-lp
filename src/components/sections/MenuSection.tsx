import SectionLabel from "./SectionLabel";

const menus = [
  { name: "カット", desc: "シャンプー・ブロー込み", price: "¥6,600" },
  { name: "カット + カラー", desc: "白髪ぼかしも対応", price: "¥13,200" },
  { name: "カット + パーマ", desc: "ニュアンス〜強めまで", price: "¥15,400" },
  { name: "ヘッドスパ", desc: "30分・スカルプケア", price: "¥4,400" },
  { name: "眉カット", desc: "メンズ専用デザイン", price: "¥2,200" },
  { name: "VIPコース", desc: "カット+カラー+スパ+眉", price: "¥22,000" },
];

export default function MenuSection() {
  return (
    <section id="menu" className="relative w-full bg-black text-white py-28 md:py-40 overflow-hidden">
      <span
        className="pointer-events-none absolute -bottom-10 left-[-3%] font-display font-black text-white/[0.04] leading-none tracking-tighter select-none"
        style={{ fontSize: "clamp(160px, 20vw, 320px)" }}
      >
        MENU
      </span>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <SectionLabel en="MENU" ja="メニュー" />

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 max-w-5xl">
          {menus.map((m) => (
            <div
              key={m.name}
              className="flex items-end justify-between gap-6 py-6 border-b border-white/15 hover:border-accent transition"
            >
              <div className="flex-1 min-w-0">
                <h3 className="font-sans text-lg md:text-xl font-bold tracking-wide">
                  {m.name}
                </h3>
                <p className="mt-1 text-xs md:text-sm text-white/55">
                  {m.desc}
                </p>
              </div>
              <div className="font-display text-2xl md:text-3xl font-black tracking-tight whitespace-nowrap">
                {m.price}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-xs text-white/40">
          ※ 表示価格は税込です。学割・平日割引もございます。詳しくはご予約時にお問い合わせください。
        </p>
      </div>
    </section>
  );
}
