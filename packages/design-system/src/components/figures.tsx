import type { ReactNode, HTMLAttributes } from "react";
import { cx, type Tier } from "../util";
import { Figure } from "./typography";

export interface StatProps extends HTMLAttributes<HTMLDivElement> {
  /** The headline number, e.g. `56%`. */
  value: string;
  /** Colour of the number. Default blue. */
  tone?: "blue" | "gold" | "orange" | "navy";
  children?: ReactNode;
}
/** One coloured number over a one-line reading of it. Use in a row of three. */
export function Stat({ value, tone = "blue", children, className, ...rest }: StatProps) {
  return (
    <div className={cx("eg-stat", tone !== "blue" && `eg-stat--${tone}`, className)} {...rest}>
      <div className="eg-stat__value">{value}</div>
      <p className="eg-stat__label">{children}</p>
    </div>
  );
}

export interface StatBandProps extends HTMLAttributes<HTMLDivElement> {
  /** The figure, shown large and gold on the navy ground. */
  value: string;
  /** Small caps under the figure, e.g. `Out of 10`. */
  caption?: string;
  children?: ReactNode;
}
/**
 * The dark closing note: a figure on the left, the plain-English reading of it
 * on the right. The strongest way to end a page.
 */
export function StatBand({ value, caption, children, className, ...rest }: StatBandProps) {
  return (
    <div className={cx("eg-statband", className)} {...rest}>
      <div>
        <div className="eg-statband__figure">{value}</div>
        {caption ? <p className="eg-statband__caption">{caption}</p> : null}
      </div>
      <div className="eg-statband__body">{children}</div>
    </div>
  );
}

export const TIER_LABEL: Record<Tier, string> = {
  critical: "Critical", "at-risk": "At-risk", building: "Building", strong: "Strong",
};

export interface ScoreProps extends HTMLAttributes<HTMLDivElement> {
  /** The index value. */
  value: number | string;
  /** Denominator, e.g. `/ 100`. */
  unit?: string;
  /** Which tier the value falls in. Colours the meter and marks the scale. */
  tier: Tier;
  /** Fill of the meter, 0–100. */
  percent: number;
  /** Reading of the score, shown beside the meter. */
  children?: ReactNode;
  /** The scale steps under the meter. */
  scale?: Array<{ tier: Tier; range: string }>;
}
/**
 * The index number with its tier chip, meter and four-band scale — the
 * centrepiece of a results page.
 */
export function Score({ value, unit = "/ 100", tier, percent, scale, children, className, ...rest }: ScoreProps) {
  const steps = scale ?? [
    { tier: "critical" as Tier, range: "0–34" }, { tier: "at-risk" as Tier, range: "35–49" },
    { tier: "building" as Tier, range: "50–64" }, { tier: "strong" as Tier, range: "65+" },
  ];
  return (
    <div className={cx("eg-score", className)} {...rest}>
      <div className="eg-score__left">
        <span className={`eg-chip eg-chip--${tier}`}>{TIER_LABEL[tier]}</span>
        <div style={{ marginTop: 10 }}>
          <Figure value={value} unit={unit} size="xl" />
        </div>
      </div>
      <div>
        <div className="eg-meter">
          <div className={`eg-meter__fill eg-meter__fill--${tier}`} style={{ width: `${percent}%` }} />
        </div>
        <div className="eg-scalekey">
          {steps.map((s) => (
            <div key={s.tier} className="eg-scalekey__step" aria-current={s.tier === tier ? "true" : undefined}>
              <div className="eg-scalekey__name">{TIER_LABEL[s.tier]}</div>
              <div className="eg-scalekey__range">{s.range}</div>
            </div>
          ))}
        </div>
        {children ? <div style={{ marginTop: 16 }}>{children}</div> : null}
      </div>
    </div>
  );
}
