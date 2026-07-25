import Image from "next/image";
import {
  Award,
  Camera,
  Code2,
  GraduationCap,
  Layers,
  Package,
  Palette,
  Printer,
  Radio,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

export type ServiceHeroGridCell = {
  src: string;
  alt: string;
  badgeLabel: string;
  badgeIcon?:
    | "creative"
    | "studio"
    | "retouch"
    | "strategy"
    | "growth"
    | "code"
    | "print"
    | "media"
    | "training"
    | "package"
    | "layers"
    | "leadership";
  badgeVariant?: "light" | "dark";
};

const iconMap = {
  creative: Palette,
  studio: Camera,
  retouch: Sparkles,
  strategy: Target,
  growth: TrendingUp,
  code: Code2,
  print: Printer,
  media: Radio,
  training: GraduationCap,
  package: Package,
  layers: Layers,
  leadership: Award,
} as const;

export function ServiceHeroGrid({
  cells,
}: {
  cells: [ServiceHeroGridCell, ServiceHeroGridCell, ServiceHeroGridCell, ServiceHeroGridCell];
}) {
  const [large, product, studio, retouch] = cells;
  return (
    <div className="grid h-104 grid-cols-2 gap-4 lg:h-135">
      <div className="flex flex-col gap-4">
        <Cell cell={large} className="flex-[1.6]" badgePosition="bottom-left" />
        <Cell cell={studio} className="flex-1" badgePosition="bottom-left" />
      </div>
      <div className="flex flex-col gap-4">
        <Cell cell={product} className="flex-1" badgePosition="top-right" />
        <Cell cell={retouch} className="flex-1" badgePosition="bottom-left" />
      </div>
    </div>
  );
}

function Cell({
  cell,
  className,
  badgePosition,
}: {
  cell: ServiceHeroGridCell;
  className: string;
  badgePosition: "bottom-left" | "top-right";
}) {
  return (
    <div className={`relative overflow-hidden rounded-3xl shadow-brand-lg ${className}`}>
      <Image
        src={cell.src}
        alt={cell.alt}
        fill
        sizes="(min-width: 1024px) 24vw, 45vw"
        className="object-cover object-top"
      />
      <Badge cell={cell} position={badgePosition} />
    </div>
  );
}

function Badge({
  cell,
  position,
}: {
  cell: ServiceHeroGridCell;
  position: "bottom-left" | "top-right";
}) {
  const positionClass = position === "bottom-left" ? "bottom-4 left-4" : "top-4 right-4";

  if (cell.badgeVariant === "dark") {
    const [big, small] = cell.badgeLabel.split(" · ");
    return (
      <div
        className={`absolute ${positionClass} rounded-xl bg-brand-ink/85 px-3.5 py-2.5 text-center text-white shadow-brand-md backdrop-blur-sm`}
      >
        <div className="font-display text-base font-extrabold leading-none">{big}</div>
        {small && (
          <div className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-white/75">
            {small}
          </div>
        )}
      </div>
    );
  }

  const Icon = cell.badgeIcon ? iconMap[cell.badgeIcon] : null;
  return (
    <div
      className={`absolute ${positionClass} flex items-center gap-2.5 rounded-xl bg-white/95 py-2.5 pl-2.5 pr-3.5 shadow-brand-md backdrop-blur-sm`}
    >
      {Icon && (
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-red-tint text-brand-red">
          <Icon size={15} strokeWidth={2.25} />
        </span>
      )}
      <span className="text-xs font-bold leading-tight text-brand-ink">{cell.badgeLabel}</span>
    </div>
  );
}
