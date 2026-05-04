import SectionLabel from "./SectionLabel";

const items = [
  { tag: "BUSINESS", label: "ビジネスショート" },
  { tag: "MASH", label: "マッシュウルフ" },
  { tag: "PERM", label: "センターパート" },
  { tag: "COLOR", label: "ハイライトカラー" },
  { tag: "SHORT", label: "ツーブロック" },
  { tag: "MID", label: "ミディアムウェーブ" },
  { tag: "FADE", label: "スキンフェード" },
  { tag: "TREND", label: "韓流マッシュ" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="relative w-full bg-black text-white py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionLabel en="GALLERY" ja="スタイル集" />
          <a
            href="#"
            className="group inline-flex items-center gap-3 font-display text-xs tracking-[0.3em] text-accent"
          >
            VIEW ALL
            <span className="block h-px w-10 bg-accent group-hover:w-16 transition-all" />
          </a>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {items.map((it, i) => (
            <div
              key={i}
              className="group relative aspect-square overflow-hidden bg-zinc-900"
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                style={{
                  background: `linear-gradient(${135 + i * 18}deg, #1f1f1f 0%, #2a2a2a 50%, #0a0a0a 100%)`,
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-xl md:text-2xl font-black tracking-wider text-white/10">
                  {it.tag}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <p className="font-display text-[10px] tracking-[0.3em] text-accent">
                  #{it.tag}
                </p>
                <p className="mt-1 font-sans text-sm md:text-base font-bold tracking-wide">
                  {it.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
