import type { ElementType, ReactNode } from "react";
import { ArrowRight, Check, Star } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { SurfaceCard } from "@/components/ui/surface-card";
import { cn } from "@/lib/utils";

/** Service card — icon, title, short text, optional "read more" link. */
export function ServiceCard({
  icon: Icon,
  title,
  description,
  to = "/services",
  linkLabel,
}: {
  icon: ElementType;
  title: string;
  description: string;
  to?: "/" | "/about" | "/services" | "/contact";
  /** When omitted, the card renders without a call-to-action link. */
  linkLabel?: string;
}) {
  return (
    <SurfaceCard
      interactive
      className="group flex h-full flex-col gap-5 p-8 transition-all duration-300 ease-[var(--ease-brand)] hover:border-primary/45 hover:shadow-[0_26px_56px_-26px_rgba(66,66,67,0.28)] sm:p-9"
    >
      <span
        aria-hidden="true"
        className="grid size-14 shrink-0 place-items-center rounded-[14px] bg-surface text-primary transition-all duration-300 ease-[var(--ease-brand)] group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground"
      >
        <Icon size={26} strokeWidth={1.6} />
      </span>
      <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-primary">
        {title}
      </h3>
      <p className="text-base leading-relaxed text-muted-foreground">{description}</p>
      {linkLabel ? (
        <Link
          to={to}
          className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-medium text-primary"
        >
          {linkLabel}
          <ArrowRight
            size={16}
            strokeWidth={2}
            aria-hidden="true"
            className="transition-transform duration-300 ease-[var(--ease-brand)] group-hover:translate-x-1"
          />
        </Link>
      ) : null}
    </SurfaceCard>
  );
}


/** Feature card — compact icon + text, used in 4-up feature rows. */
export function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: ElementType;
  title: string;
  description: string;
}) {
  return (
    <SurfaceCard interactive className="flex h-full flex-col gap-3 p-6 sm:p-7">
      <span
        aria-hidden="true"
        className="grid size-11 shrink-0 place-items-center rounded-lg bg-primary/8 text-primary"
      >
        <Icon size={20} strokeWidth={1.7} />
      </span>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </SurfaceCard>
  );
}

/** Why-choose-us card — check mark, title, supporting line. */
export function WhyChooseCard({ title, description }: { title: string; description: string }) {
  return (
    <SurfaceCard interactive className="flex h-full items-start gap-4 p-6 sm:p-7">
      <span
        aria-hidden="true"
        className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"
      >
        <Check size={16} strokeWidth={2.4} />
      </span>
      <div className="min-w-0">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </SurfaceCard>
  );
}

/** Statistic card — large value, label and subtle icon. */
export function StatCard({
  icon: Icon,
  value,
  label,
}: {
  icon: ElementType;
  value: string;
  label: string;
}) {
  return (
    <SurfaceCard interactive className="flex h-full flex-col items-center gap-3 p-7 text-center">
      <span
        aria-hidden="true"
        className="grid size-12 place-items-center rounded-full bg-surface text-primary"
      >
        <Icon size={22} strokeWidth={1.6} />
      </span>
      <p className="font-heading text-3xl font-bold text-primary sm:text-4xl">{value}</p>
      <p className="text-sm font-medium leading-relaxed text-muted-foreground">{label}</p>
    </SurfaceCard>
  );
}

export type Stat = { icon: ElementType; value: string; label: string };

/** Statistics row — four stat cards on a consistent grid. */
export function StatsGrid({ stats, className }: { stats: Stat[]; className?: string }) {
  return (
    <div className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8", className)}>
      {stats.map((stat) => (
        <StatCard key={stat.label} icon={stat.icon} value={stat.value} label={stat.label} />
      ))}
    </div>
  );
}

/** Contact information card — icon, label and value (optionally a link). */
export function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: ElementType;
  label: string;
  value: ReactNode;
  href?: string;
}) {
  return (
    <div className="group relative flex h-full flex-col items-start gap-5 rounded-[22px] border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-lift">
      <span
        aria-hidden="true"
        className="relative grid size-14 shrink-0 place-items-center rounded-full border border-primary/20 bg-[linear-gradient(140deg,color-mix(in_oklab,var(--primary)_12%,transparent),color-mix(in_oklab,var(--primary)_4%,transparent))] text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] transition-all duration-300 group-hover:scale-105 group-hover:border-transparent group-hover:bg-[linear-gradient(140deg,var(--primary),var(--secondary))] group-hover:text-primary-foreground group-hover:shadow-[0_10px_24px_-10px_color-mix(in_oklab,var(--primary)_60%,transparent)]"
      >
        <Icon size={24} strokeWidth={1.6} className="transition-transform duration-300 group-hover:-rotate-6" />
      </span>
      <div className="min-w-0">
        <h3 className="text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-primary">
          {label}
        </h3>
        {href ? (
          <a
            href={href}
            className="mt-3 block text-base font-medium leading-relaxed text-foreground transition-colors hover:text-primary"
          >
            {value}
          </a>
        ) : (
          <p className="mt-3 text-base font-medium leading-relaxed text-foreground">{value}</p>
        )}
      </div>
    </div>

  );
}

/** Star rating display, 1–5. */
export function Rating({ value }: { value: number }) {
  return (
    <p className="flex items-center gap-1" aria-label={`Rated ${value} out of 5`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={16}
          aria-hidden="true"
          className={cn(
            star <= value ? "fill-primary text-primary" : "fill-muted text-muted",
          )}
        />
      ))}
    </p>
  );
}

export type Testimonial = {
  name: string;
  detail?: string;
  image?: string;
  rating: number;
  review: string;
};

/** Testimonial card — patient photo, name, rating and review. */
export function TestimonialCard({ name, detail, image, rating, review }: Testimonial) {
  return (
    <SurfaceCard interactive className="flex h-full flex-col gap-4 p-6 sm:p-7">
      <Rating value={rating} />
      <blockquote className="flex-1 text-[0.9375rem] leading-relaxed text-muted-foreground">
        “{review}”
      </blockquote>
      <figcaption className="flex items-center gap-3 border-t border-border pt-4">
        {image ? (
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="size-10 shrink-0 rounded-full object-cover"
          />
        ) : (
          <span
            aria-hidden="true"
            className="grid size-10 shrink-0 place-items-center rounded-full bg-surface font-heading text-sm font-semibold text-primary"
          >
            {name.slice(0, 1)}
          </span>
        )}
        <span className="min-w-0">
          <span className="block truncate font-heading text-sm font-semibold">{name}</span>
          {detail ? (
            <span className="block truncate text-xs text-muted-foreground">{detail}</span>
          ) : null}
        </span>
      </figcaption>
    </SurfaceCard>
  );
}
