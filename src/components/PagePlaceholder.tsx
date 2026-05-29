import type { Dictionary } from "@/lib/i18n/dictionaries";

export function PagePlaceholder({
  title,
  description,
  soonLabel,
}: {
  title: string;
  description: string;
  soonLabel: string;
}) {
  return (
    <section className="section min-h-[50vh]">
      <div className="flex flex-col items-start gap-4">
        <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
          {soonLabel}
        </span>
        <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
        <p className="max-w-xl text-ink/60">{description}</p>
      </div>
    </section>
  );
}

export type { Dictionary };
