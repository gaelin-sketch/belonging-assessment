import type { ReactNode, HTMLAttributes } from "react";
import { cx, type Tier } from "../util";

export interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  /** Which index tier. Omit for a neutral chip. */
  tier?: Tier;
  /** Solid navy instead of a tinted wash. */
  solid?: boolean;
  children?: ReactNode;
}
/**
 * A small pill. With a `tier` it takes that tier's fixed colour, so a reader
 * knows where a number sits before reading the number. Never reassign tier
 * colours per chart.
 */
export function Chip({ tier, solid, children, className, ...rest }: ChipProps) {
  return (
    <span className={cx("eg-chip", tier && `eg-chip--${tier}`, solid && "eg-chip--solid", className)} {...rest}>
      {children}
    </span>
  );
}

export interface TierGridProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}
/** Responsive row of `TierCard`s — normally all four stages of the index. */
export function TierGrid({ children, className, ...rest }: TierGridProps) {
  return <div className={cx("eg-tiers", className)} {...rest}>{children}</div>;
}

export interface TierCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Which stage this card describes. Sets the colour bar at the top. */
  tier: Tier;
  /** Heading, e.g. `At-risk`. */
  name: string;
  /** Range line, e.g. `Index 35–49`. */
  range?: string;
  /** Marks this as where the subject currently sits: outlines the card and adds the badge. */
  current?: boolean;
  /** Text on the badge when `current`. */
  badge?: string;
  children?: ReactNode;
}
/**
 * One stage of the index. Set `current` on exactly one card in a grid — it
 * drives both the outline and `aria-current`, so the visual and accessible
 * states cannot drift apart.
 */
export function TierCard({ tier, name, range, current, badge = "Current", children, className, ...rest }: TierCardProps) {
  return (
    <div
      className={cx("eg-tier", tier !== "critical" && `eg-tier--${tier}`, className)}
      aria-current={current ? "true" : undefined}
      {...rest}
    >
      {current ? <span className="eg-tier__badge">{badge}</span> : null}
      <p className="eg-tier__name">{name}</p>
      {range ? <p className="eg-tier__range">{range}</p> : null}
      <p className="eg-tier__body">{children}</p>
    </div>
  );
}
