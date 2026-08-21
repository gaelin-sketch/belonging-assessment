import type { ReactNode, HTMLAttributes } from "react";
import { cx, type Tone } from "../util";

export interface EyebrowProps extends HTMLAttributes<HTMLParagraphElement> {
  /** Colour of the dash and the caps. Default orange. */
  tone?: Tone;
  /** Drop the leading dash. */
  bare?: boolean;
  children?: ReactNode;
}
/**
 * A short dash, a gap, then wide-tracked caps. Opens almost every page in the
 * system and is the single strongest signal of the brand — put one at the top
 * of any page or major section.
 */
export function Eyebrow({ tone = "orange", bare, children, className, ...rest }: EyebrowProps) {
  return (
    <p className={cx("eg-eyebrow", tone !== "orange" && `eg-eyebrow--${tone}`, bare && "eg-eyebrow--bare", className)} {...rest}>
      {children}
    </p>
  );
}

export type HeadingLevel = "hero" | "display" | "title" | "section" | "sub";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /** Size step. `hero` for covers, `display` for slides, `title` for page titles. */
  level?: HeadingLevel;
  /** Rendered element. Defaults to h1 for hero/display/title, h2 for section, h3 for sub. */
  as?: "h1" | "h2" | "h3" | "h4" | "p";
  children?: ReactNode;
}
const HEADING_CLASS: Record<HeadingLevel, string> = {
  hero: "eg-hero", display: "eg-display", title: "eg-title", section: "eg-section-title", sub: "eg-sub",
};
const HEADING_TAG: Record<HeadingLevel, "h1" | "h2" | "h3"> = {
  hero: "h1", display: "h1", title: "h1", section: "h2", sub: "h3",
};
/** Display type. Colour exactly one word inside it with `Emphasis` — never a phrase. */
export function Heading({ level = "title", as, children, className, ...rest }: HeadingProps) {
  const Tag = (as ?? HEADING_TAG[level]) as "h1";
  return <Tag className={cx(HEADING_CLASS[level], className)} {...rest}>{children}</Tag>;
}

export interface TitleBlockProps extends HTMLAttributes<HTMLDivElement> {
  /** The headline. Also painted as the translucent echo behind itself. */
  title: string;
  /** Element for the live title. Default h1. */
  as?: "h1" | "h2" | "h3";
}
/**
 * A page title with its ghost echo — a translucent copy offset down and right,
 * behind the live text. The echo is decorative and aria-hidden, so the heading
 * is announced once.
 */
export function TitleBlock({ title, as = "h1", className, ...rest }: TitleBlockProps) {
  const Tag = as as "h1";
  return (
    <div className={cx("eg-titleblock", className)} {...rest}>
      <span className="eg-ghost" aria-hidden="true">{title}</span>
      <Tag className="eg-title">{title}</Tag>
    </div>
  );
}

export type TextVariant = "lead" | "body" | "small" | "micro" | "note";

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  /** `lead` for intros, `body` for running copy, `micro` for footnotes. */
  variant?: TextVariant;
  as?: "p" | "span" | "div";
  children?: ReactNode;
}
/** Running copy. Bold inside it goes navy automatically — never leave bold grey. */
export function Text({ variant = "body", as = "p", children, className, ...rest }: TextProps) {
  const Tag = as as "p";
  return <Tag className={cx(`eg-${variant}`, className)} {...rest}>{children}</Tag>;
}

export interface LabelProps extends HTMLAttributes<HTMLElement> {
  as?: "p" | "span" | "div";
  children?: ReactNode;
}
/** Wide-tracked uppercase micro label. Chart axes, column heads, card kickers. */
export function Label({ as = "p", children, className, ...rest }: LabelProps) {
  const Tag = as as "p";
  return <Tag className={cx("eg-label", className)} {...rest}>{children}</Tag>;
}

export interface EmphasisProps extends HTMLAttributes<HTMLSpanElement> {
  /** Which brand colour. Text-safe variants are picked automatically per surface. */
  tone?: Tone;
  children?: ReactNode;
}
/**
 * Colours one word inside a headline — the core move of the system. Use it on a
 * single word, once per line. On a dark `FieldBand` or `Slide` the colour
 * brightens automatically so it stays readable.
 */
export function Emphasis({ tone = "gold", children, className, ...rest }: EmphasisProps) {
  return <span className={cx(`eg-em-${tone}`, className)} {...rest}>{children}</span>;
}

export interface UnderscoreProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
}
/** Draws a gold rule under a word, as on the pull quotes. */
export function Underscore({ children, className, ...rest }: UnderscoreProps) {
  return <span className={cx("eg-underscore", className)} {...rest}>{children}</span>;
}

export interface WordRunProps extends HTMLAttributes<HTMLParagraphElement> {
  /** One word per entry, each with the colour it should take. */
  words: Array<{ word: string; tone: Tone }>;
}
/** A line of single words in alternating brand colours. Loud — at most once per page. */
export function WordRun({ words, className, ...rest }: WordRunProps) {
  return (
    <p className={cx("eg-wordrun", className)} {...rest}>
      {words.map((w, i) => (
        <span key={i} className={`eg-em-${w.tone}`}>{w.word}</span>
      ))}
    </p>
  );
}

export interface FigureProps extends HTMLAttributes<HTMLSpanElement> {
  /** The number itself. */
  value: string | number;
  /** Denominator or suffix, e.g. `/ 100`. Rendered smaller and grey. */
  unit?: string;
  /** `xl` is the one number the page is about. */
  size?: "xl" | "l" | "m" | "s";
}
/** A numeral. Always tabular, so columns of figures line up. */
export function Figure({ value, unit, size = "l", className, ...rest }: FigureProps) {
  return (
    <span className={cx("eg-figure", `eg-figure--${size}`, className)} {...rest}>
      {value}
      {unit ? <span className="eg-figure__unit">{unit}</span> : null}
    </span>
  );
}
