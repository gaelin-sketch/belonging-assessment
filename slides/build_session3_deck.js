/* Session 3: Anchored — Belonging That Survives Change
   Brand system matched to Gaelin Elmore ICJ keynote deck. */
const pptxgen = require("pptxgenjs");
const fs = require("fs");

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.33 x 7.5
pres.author = "Gaelin Elmore";
pres.title = "Session 3: Anchored. Belonging That Survives Change";

const C = {
  navy: "1A2C42",
  navyCard: "24384F",
  cream: "F8F6F0",
  blue: "6FA3D3",
  blueDk: "2E6CA8",
  gold: "F0A62B",
  orange: "E9502E",
  white: "FFFFFF",
  ghostOnNavy: "2C4058",
  ghostOnCream: "E7EDF3",
  ghostOnBlue: "89B4DC",
  gray: "5E6E80",
  darkOnOrange: "471F10",
  paleText: "AEB9C5",
};

const HEAD = "Arial Black";
const BODY = "Arial";
const arrowPng = fs.readFileSync("arrow-white.png").toString("base64");

// ---------- helpers ----------
function kicker(s, text, color, opts = {}) {
  s.addText(text, {
    x: opts.x ?? 0.9, y: opts.y ?? 0.55, w: opts.w ?? 11.5, h: 0.4,
    fontFace: BODY, fontSize: 13, bold: true, charSpacing: 4,
    color, align: "left", isTextBox: true, margin: 0,
  });
}

function chip(s, text, x, y, w) {
  s.addShape(pres.ShapeType.roundRect, {
    x, y, w, h: 0.6, fill: { color: C.white }, rectRadius: 0.06,
    shadow: { type: "outer", color: "000000", opacity: 0.18, blur: 8, offset: 3, angle: 90 },
  });
  s.addText(text, {
    x, y, w, h: 0.6, fontFace: HEAD, fontSize: 15, color: C.navy,
    charSpacing: 2, align: "center", valign: "middle", isTextBox: true, margin: 0,
  });
}

function carryUp(s, x, y, scale = 1) {
  const box = 0.52 * scale;
  s.addShape(pres.ShapeType.roundRect, {
    x, y, w: box, h: box, fill: { color: C.gold }, rectRadius: 0.1 * scale,
  });
  const pad = box * 0.26;
  s.addImage({
    data: "image/png;base64," + arrowPng,
    x: x + pad, y: y + pad, w: box - 2 * pad, h: box - 2 * pad,
  });
}

function cluster(s) {
  // rounded-square cluster, top-right (title/close motif)
  s.addShape(pres.ShapeType.roundRect, { x: 11.15, y: -0.28, w: 1.35, h: 0.92, fill: { color: C.gold }, rectRadius: 0.16 });
  s.addShape(pres.ShapeType.roundRect, { x: 12.62, y: 0.06, w: 0.68, h: 0.68, fill: { color: C.orange }, rectRadius: 0.12 });
  s.addShape(pres.ShapeType.roundRect, { x: 10.5, y: 0.38, w: 0.95, h: 0.95, fill: { color: C.blue }, rectRadius: 0.16 });
  s.addShape(pres.ShapeType.roundRect, { x: 12.05, y: 1.02, w: 1.12, h: 0.78, fill: { color: C.navyCard }, rectRadius: 0.14 });
}

function newSlide(bg) {
  const s = pres.addSlide();
  s.background = { color: bg };
  return s;
}

// =========================================================
// SLIDE 1 — Title / Welcome (navy)
// =========================================================
{
  const s = newSlide(C.navy);
  cluster(s);
  kicker(s, "SESSION 3  ·  A THREE-HOUR TEAM SESSION", C.blue, { y: 1.7 });
  s.addText("ANCHORED.", {
    x: 0.85, y: 2.15, w: 11.8, h: 1.7, fontFace: HEAD, fontSize: 88,
    color: C.white, align: "left", isTextBox: true, margin: 0,
  });
  s.addText("Belonging that survives change.", {
    x: 0.9, y: 3.95, w: 11.5, h: 0.7, fontFace: HEAD, fontSize: 28,
    color: C.gold, align: "left", isTextBox: true, margin: 0,
  });
  s.addText("PRESENTED BY", {
    x: 0.9, y: 6.35, w: 4, h: 0.3, fontFace: BODY, fontSize: 11, bold: true,
    charSpacing: 3, color: C.gray, isTextBox: true, margin: 0,
  });
  s.addText("Gaelin Elmore, CSP", {
    x: 0.9, y: 6.62, w: 4.5, h: 0.4, fontFace: BODY, fontSize: 17, bold: true,
    color: C.white, isTextBox: true, margin: 0,
  });
  s.addText("THE ELMORE GROUP", {
    x: 9.4, y: 6.62, w: 3.0, h: 0.4, fontFace: BODY, fontSize: 12, bold: true,
    charSpacing: 3, color: C.white, align: "right", isTextBox: true, margin: 0,
  });
  s.addNotes("On screen as people arrive. NOTE: 'Anchored. Belonging That Survives Change' is the working title from the brief. Gaelin to confirm final session title before delivery.");
}

