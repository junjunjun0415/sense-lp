import SectionLabel from "./SectionLabel";

const stylists = [
  {
    name: "TAKUMA",
    role: "TOP STYLIST / OWNER",
    bio: "スタイル提案力に定評あり。10年以上メンズだけを手掛けてきた渋谷No.1ディレクター。",
    sns: "@takuma_sense",
  },
  {
    name: "KENTA",
    role: "DIRECTOR",
    bio: "パーマとカラーのスペシャリスト。トレンドを&quot;似合う&quot;に変換する技術が武器。",
    sns: "@kenta_sense",
  },
  {
    name: "RYO",
    role: "STYLIST",
    bio: "ビジネスマンからの指名多数。清潔感×トレンドの絶妙なバランスを得意とする。",
    sns: "@ryo_sense",
  },
  {
    name: "SHO",
    role: "STYLIST",
    bio: "若手急成長株。SNSでバズるエッジの効いたスタイルを多数提案。",
    sns: "@sho_sense",
  },
];

export default function StylistSection() {
  return (
    <section id="stylist" className="relative w-full bg-zinc-950 text-white py-28 md:py-40 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionLabel en="STYLIST" ja="スタイリスト" />

        <div className="mt-16 md:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {stylists.map((s) => (
            <div key={s.name} className="group">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-900">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(160deg, #2a2a2a 0%, #1a1a1a 60%, #050505 100%)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-3xl md:text-5xl font-black text-white/10 tracking-wider">
                    {s.name}
                  </span>
                </div>
                <div className="absolute top-4 left-4 px-2 py-1 bg-accent text-black font-display text-[10px] tracking-[0.2em]">
                  {s.role.split(" ")[0]}
                </div>
              </div>
              <div className="mt-5">
                <h3 className="font-display text-xl md:text-2xl font-black tracking-wider">
                  {s.name}
                </h3>
                <p className="mt-1 font-display text-[10px] tracking-[0.3em] text-accent">
                  {s.role}
                </p>
                <p className="mt-3 text-xs md:text-sm leading-relaxed text-white/65">
                  {s.bio.replace(/&quot;/g, '"')}
                </p>
                <p className="mt-3 font-display text-xs tracking-wider text-white/45">
                  {s.sns}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
