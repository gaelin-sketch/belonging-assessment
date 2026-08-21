import type { ReactNode, HTMLAttributes } from "react";
import { cx, type Tone } from "../util";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Adds a colour rail down the left edge. The rail carries the meaning, so the card stays white. */
  rail?: Tone;
  /** Inner padding. Default 24px. */
  padding?: "tight" | "default" | "roomy" | "none";
  children?: ReactNode;
}
/**
 * The default container: white, hairline border, soft shadow. White is reserved
 * for cards in this system — that is what makes a card read as lifted off the
 * cream page without needing a heavy shadow.
 */
export function Card({ rail, padding = "default", children, className, ...rest }: CardProps) {
  return (
    <div
      className={cx(
        "eg-card",
        rail && "eg-card--rail", rail && rail !== "navy" && `eg-card--rail-${rail}`,
        padding === "tight" && "eg-card--tight",
        padding === "roomy" && "eg-card--roomy",
        padding === "none" && "eg-card--flush",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export type FindingTone = "positive" | "negative" | "interesting";

export interface ToneCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Which reading this is. Sets the top rule and the dot label colour. */
  tone: FindingTone;
  /** Kicker text above the body. Defaults to the tone's own name. */
  kicker?: string;
  children?: ReactNode;
}
/**
 * A finding card with a coloured rule across the top and a matching dot label.
 * Used as a three-up: what is going well, what is not, and what is merely
 * interesting.
 */
export function ToneCard({ tone, kicker, children, className, ...rest }: ToneCardProps) {
  return (
    <div className={cx("eg-tonecard", tone !== "positive" && `eg-tonecard--${tone}`, className)} {...rest}>
      <p className="eg-tonecard__kicker">{kicker ?? tone}</p>
      {children}
    </div>
  );
}

export interface PanelProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}
/** Recessed cream, for supporting detail that should not compete with a card. */
export function Panel({ children, className, ...rest }: PanelProps) {
  return <div className={cx("eg-panel", className)} {...rest}>{children}</div>;
}

export interface FieldBandProps extends HTMLAttributes<HTMLDivElement> {
  /** Full-bleed: drops the corner radius. */
  bleed?: boolean;
  children?: ReactNode;
}
/**
 * The dark navy band. Carries the one sentence you most want remembered, and
 * belongs at the bottom of a page. Use one per page — two and neither lands.
 * Text, headings and figures inside it recolour for the dark ground automatically.
 */
export function FieldBand({ bleed, children, className, ...rest }: FieldBandProps) {
  return (
    <div className={cx("eg-field", bleed && "eg-field--bleed", className)} {...rest}>{children}</div>
  );
}
