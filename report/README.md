# Report generation

The assessment is a static page, so it cannot write reports itself. It posts to one Make webhook and
Make does the writing, using an Anthropic API module whose system prompt is
[`belonging-report-writer.md`](belonging-report-writer.md) (everything below its `---` rule).

## What arrives

Both stages post to the same webhook and are told apart by `event`:

| `event` | When | Carries | Use |
| --- | --- | --- | --- |
| `submission` | Every completed assessment | Scores, tenure, authority, beliefs, perceived belonging, `rawAnswers` | Log the row |
| `report_request` | Only if the person opts in | The same, plus `contact`, minus `rawAnswers` | Write and send the report |

They share a `submissionId`. `report_request` also carries `linkedToSubmission`: when it is `true` the
`submission` row already landed and should be joined to; when `false` that row never arrived, so this
payload is the only copy and carries `rawAnswers` itself.

## The instrument

Eighteen scored items, six per level, one per construct. Three are acts the respondent takes and three
are how the environment answers them, paired: say with psychological safety, show with social
connection, share with co-creation. Every item loads exactly one construct, which is what keeps the
Action and Reception axes independent; before this, eight items carried weight on both and the two axes
could not move apart. The three acts are weighted equally for now.

The two axes use different anchors. The acts are asked Never through Always, since they are
behaviours to be counted, and an agreement scale on a behaviour item measures self image instead:
someone who believes they are open while rarely showing it is precisely who the assessment is trying
to see. The conditions are asked Strongly disagree through Strongly agree, since they are perceptions.
Both are five points, so scoring is identical either way, and each question screen marks the switch
between them.

Three more items, one per level, ask outright whether the person feels they belong. Those are never
scored. They are the criterion held in reserve: once there are enough responses, regressing the three
acts against them is what should set the act weights.

Every payload also carries `results.findings`, a ranked list of patterns detected in code rather than by
the report writer, and `results.reliability`, which states the straight lining flag and the minimum gap
that counts as a real difference. The prompt is written to assert nothing the findings list does not
contain. Pattern detection in prose is where noise becomes confident nonsense, so it happens in
arithmetic instead.

## How the browser posts

The assessment posts with `mode: "no-cors"` and `Content-Type: text/plain;charset=UTF-8`, which
looks wrong and is deliberate. An `application/json` body makes the request preflighted, and Make
answers the OPTIONS preflight with 400, so the browser never sends the POST at all. Sending
`text/plain` in ordinary cors mode does deliver, but Make returns no `Access-Control-Allow-Origin`
header, so the promise rejects after the row has already landed, and retrying on that failure would
duplicate it.

Two consequences for the scenario:

- The body arrives as JSON text under a `text/plain` content type. If Make does not parse it
  automatically, turn on JSON pass-through for the webhook and put a Parse JSON module first.
- The page cannot see the response, so an HTTP level failure is invisible to the respondent. They see
  the success message whenever the request leaves the browser. Watch the Make execution history rather
  than trusting the on-screen confirmation.

A webhook URL alone is not enough. The webhook has to be attached to a Custom webhook trigger in a
scenario, and that scenario has to be saved and switched on, or Make reports the URL as not linked to
any scenario and nothing is stored. Run one real assessment while the webhook is in "Determine data
structure" mode so Make learns the full shape, including the nested `results.levels` object.

## Scenario shape

1. Webhook receives the post.
2. Router on `event`.
3. `submission` branch: append the row to the sheet, keyed by `submissionId`.
4. `report_request` branch: look up the matching `submission` row, merge the two, then pass the merged
   JSON to the Anthropic module. Merging matters because the acts inference reads best with `rawAnswers`,
   which the `report_request` alone does not carry.
5. Send the returned text as the results email. The prompt returns `Subject:` and `Preview:` lines first,
   then the body.

The email promises delivery "within 2 business days", so a queued or reviewed send is fine; nothing has
to be instant.

## Branding the email

[`email-template.html`](email-template.html) is the shell the report is delivered in. It carries the
same design as the Belonging Assessment Report and the assessment itself: Archivo over IBM Plex Sans,
the navy and paper base, and the logo palette on the four constructs.

Make fills the `{{TOKENS}}`: `{{SUBJECT}}`, `{{PREVIEW}}`, `{{SCORE}}`, `{{ZONE}}`, `{{ZONE_COLOR}}`,
`{{BUCKET}}`, `{{TIER}}`, `{{BODY}}`, and `{{PSYCH}}` `{{CONN}}` `{{COCRE}}` `{{AUTH}}`.

The model still writes plain text, exactly as the prompt specifies. The template does the design, so
nothing about the look depends on what the model decides to emit. Converting its output into `{{BODY}}`
takes three rules:

- split on blank lines; each block becomes `<p style="margin:0 0 16px;">`
- a short block with no closing period is a section header; wrap it in the `<h2>` style shown in the
  template comment
- `*text*` becomes `<em>text</em>`, which is how the closing question of each section is marked

`{{ZONE_COLOR}}` is the chip behind the zone name: `#34B27E` for Belong, `#F2A516` for Building and
Fit In, `#EB4824` for Survival and Guarded.

Email clients do not load web fonts reliably, so every font declaration falls back to Helvetica or
Arial, and the layout is tables with inline styles rather than flex or grid. The logo mark in the header
is built from table cells so it survives clients that strip SVG.

## Testing the prompt

[`sample-payload.json`](sample-payload.json) is a real capture from the assessment, already merged the way
step 4 describes, with a fictional respondent. It is deliberately an awkward case: someone who leads
supervisors (`authorityLevel` 4) offering far more than comes back, action 8.8 against reception 4.4,
which puts them in Survival. Their team receives them at 7.5 while the wider organization reads 0.7, so
the level gradient is steep and unambiguous. They rate belonging 9 out of 10 for their own thriving.
Between them these exercise the authority CTA, the authority nuance clause, the belief gap, a high
confidence level shape, and requirement 8, without tripping the care protocol.

## Scale note

Scores run 0.1 to 10. A neutral answer to every item scores 5.05, just below the 5.5 crosshairs, so a
flat respondent plots slightly left of and below centre and lands in Guarded. This is deliberate:
neutrality is not counted as evidence of belonging, and the top right has to be earned.

The care protocol triggers at a score of 2.5 or below, or all four constructs at 3.0 or below. In
practice that catches the bottom two uniform answer patterns: everything at Strongly disagree (scores
0.1) and everything at Disagree (scores 2.58, caught by the construct condition).
