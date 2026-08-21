export type Tone = "navy" | "gold" | "orange" | "blue";
export type Tier = "critical" | "at-risk" | "building" | "strong";
export type RelationalState = "belonging" | "ambiguity" | "exclusion";

/** Joins class names, dropping anything falsy. */
export const cx = (...parts: Array<string | false | null | undefined>): string =>
  parts.filter(Boolean).join(" ");
