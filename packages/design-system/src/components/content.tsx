import type { ReactNode, HTMLAttributes, TableHTMLAttributes } from "react";
import { cx, type Tone } from "../util";

export interface DataTableProps extends TableHTMLAttributes<HTMLTableElement> {
  children?: ReactNode;
}
/**
 * Navy header row, white body, hairline rules. Wrap wide tables so they scroll
 * inside their own box rather than scrolling the page. Give numeric cells
 * `className="eg-num"` so columns line up.
 */
export function DataTable({ children, className, ...rest }: DataTableProps) {
  return (
    <div className="eg-tablewrap">
      <table className={cx("eg-table", className)} {...rest}>{children}</table>
    </div>
  );
}

export interface InsightProps extends HTMLAttributes<HTMLDivElement> {
  /** The numeral in the left column. */
  index: number | string;
  /** One-line statement of the finding. */
  title: string;
  /** Accent colour of the panel and numeral. Rotate it down a stack so six read as a set. */
  tone?: Tone;
  children?: ReactNode;
}
/** A numbered finding in a tinted panel. Use for conclusions, not actions. */
export function Insight({ index, title, tone = "blue", children, className, ...rest }: InsightProps) {
  return (
    <div className={cx("eg-insight", tone !== "blue" && `eg-insight--${tone}`, className)} {...rest}>
      <div className="eg-insight__n">{index}</div>
      <div>
        <p className="eg-insight__title">{title}</p>
        <p className="eg-insight__body">{children}</p>
      </div>
    </div>
  );
}

export interface StepsProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}
/** The timeline rail that `Step`s hang from. Use for actions, not findings. */
export function Steps({ children, className, ...rest }: StepsProps) {
  return <div className={cx("eg-steps", className)} {...rest}>{children}</div>;
}

export interface StepProps extends HTMLAttributes<HTMLDivElement> {
  /** The numeral in the circle badge. */
  index: number | string;
  /** The action, stated as an imperative. */
  title: string;
  /** Italic line naming what this targets. */
  target?: string;
  /** Colour of the badge. */
  tone?: Tone;
  children?: ReactNode;
}
/** One numbered action on the timeline. */
export function Step({ index, title, target, tone = "navy", children, className, ...rest }: StepProps) {
  return (
    <div className={cx("eg-step", className)} {...rest}>
      <div className={cx("eg-step__n", tone !== "navy" && `eg-step__n--${tone}`)}>{index}</div>
      <div className="eg-step__card">
        <p className="eg-step__title">{title}</p>
        {target ? <p className="eg-step__target">{target}</p> : null}
        {children}
      </div>
    </div>
  );
}

export interface StepSplitProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}
/** Two columns inside a `Step` — typically "what you own" and "where help comes in". */
export function StepSplit({ children, className, ...rest }: StepSplitProps) {
  return <div className={cx("eg-step__split", className)} {...rest}>{children}</div>;
}

export interface ContentsProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  /** Rows, in order. */
  rows: Array<{ label: string; page: string | number }>;
}
/** Contents rows with dotted leaders. */
export function Contents({ rows, className, ...rest }: ContentsProps) {
  return (
    <div className={cx("eg-toc", className)} {...rest}>
      {rows.map((r) => (
        <div key={r.label} className="eg-toc__row">
          <span>{r.label}</span>
          <span className="eg-toc__lead" />
          <span className="eg-toc__page">{r.page}</span>
        </div>
      ))}
    </div>
  );
}

export interface QuoteProps extends HTMLAttributes<HTMLQuoteElement> {
  /** Colour of the left rail. */
  tone?: "orange" | "blue" | "gold";
  /** Attribution under the quote. */
  cite?: string;
  children?: ReactNode;
}
/** A pull quote: colour rail, heavy italic display type. */
export function Quote({ tone = "orange", cite, children, className, ...rest }: QuoteProps) {
  return (
    <blockquote className={cx("eg-quote", tone !== "orange" && `eg-quote--${tone}`, className)} {...rest}>
      {children}
      {cite ? <cite className="eg-quote__cite">{cite}</cite> : null}
    </blockquote>
  );
}
