"use client";

export function MicroLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
      {children}
    </span>
  );
}

export function SectionHeading({
  index,
  label,
  title,
}: {
  index: string;
  label: string;
  title: string;
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="font-mono text-sm text-muted-foreground tabular-nums">{index}</span>
        <span className="h-px w-10 bg-border" />
        <MicroLabel>{label}</MicroLabel>
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
    </div>
  );
}