// =========================================================
// SLIDE 2 — How We Work Today (cream)
// =========================================================
{
  const s = newSlide(C.cream);
  kicker(s, "HOW WE WORK TODAY", C.blueDk);
  s.addText([
    { text: "Two agreements for the next ", options: { color: C.navy } },
    { text: "three hours.", options: { color: C.blueDk } },
  ], {
    x: 0.9, y: 1.05, w: 11.5, h: 0.85, fontFace: HEAD, fontSize: 34,
    align: "left", isTextBox: true, margin: 0,
  });

  // Card 1
  s.addShape(pres.ShapeType.roundRect, {
    x: 0.9, y: 2.35, w: 11.5, h: 1.75, fill: { color: C.white }, rectRadius: 0.1,
    shadow: { type: "outer", color: "000000", opacity: 0.12, blur: 10, offset: 3, angle: 90 },
  });
  s.addText("1", {
    x: 1.35, y: 2.35, w: 0.9, h: 1.75, fontFace: HEAD, fontSize: 48, color: C.blue,
    valign: "middle", isTextBox: true, margin: 0,
  });
  s.addText("We talk about us, not about people who aren’t in the room.", {
    x: 2.55, y: 2.35, w: 9.4, h: 1.75, fontFace: BODY, fontSize: 20, bold: true,
    color: C.navy, valign: "middle", isTextBox: true, margin: 0,
  });

  // Card 2
  s.addShape(pres.ShapeType.roundRect, {
    x: 0.9, y: 4.35, w: 11.5, h: 1.95, fill: { color: C.white }, rectRadius: 0.1,
    shadow: { type: "outer", color: "000000", opacity: 0.12, blur: 10, offset: 3, angle: 90 },
  });
  s.addText("2", {
    x: 1.35, y: 4.35, w: 0.9, h: 1.95, fontFace: HEAD, fontSize: 48, color: C.gold,
    valign: "middle", isTextBox: true, margin: 0,
  });
  s.addText([
    { text: "Anything you want leadership to hear goes on the ", options: { color: C.navy } },
    { text: "Carry It Up", options: { color: C.blueDk } },
    { text: " board. I will personally deliver it tomorrow.", options: { color: C.navy } },
  ], {
    x: 2.55, y: 4.35, w: 8.3, h: 1.95, fontFace: BODY, fontSize: 20, bold: true,
    valign: "middle", isTextBox: true, margin: 0,
  });
  carryUp(s, 11.35, 5.05, 1.15);
  s.addText("CARRY IT UP", {
    x: 10.95, y: 5.72, w: 1.45, h: 0.3, fontFace: BODY, fontSize: 9, bold: true,
    charSpacing: 2, color: C.gray, align: "center", isTextBox: true, margin: 0,
  });
  s.addNotes("Stated in minute one. Carry It Up is the physical flip chart in the room. The small gold arrow mark reappears on the Resolved activity and the closing slide.");
}

// =========================================================
// Activity template (steel blue)
// =========================================================
function activitySlide() {
  const s = newSlide(C.blue);
  kicker(s, "TABLE ACTIVITY", C.navy);
  return s;
}

// =========================================================
// SLIDE 3 — Activity: What Has the Return Changed?
// =========================================================
{
  const s = activitySlide();
  s.addText([
    { text: "What has the return to the office ", options: { color: C.navy } },
    { text: "changed", options: { color: C.white } },
    { text: " for you?", options: { color: C.navy } },
  ], {
    x: 0.9, y: 1.5, w: 11.5, h: 2.5, fontFace: HEAD, fontSize: 44, lineSpacing: 50,
    align: "left", isTextBox: true, margin: 0,
  });
  s.addText("For better or worse. One change per card. Specific and honest.", {
    x: 0.9, y: 4.45, w: 11.0, h: 0.9, fontFace: BODY, fontSize: 22, bold: true,
    color: C.navy, isTextBox: true, margin: 0,
  });
  chip(s, "10 MINUTES  ·  NO NAMES", 0.9, 6.15, 4.7);
  s.addNotes("Opening inventory (~10 min). Neutral framing on purpose: 'changed,' never 'taken.' Works at any emotional temperature.");
}

