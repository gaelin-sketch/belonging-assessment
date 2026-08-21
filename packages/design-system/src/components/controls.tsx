import type { ReactNode, ButtonHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes } from "react";
import { useId } from "react";
import { cx } from "../util";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** `primary` is navy, `gold` for the one call to action, `ghost` for secondary. */
  variant?: "primary" | "gold" | "ghost" | "onField";
  size?: "default" | "sm";
  children?: ReactNode;
}
/**
 * A pill button — nothing in this system has a square corner. The focus ring is
 * gold, offset, and must never be removed.
 */
export function Button({ variant = "primary", size = "default", children, className, ...rest }: ButtonProps) {
  return (
    <button
      className={cx(
        "eg-btn",
        variant === "gold" && "eg-btn--gold",
        variant === "ghost" && "eg-btn--ghost",
        variant === "onField" && "eg-btn--on-field",
        size === "sm" && "eg-btn--sm",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Visible label. Always give one — it is wired to the input by id. */
  label: string;
}
/** A labelled text input. */
export function TextField({ label, id, className, ...rest }: TextFieldProps) {
  const auto = useId();
  const fieldId = id ?? auto;
  return (
    <div className="eg-field-group">
      <label htmlFor={fieldId}>{label}</label>
      <input id={fieldId} className={cx("eg-input", className)} {...rest} />
    </div>
  );
}

export interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  /** Visible label. */
  label: string;
  children?: ReactNode;
}
/** A labelled select. */
export function SelectField({ label, id, children, className, ...rest }: SelectFieldProps) {
  const auto = useId();
  const fieldId = id ?? auto;
  return (
    <div className="eg-field-group">
      <label htmlFor={fieldId}>{label}</label>
      <select id={fieldId} className={cx("eg-select", className)} {...rest}>{children}</select>
    </div>
  );
}

export interface LikertProps {
  /** The five choices, low to high. */
  options: string[];
  /** Index of the selected option, or null. */
  value?: number | null;
  onChange?: (index: number) => void;
  /** Accessible name for the group. */
  ariaLabel?: string;
}
/** Five equal choices; the selected one goes navy. */
export function Likert({ options, value = null, onChange, ariaLabel }: LikertProps) {
  return (
    <div className="eg-likert" role="group" aria-label={ariaLabel}>
      {options.map((o, i) => (
        <button key={o} type="button" aria-pressed={value === i} onClick={() => onChange?.(i)}>
          {o}
        </button>
      ))}
    </div>
  );
}

export interface ProgressProps {
  /** Completion, 0–100. */
  percent: number;
  ariaLabel?: string;
}
/** A thin gold progress track. */
export function Progress({ percent, ariaLabel = "Progress" }: ProgressProps) {
  return (
    <div
      className="eg-progress"
      role="progressbar"
      aria-valuenow={Math.round(percent)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={ariaLabel}
    >
      <div className="eg-progress__fill" style={{ width: `${percent}%` }} />
    </div>
  );
}
