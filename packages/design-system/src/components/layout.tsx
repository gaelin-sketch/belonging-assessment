import type { ReactNode, HTMLAttributes } from "react";
import { cx } from "../util";

export interface PageProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}
/**
 * The root wrapper. Paints the cream page background and sets the body type.
 * Every design must be wrapped in this — without it components render on the
 * host's white background and the type falls back to the system font.
 */
export function Page({ children, className, ...rest }: PageProps) {
  return <div className={cx("eg-page", className)} {...rest}>{children}</div>;
}

export interface ShellProps extends HTMLAttributes<HTMLElement> {
  /** `narrow` for prose (780px), `wide` for dashboards (1320px). Default 1100px. */
  width?: "narrow" | "default" | "wide";
  children?: ReactNode;
}
/** Centred column with the page gutter. Put content inside one of these. */
export function Shell({ width = "default", children, className, ...rest }: ShellProps) {
  return (
    <div
      className={cx("eg-shell", width === "narrow" && "eg-shell--narrow", width === "wide" && "eg-shell--wide", className)}
      {...rest}
    >
      {children}
    </div>
  );
}

export interface SheetProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}
/** One report page on screen: cream field, vertical padding, clipped decoration. */
export function Sheet({ children, className, ...rest }: SheetProps) {
  return <section className={cx("eg-sheet", className)} {...rest}>{children}</section>;
}

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  /** Gap between children. Default is 16px. */
  gap?: "tight" | "default" | "loose";
  children?: ReactNode;
}
/** Vertical rhythm. Spaces its children without margins on the children themselves. */
export function Stack({ gap = "default", children, className, ...rest }: StackProps) {
  return (
    <div className={cx("eg-stack", gap === "tight" && "eg-stack--tight", gap === "loose" && "eg-stack--loose", className)} {...rest}>
      {children}
    </div>
  );
}

export interface RowProps extends HTMLAttributes<HTMLDivElement> {
  /** Push the first and last child to opposite ends. */
  between?: boolean;
  children?: ReactNode;
}
/** Horizontal group; wraps on narrow screens. */
export function Row({ between, children, className, ...rest }: RowProps) {
  return <div className={cx("eg-row", between && "eg-row--between", className)} {...rest}>{children}</div>;
}

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  /** Target column count. Columns collapse responsively below their min width. */
  columns?: 2 | 3 | 4;
  children?: ReactNode;
}
/** Responsive auto-fit grid. */
export function Grid({ columns = 2, children, className, ...rest }: GridProps) {
  return <div className={cx("eg-grid", `eg-grid--${columns}`, className)} {...rest}>{children}</div>;
}

export interface RuleProps extends HTMLAttributes<HTMLHRElement> {
  /** Navy instead of the hairline cream. */
  strong?: boolean;
}
/** Horizontal rule. */
export function Rule({ strong, className, ...rest }: RuleProps) {
  return <hr className={cx("eg-rule", strong && "eg-rule--strong", className)} {...rest} />;
}

/**
 * The corner decoration: four rounded shapes bleeding off the top-right,
 * the logo mark broken apart. Purely decorative and aria-hidden. Place it as a
 * direct child of a `Sheet`, which clips it.
 */
export function Blobs() {
  return (
    <div className="eg-blobs" aria-hidden="true">
      <i /><i /><i /><i />
    </div>
  );
}
