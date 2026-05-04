type Props = {
  en: string;
  ja: string;
  align?: "left" | "center";
};

export default function SectionLabel({ en, ja, align = "left" }: Props) {
  return (
    <div className={`flex flex-col gap-2 ${align === "center" ? "items-center text-center" : "items-start"}`}>
      <div className="flex items-center gap-3">
        <span className="block h-px w-10 bg-accent" />
        <span className="font-display text-xs tracking-[0.4em] text-accent">{en}</span>
      </div>
      <h2 className="font-sans text-3xl md:text-5xl font-bold tracking-wider text-white">
        {ja}
      </h2>
    </div>
  );
}
