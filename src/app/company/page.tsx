import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionLabel from "@/components/sections/SectionLabel";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "COMPANY | 会社概要 | SENSE",
  description: "MEN'S HAIR SENSE を運営する株式会社SENSEの会社概要",
};

const companyInfo = [
  { label: "COMPANY", value: "株式会社 SENSE" },
  { label: "FOUNDED", value: "2015年4月1日" },
  { label: "CEO", value: "田中 拓馬 (TAKUMA TANAKA)" },
  { label: "CAPITAL", value: "10,000,000円" },
  { label: "MEMBER", value: "12名 (2026年5月現在)" },
  { label: "ADDRESS", value: "東京都渋谷区道玄坂2-XX-XX SENSE BLDG. 3F" },
  { label: "TEL", value: "03-XXXX-XXXX" },
  { label: "BUSINESS", value: "メンズ専門美容室の運営 / ヘアケア商品の企画・販売 / メディア事業" },
];

const history = [
  { year: "2015", body: "東京都渋谷区にて株式会社 SENSE 設立。" },
  { year: "2017", body: "MEN'S HAIR SENSE 渋谷店をオープン。" },
  { year: "2020", body: "オリジナルヘアケアブランド「SENSE LAB.」をリリース。" },
  { year: "2023", body: "メディア事業「SENSE Channel (YouTube / TikTok)」を本格始動。" },
  { year: "2025", body: "MEN'S HAIR SENSE 新宿店オープン (予定)。" },
];

const businesses = [
  {
    no: "01",
    en: "SALON",
    title: "メンズ専門美容室",
    body: "渋谷を拠点に、メンズに特化した美容室を運営。10年以上の経験を持つスタイリストが、骨格・髪質・ライフスタイルに最適化したスタイルを提案。",
  },
  {
    no: "02",
    en: "PRODUCT",
    title: "ヘアケア商品の企画・販売",
    body: "現場のスタイリストが本気で使える設計で開発したオリジナルブランド「SENSE LAB.」。バーム、シャンプー、トリートメントを展開。",
  },
  {
    no: "03",
    en: "MEDIA",
    title: "メディア事業",
    body: "YouTube / TikTok / Instagram でメンズヘアの情報発信。月間リーチ300万人超の自社メディアを運営。",
  },
];

export default function CompanyPage() {
  return (
    <>
      <PageHeader />

      {/* ページタイトル */}
      <section className="relative w-full bg-black text-white pt-24 md:pt-40 pb-16 md:pb-24 overflow-hidden border-b border-white/10">
        <span
          className="pointer-events-none absolute -top-6 right-[-3%] font-display font-black text-white/[0.05] leading-none tracking-tighter select-none"
          style={{ fontSize: "clamp(180px, 22vw, 360px)" }}
        >
          COMPANY
        </span>

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
          <nav className="mb-10 font-display text-[10px] tracking-[0.3em] text-white/50">
            <a href="/" className="hover:text-accent transition">HOME</a>
            <span className="mx-3">/</span>
            <span className="text-accent">COMPANY</span>
          </nav>

          <SectionLabel en="COMPANY" ja="会社概要" />

          <p className="mt-10 max-w-2xl text-base md:text-lg leading-loose text-white/75">
            「最強の男を、創る。」
            <br />
            私たちはメンズだけのために、技術・空間・プロダクト・メディアを磨き続ける。
          </p>
        </div>
      </section>

      {/* 代表メッセージ */}
      <section className="relative w-full bg-zinc-950 text-white py-28 md:py-36 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionLabel en="MESSAGE" ja="代表メッセージ" />
            <div className="mt-10 relative aspect-[4/5] w-full max-w-md overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(160deg, #2a2a2a 0%, #1a1a1a 60%, #050505 100%)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-5xl font-black tracking-wider text-white/10">
                  CEO
                </span>
              </div>
              <div className="absolute -bottom-5 -right-5 px-4 py-2 bg-accent text-black font-display text-xs tracking-[0.2em]">
                TAKUMA TANAKA
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="font-sans text-2xl md:text-4xl font-bold leading-[1.5] tracking-wider">
              髪を切るのではなく、
              <br />
              男の生き方を、変える。
            </p>
            <div className="mt-10 space-y-6 text-base md:text-lg leading-loose text-white/80">
              <p>
                10年前、僕がこの店を始めた理由は、たった一つ。
                <br />
                「日本のメンズが、もっと自分のことを好きになれる場所を作りたい。」
              </p>
              <p>
                髪型ひとつで、姿勢が変わる。表情が変わる。
                <br />
                自信を持った男は、強い。だから僕らは、
                <br />
                ただの美容室ではなく、男を&quot;創る&quot;場所であり続けたい。
              </p>
              <p className="pt-4">
                これからも SENSE は、技術と感性を磨き続けます。
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <span className="block h-px w-12 bg-white/40" />
              <span className="font-display text-xs tracking-[0.3em] text-white/60">
                CEO — TAKUMA TANAKA
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 会社概要テーブル */}
      <section className="relative w-full bg-black text-white py-28 md:py-36 overflow-hidden">
        <span
          className="pointer-events-none absolute -bottom-10 left-[-3%] font-display font-black text-white/[0.04] leading-none tracking-tighter select-none"
          style={{ fontSize: "clamp(140px, 18vw, 280px)" }}
        >
          OVERVIEW
        </span>

        <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-10">
          <SectionLabel en="OVERVIEW" ja="企業情報" />

          <dl className="mt-16 md:mt-20 divide-y divide-white/10 border-y border-white/10">
            {companyInfo.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-6 py-6 md:py-7"
              >
                <dt className="font-display text-[11px] tracking-[0.3em] text-accent self-center">
                  {row.label}
                </dt>
                <dd className="md:col-span-3 font-sans text-sm md:text-base text-white/85 self-center">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 沿革 */}
      <section className="relative w-full bg-zinc-950 text-white py-28 md:py-36 border-y border-white/5">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <SectionLabel en="HISTORY" ja="沿革" />

          <ol className="mt-16 md:mt-20 relative">
            <span className="absolute left-[58px] md:left-[72px] top-2 bottom-2 w-px bg-white/10" />
            {history.map((h) => (
              <li key={h.year} className="relative grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-4 md:gap-8 py-6">
                <div className="flex items-start">
                  <span className="font-display text-2xl md:text-3xl font-black text-accent leading-none">
                    {h.year}
                  </span>
                </div>
                <div className="relative pl-6 md:pl-10">
                  <span className="absolute left-[-5px] top-2 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_16px_rgba(232,255,59,0.6)]" />
                  <p className="font-sans text-base md:text-lg leading-loose text-white/85">
                    {h.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 事業内容 */}
      <section className="relative w-full bg-black text-white py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <SectionLabel en="BUSINESS" ja="事業内容" />

          <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {businesses.map((b) => (
              <div
                key={b.no}
                className="group relative bg-zinc-950 border border-white/10 p-8 md:p-10 hover:border-accent/60 transition"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-5xl md:text-6xl font-black text-accent leading-none">
                    {b.no}
                  </span>
                  <span className="font-display text-[10px] tracking-[0.3em] text-white/50">
                    {b.en}
                  </span>
                </div>
                <h3 className="mt-8 font-sans text-xl md:text-2xl font-bold tracking-wide">
                  {b.title}
                </h3>
                <p className="mt-4 text-sm md:text-base leading-loose text-white/70">
                  {b.body}
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <span className="block h-px w-10 bg-accent/60 group-hover:w-16 transition-all" />
                  <span className="font-display text-[10px] tracking-[0.3em] text-white/40">
                    BUSINESS.{b.no}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
