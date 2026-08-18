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
step 4 describes, with a fictional respondent. It is deliberately an awkward case: a supervisor
(`authorityLevel` 4) in the Guarded zone whose team reads Building while leadership and the wider
organization sit far lower, who rates belonging 9 out of 10 for their own thriving, and whose
`perceivedBelonging` falls away by level (4 / 2 / 1). It exercises the authority CTA, the authority
nuance clause, the belief gap, the level shape, and requirement 8 at once.

## Open questions for Gaelin

- The prompt calls the plot the **Belonging Map**; the assessment UI calls it the **Belonging Matrix**.
  A respondent reading both will see two names for one thing. Worth settling on one.
- The care protocol triggers at a score of 2.5 or below, or all four constructs at 3.0 or below. On the
  current scale a person answering "Strongly disagree" to everything scores 0.1, and one answering
  "Disagree" to everything scores 2.58, so the gate catches roughly the bottom two response patterns.
  Confirm that is the intended width.