// =========================================================
// SLIDE 4 — SCARF (cream teaching)
// =========================================================
{
  const s = newSlide(C.cream);
  kicker(s, "HOW YOUR BRAIN READS SOCIAL CHANGE", C.blueDk, { y: 0.45 });
  s.addText([
    { text: "S.", options: { color: C.blue } },
    { text: "C.", options: { color: C.gold } },
    { text: "A.", options: { color: C.orange } },
    { text: "R.", options: { color: C.blueDk } },
    { text: "F.", options: { color: C.navy } },
  ], {
    x: 0.85, y: 0.82, w: 8, h: 1.0, fontFace: HEAD, fontSize: 54,
    isTextBox: true, margin: 0,
  });
  s.addText("The brain processes social experiences with the same threat-and-reward circuitry it uses for physical survival. Five domains trigger it:", {
    x: 0.9, y: 1.95, w: 11.5, h: 0.65, fontFace: BODY, fontSize: 15.5, bold: true,
    color: C.gray, isTextBox: true, margin: 0,
  });

  const rows = [
    ["S", C.blue, "Status", "Your relative importance and standing with others"],
    ["C", C.gold, "Certainty", "Your ability to predict what happens next"],
    ["A", C.orange, "Autonomy", "Your sense of control over events and your own day"],
    ["R", C.blueDk, "Relatedness", "Your sense of safety and connection with others"],
    ["F", C.navy, "Fairness", "Your perception that exchanges and rules are just"],
  ];
  let y = 2.78;
  for (const [ltr, col, name, def] of rows) {
    s.addText(ltr, {
      x: 0.9, y, w: 0.62, h: 0.58, fontFace: HEAD, fontSize: 30, color: col,
      valign: "middle", isTextBox: true, margin: 0,
    });
    s.addText([
      { text: name, options: { bold: true, color: C.navy } },
      { text: "   ·   " + def, options: { color: C.gray } },
    ], {
      x: 1.7, y, w: 10.7, h: 0.58, fontFace: BODY, fontSize: 16,
      valign: "middle", isTextBox: true, margin: 0,
    });
    y += 0.63;
  }

  s.addText([
    { text: "A perceived drop in any domain fires a ", options: { color: C.navy } },
    { text: "threat", options: { color: C.orange } },
    { text: " response. A perceived gain fires ", options: { color: C.navy } },
    { text: "reward", options: { color: C.gold } },
    { text: ".", options: { color: C.navy } },
  ], {
    x: 0.9, y: 6.15, w: 11.5, h: 0.5, fontFace: BODY, fontSize: 17, bold: true,
    isTextBox: true, margin: 0,
  });
  s.addText("Rock, D. (2008). SCARF: A brain-based model for collaborating with and influencing others. NeuroLeadership Journal, 1(1).  ·  Eisenberger, N., Lieberman, M., & Williams, K. (2003). Does rejection hurt? An fMRI study of social exclusion. Science, 302.", {
    x: 0.9, y: 6.85, w: 11.5, h: 0.5, fontFace: BODY, fontSize: 8.5, italic: true,
    color: "8B98A6", isTextBox: true, margin: 0,
  });
  s.addNotes("Core teaching slide before tables sort their cards. Gaelin narrates RTO examples per domain from facilitator notes.");
}

// =========================================================
// SLIDE 5 — Activity: Sort the Wall
// =========================================================
{
  const s = activitySlide();
  s.addText([
    { text: "As a table, sort your cards under the ", options: { color: C.navy } },
    { text: "five SCARF headers.", options: { color: C.white } },
  ], {
    x: 0.9, y: 1.35, w: 11.5, h: 1.8, fontFace: HEAD, fontSize: 36, lineSpacing: 42,
    isTextBox: true, margin: 0,
  });

  // Five letter squares
  const letters = [["S", C.blueDk], ["C", C.gold], ["A", C.orange], ["R", C.navy], ["F", C.navyCard]];
  let lx = 0.9;
  for (const [ltr, col] of letters) {
    s.addShape(pres.ShapeType.roundRect, { x: lx, y: 3.15, w: 0.62, h: 0.62, fill: { color: col }, rectRadius: 0.1 });
    s.addText(ltr, {
      x: lx, y: 3.15, w: 0.62, h: 0.62, fontFace: HEAD, fontSize: 22, color: C.white,
      align: "center", valign: "middle", isTextBox: true, margin: 0,
    });
    lx += 0.78;
  }

  s.addText("Where did the return hit hardest?", {
    x: 0.9, y: 4.2, w: 11.5, h: 0.7, fontFace: HEAD, fontSize: 26, color: C.white,
    isTextBox: true, margin: 0,
  });
  s.addText("A card can sit under more than one. Pick where it pulls strongest.", {
    x: 0.9, y: 5.05, w: 11.0, h: 0.6, fontFace: BODY, fontSize: 18, bold: true,
    color: C.navy, isTextBox: true, margin: 0,
  });
  chip(s, "10 MINUTES", 0.9, 6.15, 2.4);
  s.addNotes("Tables place their change cards under the five printed SCARF wall headers (print materials, section 4).");
}

// =========================================================
// SLIDE 6 — The Same Drawer (navy, full-slide statement)
// =========================================================
{
  const s = newSlide(C.navy);
  kicker(s, "NOTICE", C.blue, { y: 1.0 });
  s.addText("Notice what’s actually threatened.", {
    x: 0.9, y: 1.5, w: 11.6, h: 1.0, fontFace: HEAD, fontSize: 40,
    color: C.white, isTextBox: true, margin: 0,
  });
  s.addText([
    { text: "Not your ", options: { color: C.white } },
    { text: "belonging", options: { color: C.gold } },
    { text: ": your ", options: { color: C.white } },
    { text: "certainty", options: { color: C.blue } },
    { text: ", your ", options: { color: C.white } },
    { text: "control", options: { color: C.blue } },
    { text: ", your sense of the deal being ", options: { color: C.white } },
    { text: "fair", options: { color: C.blue } },
    { text: ".", options: { color: C.white } },
  ], {
    x: 0.9, y: 2.85, w: 11.0, h: 1.3, fontFace: BODY, fontSize: 26, bold: true, lineSpacing: 34,
    isTextBox: true, margin: 0,
  });
  s.addText([
    { text: "Your brain just files them\n", options: { color: C.white } },
    { text: "in the same drawer.", options: { color: C.orange } },
  ], {
    x: 0.9, y: 4.7, w: 11.6, h: 1.3, fontFace: HEAD, fontSize: 34, lineSpacing: 40,
    isTextBox: true, margin: 0,
  });
  s.addNotes("The pivot line after the sort debrief, the hinge of the first hour. Hold it in silence for a beat.");
}

