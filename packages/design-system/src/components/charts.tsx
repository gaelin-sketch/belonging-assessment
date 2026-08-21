import type { ReactNode, HTMLAttributes } from "react";
import { cx, type Tier, type RelationalState } from "../util";

export type SegmentKind = RelationalState | Tier;

export interface BarSegment {
  /** Which fixed scale colour this segment takes. */
  kind: SegmentKind;
  /** Share of the bar, 0–100. */
  percent: number;
  /** Text printed inside. Decorative — it clips on narrow segments, so the bar's aria-label must carry the full reading. */
  label?: string;
}

export interface BarProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  /** Segments in order. Belonging always comes first. */
  segments: BarSegment[];
  /** The full reading, e.g. "Belonging 65.7%, ambiguity 27.6%, exclusion 6.7%". Required — the printed percentages are decorative. */
  ariaLabel: string;
  /** Bar height. `slim` drops the inline labels. */
  size?: "slim" | "default" | "tall";
}
/**
 * A 100% stacked bar — the workhorse chart of this system, built from CSS
 * rather than a charting library. Segment colours come from the two fixed
 * scales (belonging/ambiguity/exclusion, or the four index tiers) and are never
 * reassigned per chart.
 */
export function Bar({ segments, ariaLabel, size = "default", className, ...rest }: BarProps) {
  return (
    <div
      className={cx("eg-bar", size !== "default" && `eg-bar--${size}`, className)}
      role="img"
      aria-label={ariaLabel}
      {...rest}
    >
      {segments.map((s, i) => (
        <div key={i} className={`eg-bar__seg eg-bar__seg--${s.kind}`} style={{ flexBasis: `${s.percent}%` }}>
          {s.label}
        </div>
      ))}
    </div>
  );
}

export interface BarRowProps extends HTMLAttributes<HTMLDivElement> {
  /** Row label on the left, e.g. `Immediate`. */
  label: string;
  children?: ReactNode;
}
/** A labelled bar row: caps label on the left, the `Bar` filling the rest. */
export function BarRow({ label, children, className, ...rest }: BarRowProps) {
  return (
    <div className={cx("eg-barrow", className)} {...rest}>
      <span className="eg-barrow__label">{label}</span>
      {children}
    </div>
  );
}

export interface MeterProps extends HTMLAttributes<HTMLDivElement> {
  /** Fill, 0–100. */
  percent: number;
  /** Tier colour of the fill. Default gold. */
  tier?: Tier;
}
/** A single value on a track, for a 0–10 or 0–100 score. */
export function Meter({ percent, tier, className, ...rest }: MeterProps) {
  return (
    <div className={cx("eg-meter", className)} {...rest}>
      <div className={cx("eg-meter__fill", tier && `eg-meter__fill--${tier}`)} style={{ width: `${percent}%` }} />
    </div>
  );
}

export interface RatedRowProps extends HTMLAttributes<HTMLDivElement> {
  /** Group name and sample size, e.g. `Supervisors · n=30`. */
  name: string;
  /** The score, printed at the right. */
  value: string;
  /** Bar fill, 0–100. */
  percent: number;
  /** Tier colour of the fill. */
  tier?: Tier;
}
/** Label, mini bar and value — used down a column of groups. */
export function RatedRow({ name, value, percent, tier, className, ...rest }: RatedRowProps) {
  return (
    <div className={cx("eg-rated", className)} {...rest}>
      <span className="eg-rated__name">{name}</span>
      <Meter percent={percent} tier={tier} />
      <span className="eg-rated__value">{value}</span>
    </div>
  );
}

export interface BarbellProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  /** First point, 0–100 along the track. */
  from: number;
  /** Second point, 0–100. */
  to: number;
  /** Labels printed above each point. */
  fromLabel?: string;
  toLabel?: string;
  /** Paints the connector orange — use on the single widest gap in a chart, no more. */
  wide?: boolean;
  /** The full reading for screen readers. */
  ariaLabel: string;
}
/** Two points and the gap between them — the comparison mark of this system. */
export function Barbell({ from, to, fromLabel, toLabel, wide, ariaLabel, className, ...rest }: BarbellProps) {
  const left = Math.min(from, to);
  const width = Math.abs(to - from);
  return (
    <div className={cx("eg-barbell", className)} role="img" aria-label={ariaLabel} {...rest}>
      <div className="eg-barbell__track" />
      <div className={cx("eg-barbell__link", wide && "eg-barbell__link--wide")} style={{ left: `${left}%`, width: `${width}%` }} />
      {fromLabel ? <div className="eg-barbell__tag" style={{ left: `${from}%` }}>{fromLabel}</div> : null}
      {toLabel ? <div className="eg-barbell__tag" style={{ left: `${to}%` }}>{toLabel}</div> : null}
      <div className="eg-barbell__dot eg-barbell__dot--a" style={{ left: `${from}%` }} />
      <div className="eg-barbell__dot eg-barbell__dot--b" style={{ left: `${to}%` }} />
    </div>
  );
}

export interface LegendProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  /** One entry per series, in the same order as the bar's segments. */
  items: Array<{ kind: SegmentKind; label: string }>;
  /** Round swatches instead of squares. */
  round?: boolean;
}
/** Swatch-and-caps key. Give every chart one. */
export function Legend({ items, round, className, ...rest }: LegendProps) {
  return (
    <div className={cx("eg-legend", className)} {...rest}>
      {items.map((it) => (
        <span key={it.kind} className="eg-legend__item">
          <i className={cx("eg-legend__swatch", `eg-legend__swatch--${it.kind}`, round && "eg-legend__swatch--round")} />
          {it.label}
        </span>
      ))}
    </div>
  );
}
