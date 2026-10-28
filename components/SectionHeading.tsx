// Title for a section: a short gold line, a big heading and an optional paragraph.
export default function SectionHeading({
  title,
  text,
  center = false,
  light = false,
}: {
  title: string;
  text?: string;
  center?: boolean; // centre-align the text
  light?: boolean; // use on dark (navy) sections
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <span aria-hidden className={`mb-5 block h-1 w-12 rounded-full bg-gold ${center ? "mx-auto" : ""}`} />
      <h2 className="font-serif text-3xl leading-tight md:text-5xl">{title}</h2>
      {text && <p className={`mt-4 text-lg ${light ? "text-ivory/80" : "text-navy/80"}`}>{text}</p>}
    </div>
  );
}