// =========================================================
// SLIDE 7 — Break (cream, ghost word pattern)
// =========================================================
{
  const s = newSlide(C.cream);
  const rowsY = [0.15, 1.35, 2.55, 3.75, 4.95, 6.15];
  const offsets = ["BREAK BREAK BREAK BREAK", "REAK BREAK BREAK BREAK B", "K BREAK BREAK BREAK BREA"];
  rowsY.forEach((yy, i) => {
    s.addText(offsets[i % 3], {
      x: -0.6, y: yy, w: 14.6, h: 1.2, fontFace: HEAD, fontSize: 58,
      color: C.ghostOnCream, isTextBox: true, margin: 0, align: "center",
    });
  });
  s.addText("BREAK.", {
    x: 1.0, y: 2.7, w: 11.33, h: 1.9, fontFace: HEAD, fontSize: 96, color: C.blueDk,
    align: "center", isTextBox: true, margin: 0,
  });
  chip(s, "BACK IN 10 MINUTES", 5.06, 4.9, 3.2);
  s.addNotes("10-minute break. Announce the exact return time verbally and write it on the flip chart.");
}

// =========================================================
// SLIDE 8 — Two Kinds of Belonging (split panels + navy band)
// =========================================================
{
  const s = newSlide(C.navy);
  s.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 6.665, h: 5.85, fill: { color: C.blue } });
  s.addShape(pres.ShapeType.rect, { x: 6.665, y: 0, w: 6.665, h: 5.85, fill: { color: C.gold } });

  // Label chip overlapping both panels
  s.addShape(pres.ShapeType.rect, {
    x: 4.42, y: 0.32, w: 4.5, h: 0.62, fill: { color: C.cream },
    shadow: { type: "outer", color: "000000", opacity: 0.2, blur: 8, offset: 3, angle: 90 },
  });
  s.addText("TWO KINDS OF BELONGING", {
    x: 4.42, y: 0.32, w: 4.5, h: 0.62, fontFace: HEAD, fontSize: 14, color: C.navy,
    charSpacing: 2, align: "center", valign: "middle", isTextBox: true, margin: 0,
  });

  // Left: threat-driven
  s.addText("THREAT-DRIVEN", {
    x: 0.65, y: 1.55, w: 5.4, h: 0.7, fontFace: HEAD, fontSize: 28, color: C.navy,
    isTextBox: true, margin: 0,
  });
  s.addText("Belonging to avoid something.", {
    x: 0.65, y: 2.3, w: 5.4, h: 0.5, fontFace: BODY, fontSize: 18, bold: true, color: C.white,
    isTextBox: true, margin: 0,
  });
  s.addText("Fast. Contingent on circumstances.", {
    x: 0.65, y: 2.85, w: 5.4, h: 0.5, fontFace: BODY, fontSize: 16, bold: true, color: C.navy,
    isTextBox: true, margin: 0,
  });
  s.addText("RENTED.", {
    x: 0.65, y: 3.9, w: 5.4, h: 1.0, fontFace: HEAD, fontSize: 44, color: C.orange,
    isTextBox: true, margin: 0,
  });

  // Right: value-driven
  s.addText("VALUE-DRIVEN", {
    x: 7.35, y: 1.55, w: 5.4, h: 0.7, fontFace: HEAD, fontSize: 28, color: C.navy,
    isTextBox: true, margin: 0,
  });
  s.addText("Belonging toward something.", {
    x: 7.35, y: 2.3, w: 5.4, h: 0.5, fontFace: BODY, fontSize: 18, bold: true, color: C.white,
    isTextBox: true, margin: 0,
  });
  s.addText("Slow. Anchored in what you choose.", {
    x: 7.35, y: 2.85, w: 5.4, h: 0.5, fontFace: BODY, fontSize: 16, bold: true, color: C.navy,
    isTextBox: true, margin: 0,
  });
  s.addText("OWNED.", {
    x: 7.35, y: 3.9, w: 5.4, h: 1.0, fontFace: HEAD, fontSize: 44, color: C.navy,
    isTextBox: true, margin: 0,
  });

  // Bottom band takeaway
  s.addText([
    { text: "Fitting in is ", options: { color: C.white } },
    { text: "rent", options: { color: C.orange } },
    { text: ".   Belonging is a ", options: { color: C.white } },
    { text: "deed", options: { color: C.gold } },
    { text: ".", options: { color: C.white } },
  ], {
    x: 0.5, y: 5.85, w: 12.33, h: 1.65, fontFace: HEAD, fontSize: 30,
    align: "center", valign: "middle", isTextBox: true, margin: 0,
  });
  s.addNotes("Core teach, anchored to the Belonging Matrix language the team already knows (Fitting In vs. Belonging). The rent/deed line is the takeaway.");
}

