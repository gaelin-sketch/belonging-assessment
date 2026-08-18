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

## Testing the prompt

[`sample-payload.json`](sample-payload.json) is a real capture from the assessment, already merged the way
step 4 describes, with a fictional respondent. It is deliberately an awkward case: someone who leads
supervisors (`authorityLevel` 4), scoring 4.4 in the Guarded zone. Their team reads Building at 6.2
while leadership sits at 3.2 and the wider organization at 2.3, so the level shape is a clean distance
gradient. They rate belonging 9 out of 10 for their own thriving, and their `perceivedBelonging` falls
away by level, 4 then 2 then 1. Between them these exercise the authority CTA, the authority nuance
clause, the belief gap, the level shape, and requirement 8 at once, without tripping the care protocol.

## Scale note

Scores run 0.1 to 10. A neutral answer to every item scores 5.05, just below the 5.5 crosshairs, so a
flat respondent plots slightly left of and below centre and lands in Guarded. This is deliberate:
neutrality is not counted as evidence of belonging, and the top right has to be earned.

The care protocol triggers at a score of 2.5 or below, or all four constructs at 3.0 or below. In
practice that catches the bottom two uniform answer patterns: everything at Strongly disagree (scores
0.1) and everything at Disagree (scores 2.58, caught by the construct condition).
