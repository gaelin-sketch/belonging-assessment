import type { ReactNode, HTMLAttributes } from "react";
import { cx } from "../util";

export interface SectionDividerProps extends HTMLAttributes<HTMLDivElement> {
  /** Which accent the rail takes, 1–5. The rotation tells one section from the next; it is not a permanent colour for a section. */
  accent?: 1 | 2 | 3 | 4 | 5;
  /** Small caps above the numeral, e.g. `Part 02 / 08`. */
  part?: string;
  /** The big numeral on the rail. */
  numeral: string;
  /** Line under the numeral, e.g. `Pages 05–09`. */
  pages?: string;
  children?: ReactNode;
}
/** A section divider page: colour rail with the section numeral, contents at right. */
export function SectionDivider({ accent = 1, part, numeral, pages, children, className, ...rest }: SectionDividerProps) {
  return (
    <div className={cx("eg-divider", accent !== 1 && `eg-divider--${accent}`, className)} {...rest}>
      <div className="eg-divider__rail">
        {part ? <span className="eg-divider__part">{part}</span> : null}
        <div className="eg-divider__n">{numeral}</div>
        {pages ? <p className="eg-divider__pages">{pages}</p> : null}
      </div>
      <div className="eg-divider__body">{children}</div>
    </div>
  );
}

export interface PageFooterProps extends HTMLAttributes<HTMLElement> {
  /** The confidentiality or distribution line. */
  note?: string;
  /** Page number. */
  folio?: string | number;
}
/** Rule, distribution line and folio. Closes every report page. */
export function PageFooter({ note, folio, className, ...rest }: PageFooterProps) {
  return (
    <footer className={cx("eg-footer", className)} {...rest}>
      <span>{note}</span>
      {folio != null ? <span className="eg-footer__folio">{folio}</span> : null}
    </footer>
  );
}

export interface SlideProps extends HTMLAttributes<HTMLDivElement> {
  /** Dark navy slide instead of cream. */
  dark?: boolean;
  /** Centre the content. */
  center?: boolean;
  /** Add a hairline edge — for previewing a deck inside a cream page. */
  framed?: boolean;
  children?: ReactNode;
}
/**
 * A 16:9 slide. Its type scales with the slide itself using container query
 * units, so it reads correctly full-screen or as a thumbnail in a grid.
 */
export function Slide({ dark, center, framed, children, className, ...rest }: SlideProps) {
  return (
    <div
      className={cx("eg-slide", dark && "eg-slide--field", center && "eg-slide--center", framed && "eg-slide--framed", className)}
      {...rest}
    >
      {children}
    </div>
  );
}

export interface StatementProps extends HTMLAttributes<HTMLDivElement> {
  /** Colour of the left rail. */
  tone?: "blue" | "gold" | "orange" | "navy";
  /** Small heading above the line, e.g. `Compassion.` */
  kicker?: ReactNode;
  children?: ReactNode;
}
/** The statement card used on the keynote's definition slides. */
export function Statement({ tone = "blue", kicker, children, className, ...rest }: StatementProps) {
  return (
    <div className={cx("eg-statement", tone !== "blue" && `eg-statement--${tone}`, className)} {...rest}>
      {kicker ? <p className="eg-statement__kicker">{kicker}</p> : null}
      <p className="eg-statement__line">{children}</p>
    </div>
  );
}

/** The four-colour brand rule — orange, gold, blue, light. Tops a contact slide. */
export function BrandRule({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx("eg-rule-brand", className)} {...rest}><i /><i /><i /><i /></div>;
}