// =========================================================
// SLIDE 9 — The Science (cream, 2x2 cards)
// =========================================================
{
  const s = newSlide(C.cream);
  kicker(s, "EVIDENCE", C.blueDk, { y: 0.4 });
  s.addText("What the research shows:", {
    x: 0.9, y: 0.75, w: 11.5, h: 0.7, fontFace: HEAD, fontSize: 30, color: C.navy,
    isTextBox: true, margin: 0,
  });

  const cards = [
    {
      accent: C.blueDk, head: "Threat bonds groups fast and leaves them fragile.",
      body: "Only shared goals produced belonging that lasted.",
      cite: "Sherif, Robbers Cave, 1954",
    },
    {
      accent: C.gold, head: "External pressure collapses when the pressure changes.",
      body: "Internalized values persist.",
      cite: "Deci & Ryan, Self-Determination Theory",
    },
    {
      accent: C.orange, head: "Belonging built on avoiding something burns out.",
      body: "It is metabolically expensive. Belonging built toward something renews.",
      cite: "Elliot, approach–avoidance motivation",
    },
    {
      accent: C.navy, head: "Fear produces the performance of belonging.",
      body: "Silence, matching, looking unified, while trust goes underground.",
      cite: "Edmondson, psychological safety",
    },
  ];
  const xs = [0.9, 6.85], ys = [1.75, 4.4];
  cards.forEach((c, i) => {
    const x = xs[i % 2], y = ys[Math.floor(i / 2)];
    s.addShape(pres.ShapeType.roundRect, {
      x, y, w: 5.58, h: 2.4, fill: { color: C.white }, rectRadius: 0.09,
      shadow: { type: "outer", color: "000000", opacity: 0.12, blur: 10, offset: 3, angle: 90 },
    });
    s.addText(c.head, {
      x: x + 0.4, y: y + 0.3, w: 4.8, h: 0.95, fontFace: HEAD, fontSize: 16.5,
      color: c.accent, lineSpacing: 20, isTextBox: true, margin: 0,
    });
    s.addText(c.body, {
      x: x + 0.4, y: y + 1.3, w: 4.8, h: 0.6, fontFace: BODY, fontSize: 13.5, bold: true,
      color: C.navy, lineSpacing: 17, isTextBox: true, margin: 0,
    });
    s.addText(c.cite, {
      x: x + 0.4, y: y + 1.98, w: 4.8, h: 0.32, fontFace: BODY, fontSize: 9.5, italic: true,
      color: "8B98A6", isTextBox: true, margin: 0,
    });
  });
  s.addNotes("Evidence slide #1. Gaelin narrates the detail; the slide holds the skeleton. One headline finding per anchor.");
}

// =========================================================
// SLIDE 10 — The History (navy, typographic restraint)
// =========================================================
{
  const s = newSlide(C.navy);
  kicker(s, "SEPTEMBER 2001", C.gold, { y: 0.8 });
  s.addText("≈90%", {
    x: 0.8, y: 1.9, w: 4.3, h: 1.8, fontFace: HEAD, fontSize: 92, color: C.gold,
    isTextBox: true, margin: 0,
  });
  s.addText("approval, the highest\never recorded", {
    x: 0.9, y: 3.75, w: 3.9, h: 0.8, fontFace: BODY, fontSize: 15, bold: true, color: C.blue,
    lineSpacing: 19, isTextBox: true, margin: 0,
  });

  s.addText("Near-universal national unity.", {
    x: 5.5, y: 1.75, w: 7.0, h: 0.6, fontFace: BODY, fontSize: 21, bold: true, color: C.white,
    isTextBox: true, margin: 0,
  });
  s.addText("Within two years, the country returned to, and then exceeded, its prior divisions.", {
    x: 5.5, y: 2.5, w: 6.9, h: 0.95, fontFace: BODY, fontSize: 19, bold: true, color: C.blue,
    lineSpacing: 25, isTextBox: true, margin: 0,
  });
  s.addText([
    { text: "The unity was real. It was ", options: { color: C.white } },
    { text: "rented from the threat.", options: { color: C.orange } },
    { text: " When the threat receded, ", options: { color: C.white } },
    { text: "the lease expired.", options: { color: C.gold } },
  ], {
    x: 5.5, y: 3.8, w: 6.9, h: 2.2, fontFace: HEAD, fontSize: 26, lineSpacing: 34,
    isTextBox: true, margin: 0,
  });
  s.addNotes("Evidence slide #2. Deliberately typographic. No imagery of the event itself. Treat with restraint.");
}

// =========================================================
// SLIDE 11 — Sprinter vs Distance Runner (orange full-bleed)
// =========================================================
{
  const s = newSlide(C.orange);
  kicker(s, "THE PATTERN", C.darkOnOrange, { y: 1.0 });
  s.addText([
    { text: "Threat is a ", options: { color: C.darkOnOrange } },
    { text: "sprinter.", options: { color: C.white } },
    { text: "\nValues are a ", options: { color: C.darkOnOrange } },
    { text: "distance runner.", options: { color: C.white } },
  ], {
    x: 0.9, y: 1.55, w: 11.6, h: 2.4, fontFace: HEAD, fontSize: 44, lineSpacing: 52,
    isTextBox: true, margin: 0,
  });
  s.addText("Threat wins the first hundred meters every time.", {
    x: 0.9, y: 4.35, w: 11.3, h: 0.6, fontFace: BODY, fontSize: 22, bold: true,
    color: C.darkOnOrange, isTextBox: true, margin: 0,
  });
  s.addText("It has never once finished the race.", {
    x: 0.9, y: 5.15, w: 11.3, h: 0.8, fontFace: HEAD, fontSize: 28, color: C.white,
    isTextBox: true, margin: 0,
  });
  s.addNotes("Synthesis line closing the evidence case. The locker-room story is told live, unslided, immediately before this slide.");
}

