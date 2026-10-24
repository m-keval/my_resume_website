"use client";

export function MicroLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
      {children}
    </span>
  );
}

export function SectionHeading({
  index,
  label,
  title,
}: {
  index?: string;
  label: string;
  title: string;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-4">
        {index && <span className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 font-mono text-xs text-primary tabular-nums">{index}</span>}
                <MicroLabel>{label}</MicroLabel>
      </div>
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.035em] text-foreground">
        {title}
      </h2>
    </div>
  );
}