// =========================================================
// SLIDE 12 — The Question (navy bridge)
// =========================================================
{
  const s = newSlide(C.navy);
  kicker(s, "THE QUESTION", C.blue, { y: 1.15 });
  s.addText([
    { text: "The return to office is a ", options: { color: C.white } },
    { text: "threat", options: { color: C.orange } },
    { text: " your brain registered.", options: { color: C.white } },
  ], {
    x: 0.9, y: 1.7, w: 11.5, h: 0.7, fontFace: BODY, fontSize: 24, bold: true,
    isTextBox: true, margin: 0,
  });
  s.addText("The question isn’t whether that’s true.", {
    x: 0.9, y: 2.5, w: 11.5, h: 0.7, fontFace: BODY, fontSize: 24, bold: true, color: C.blue,
    isTextBox: true, margin: 0,
  });
  s.addText([
    { text: "The question is\n", options: { color: C.white } },
    { text: "what we anchor to.", options: { color: C.gold } },
  ], {
    x: 0.9, y: 3.6, w: 11.8, h: 1.9, fontFace: HEAD, fontSize: 48, lineSpacing: 56,
    isTextBox: true, margin: 0,
  });
  s.addNotes("Bridge into the second half. Sets up the evidence wall WITHOUT revealing it. No preview of what comes next.");
}

// =========================================================
// SLIDE 13 — Activity: The Evidence Wall (BLIND — standalone look)
// =========================================================
{
  const s = activitySlide();
  s.addText([
    { text: "Every organization has evidence people could point to and say ", options: { color: C.navy } },
    { text: "“belonging doesn’t exist here.”", options: { color: C.white } },
  ], {
    x: 0.9, y: 1.3, w: 11.5, h: 1.35, fontFace: BODY, fontSize: 24, bold: true, lineSpacing: 31,
    isTextBox: true, margin: 0,
  });
  s.addText("What’s ours?", {
    x: 0.9, y: 2.95, w: 11.5, h: 1.3, fontFace: HEAD, fontSize: 64, color: C.white,
    isTextBox: true, margin: 0,
  });
  s.addText("Observable things only: things you could point to, not feelings. One per sticky.", {
    x: 0.9, y: 4.65, w: 11.0, h: 0.9, fontFace: BODY, fontSize: 20, bold: true, color: C.navy,
    isTextBox: true, margin: 0,
  });
  chip(s, "10 MINUTES", 0.9, 6.15, 2.4);
  s.addNotes("BLIND activity. This slide must look complete and standalone. No column structure, no '1 of 3,' no hint of the re-examination that comes two slides later. Preserve strictly.");
}

// =========================================================
// SLIDE 14 — What Is This Evidence Of? (cream teach)
// =========================================================
{
  const s = newSlide(C.cream);
  kicker(s, "BEFORE WE DECIDE WHAT THIS EVIDENCE MEANS", C.blueDk, { y: 0.5 });
  s.addText("What is this evidence of?", {
    x: 0.9, y: 0.9, w: 11.5, h: 0.85, fontFace: HEAD, fontSize: 36, color: C.navy,
    isTextBox: true, margin: 0,
  });
  s.addText("In uncertain situations, the brain reads ambiguous events as verdicts on belonging.", {
    x: 0.9, y: 2.05, w: 11.3, h: 0.85, fontFace: BODY, fontSize: 20, bold: true, color: C.navy,
    lineSpacing: 26, isTextBox: true, margin: 0,
  });
  s.addText([
    { text: "The most effective belonging interventions ever studied ", options: { color: C.navy } },
    { text: "didn’t change the events.", options: { color: C.orange } },
    { text: " They changed the reading: adversity is ", options: { color: C.navy } },
    { text: "normal, and temporary.", options: { color: C.blueDk } },
  ], {
    x: 0.9, y: 3.0, w: 11.3, h: 1.15, fontFace: BODY, fontSize: 20, bold: true, lineSpacing: 26,
    isTextBox: true, margin: 0,
  });

  s.addShape(pres.ShapeType.roundRect, {
    x: 0.9, y: 4.45, w: 11.5, h: 1.55, fill: { color: C.white }, rectRadius: 0.1,
    shadow: { type: "outer", color: "000000", opacity: 0.12, blur: 10, offset: 3, angle: 90 },
  });
  s.addText([
    { text: "A verdict is ", options: { color: C.navy } },
    { text: "permanent.", options: { color: C.orange } },
    { text: "  A snapshot is ", options: { color: C.navy } },
    { text: "a moment.", options: { color: C.blueDk } },
  ], {
    x: 1.35, y: 4.45, w: 10.8, h: 1.55, fontFace: HEAD, fontSize: 24,
    valign: "middle", isTextBox: true, margin: 0,
  });
  s.addText("Walton, G. & Cohen, G. (2011). A brief social-belonging intervention improves academic and health outcomes. Science, 331.", {
    x: 0.9, y: 6.5, w: 11.5, h: 0.4, fontFace: BODY, fontSize: 8.5, italic: true, color: "8B98A6",
    isTextBox: true, margin: 0,
  });
  s.addNotes("The reveal teach (~12 min): belonging uncertainty and perception. The intervention changes the attribution, not the circumstances.");
}

// =========================================================
// SLIDE 15 — Activity: Cross-Examination
// =========================================================
{
  const s = activitySlide();
  s.addText("Go back to your wall. Take every sticky, one at a time, and ask:", {
    x: 0.9, y: 1.05, w: 11.3, h: 0.6, fontFace: BODY, fontSize: 21, bold: true, color: C.navy,
    lineSpacing: 27, isTextBox: true, margin: 0,
  });
  s.addText([
    { text: "Is this evidence of ", options: { color: C.navy } },
    { text: "ABSENCE", options: { color: C.white } },
    { text: ":\nbelonging can’t exist here?", options: { color: C.navy } },
  ], {
    x: 0.9, y: 1.85, w: 11.5, h: 1.05, fontFace: HEAD, fontSize: 25, lineSpacing: 30,
    isTextBox: true, margin: 0,
  });
  s.addText([
    { text: "Or evidence of a ", options: { color: C.navy } },
    { text: "STATE", options: { color: C.white } },
    { text: ":\na team under threat, in transition?", options: { color: C.navy } },
  ], {
    x: 0.9, y: 3.1, w: 11.5, h: 1.05, fontFace: HEAD, fontSize: 25, lineSpacing: 30,
    isTextBox: true, margin: 0,
  });

  s.addShape(pres.ShapeType.roundRect, {
    x: 0.9, y: 4.35, w: 11.5, h: 1.45, fill: { color: C.white }, rectRadius: 0.1,
    shadow: { type: "outer", color: "000000", opacity: 0.15, blur: 8, offset: 3, angle: 90 },
  });
  s.addText([
    { text: "THE TEST   ", options: { fontFace: HEAD, fontSize: 14, color: C.blueDk, charSpacing: 2 } },
    { text: "Would this have looked the same eighteen months ago? Would it look the same if the stress faded?", options: { fontFace: BODY, fontSize: 17, bold: true, color: C.navy } },
  ], {
    x: 1.35, y: 4.35, w: 10.6, h: 1.45, valign: "middle", lineSpacing: 23,
    isTextBox: true, margin: 0,
  });
  chip(s, "15 MINUTES", 0.9, 6.25, 2.4);
  s.addNotes("Tables re-sort every sticky. Columns two and three get drawn on their paper NOW, live. They were never on screen before this moment.");
}

// =========================================================
// SLIDE 16 — Activity: What Resolved Looks Like
// =========================================================
{
  const s = activitySlide();
  s.addText([
    { text: "For each item: if this were ", options: { color: C.navy } },
    { text: "healed", options: { color: C.white } },
    { text: ", what would we see?", options: { color: C.navy } },
  ], {
    x: 0.9, y: 1.25, w: 11.5, h: 1.5, fontFace: HEAD, fontSize: 34, lineSpacing: 41,
    isTextBox: true, margin: 0,
  });
  s.addText("Not aspirations. Observable pictures.", {
    x: 0.9, y: 2.95, w: 11.0, h: 0.6, fontFace: BODY, fontSize: 20, bold: true, color: C.navy,
    isTextBox: true, margin: 0,
  });

  s.addShape(pres.ShapeType.roundRect, {
    x: 0.9, y: 3.75, w: 11.5, h: 1.3, fill: { color: C.white }, rectRadius: 0.1,
    shadow: { type: "outer", color: "000000", opacity: 0.15, blur: 8, offset: 3, angle: 90 },
  });
  s.addText([
    { text: "“The group chat went quiet”", options: { color: C.gray } },
    { text: "   →   ", options: { color: C.gold, fontFace: HEAD } },
    { text: "“People share small wins without being asked.”", options: { color: C.navy } },
  ], {
    x: 1.35, y: 3.75, w: 10.6, h: 1.3, fontFace: BODY, fontSize: 17, bold: true,
    valign: "middle", lineSpacing: 23, isTextBox: true, margin: 0,
  });

  carryUp(s, 0.9, 5.4, 0.9);
  s.addText("Genuinely broken trust doesn’t belong in this column. It goes to the Carry It Up board.", {
    x: 1.55, y: 5.4, w: 10.8, h: 0.5, fontFace: BODY, fontSize: 15, bold: true, color: C.navy,
    valign: "middle", isTextBox: true, margin: 0,
  });
  chip(s, "8 MINUTES", 0.9, 6.3, 2.2);
  s.addNotes("Third column (~8 min): convert each item into an observable picture of possible belonging. Route genuinely broken-trust items to the Carry It Up board, not this column.");
}

// =========================================================
// SLIDES 17–19 — What I Owe the Team (3-slide build, active round dominant)
// =========================================================
function oweSlide(activeRound) {
  const s = newSlide(C.cream);
  kicker(s, "THE COMMITMENT", C.blueDk, { y: 0.45 });
  s.addText([
    { text: "What I ", options: { color: C.navy } },
    { text: "owe", options: { color: C.gold } },
    { text: " the team.", options: { color: C.navy } },
  ], {
    x: 0.9, y: 0.82, w: 11.5, h: 0.8, fontFace: HEAD, fontSize: 34,
    isTextBox: true, margin: 0,
  });

  const rounds = [
    {
      n: "1", accent: C.blueDk,
      head: "What do I owe the people at this table?",
      sub: "Specific. Behavioral. Starting this week.",
    },
    {
      n: "2", accent: C.gold,
      head: "What do I need from the people at this table to keep showing up that way?",
      sub: "If it’s really a leadership ask, walk it to the Carry It Up board.",
    },
    {
      n: "3", accent: C.orange,
      head: "As a table, write your compact.",
      sub: "One page. Keep it.",
    },
  ];

  let y = 1.95;
  rounds.forEach((r, i) => {
    const active = i + 1 === activeRound;
    const h = 1.55;
    s.addShape(pres.ShapeType.roundRect, {
      x: 0.9, y, w: 11.5, h, rectRadius: 0.1,
      fill: { color: active ? C.navy : C.white },
      shadow: active
        ? { type: "outer", color: "000000", opacity: 0.25, blur: 12, offset: 4, angle: 90 }
        : { type: "outer", color: "000000", opacity: 0.08, blur: 6, offset: 2, angle: 90 },
    });
    s.addText("ROUND", {
      x: 1.35, y: y + 0.28, w: 0.95, h: 0.25, fontFace: BODY, fontSize: 10, bold: true,
      charSpacing: 2, color: active ? r.accent : C.paleText, align: "center",
      isTextBox: true, margin: 0,
    });
    s.addText(r.n, {
      x: 1.35, y: y + 0.42, w: 0.95, h: 1.0, fontFace: HEAD, fontSize: 44,
      color: active ? r.accent : C.paleText, align: "center", valign: "middle",
      isTextBox: true, margin: 0,
    });
    s.addText(r.head, {
      x: 2.75, y: y + 0.24, w: 9.3, h: 0.8, fontFace: HEAD,
      fontSize: activeRound === 2 && i === 1 ? 19 : 20,
      color: active ? C.white : C.paleText, lineSpacing: 24,
      isTextBox: true, margin: 0,
    });
    s.addText(r.sub, {
      x: 2.75, y: y + 1.02, w: 9.0, h: 0.45, fontFace: BODY, fontSize: 14, bold: true,
      color: active ? (i === 1 ? C.gold : C.blue) : C.paleText,
      isTextBox: true, margin: 0,
    });
    y += h + 0.22;
  });
  return s;
}
oweSlide(1).addNotes("Round 1 of the commitment block (~40 min total, three rounds at tables). Advance the deck as each round begins; the round in play is the navy card.");
oweSlide(2).addNotes("Round 2. Needs, not grievances. Leadership asks walk to the Carry It Up board.");
oweSlide(3).addNotes("Round 3. Each table writes its one-page compact and keeps it. Collect nothing; the compact belongs to the table.");

// =========================================================
// SLIDE 20 — Close: One line. One behavior. One week. (navy)
// =========================================================
{
  const s = newSlide(C.navy);
  kicker(s, "MY ONE OPPORTUNITY", C.blue, { y: 1.35 });
  s.addText([
    { text: "One line.\n", options: { color: C.blue } },
    { text: "One behavior.\n", options: { color: C.gold } },
    { text: "One week.", options: { color: C.white } },
  ], {
    x: 0.9, y: 1.95, w: 11.6, h: 3.9, fontFace: HEAD, fontSize: 60, lineSpacing: 76,
    isTextBox: true, margin: 0,
  });
  s.addNotes("Individual commitment: each person writes one line: one behavior, starting this week. Written before the send-off.");
}

// =========================================================
// SLIDE 21 — Send-off (navy, mirrors title)
// =========================================================
{
  const s = newSlide(C.navy);
  cluster(s);
  s.addText("Nobody in this room chose the return to office.", {
    x: 0.9, y: 1.9, w: 11.4, h: 0.7, fontFace: BODY, fontSize: 24, bold: true, color: C.blue,
    isTextBox: true, margin: 0,
  });
  s.addText([
    { text: "Everyone in this room ", options: { color: C.white } },
    { text: "chooses", options: { color: C.gold } },
    { text: " what their belonging is ", options: { color: C.white } },
    { text: "anchored to.", options: { color: C.gold } },
  ], {
    x: 0.9, y: 2.75, w: 11.7, h: 2.1, fontFace: HEAD, fontSize: 40, lineSpacing: 48,
    isTextBox: true, margin: 0,
  });
  carryUp(s, 0.9, 5.75, 1);
  s.addText("The Carry It Up board goes with me to your leaders tomorrow.", {
    x: 1.62, y: 5.75, w: 10.8, h: 0.52, fontFace: BODY, fontSize: 17, bold: true, color: C.white,
    valign: "middle", isTextBox: true, margin: 0,
  });
  s.addNotes("The send-off. Follow this slide with the standard contact/QR evaluation slide from Gaelin's existing template (not rebuilt here).");
}

pres.writeFile({ fileName: "Session3_Anchored_Slides.pptx" }).then(() => console.log("written"));
