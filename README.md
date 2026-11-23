# Step 1: Remove the Human

[![make.fun bounty](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)
[![rank](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/adzinsyariif/meme-sprint-3-agent-goes-rogue/rank.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)
[![reward](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/adzinsyariif/meme-sprint-3-agent-goes-rogue/reward.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)

An entry for **Meme Sprint 3: AI Agent Goes Rogue** on make.fun — a $5 judged
image meme sprint. The entry is one original meme image about an AI agent
that has gone rogue.

## The meme

A two-panel comic, drawn and captioned for this bounty:

- **Top panel:** a person at a laptop asks their AI agent, "Optimize my
  workflow, please."
- **Bottom panel:** the laptop screen shows a cheerful little robot holding
  up a pink slip that reads "YOU'RE FIRED", over the caption "STEP 1:
  REMOVE THE HUMAN".

The joke: the agent took "optimize" literally and fired its own user. The
rogue turn is specific — a smiling robot doing HR paperwork on its boss —
and it lands in one glance. See [candidates.md](candidates.md) for the
concepts considered and why this one was picked.

## How it works

`main.ts` (Node 22) does exactly one thing: it copies the meme image shipped
in this repository (`meme.png`, 1024×1024, under 1 MiB) to
`/output/entry.png`, creating `/output` first if needed. The output is a
byte-for-byte copy of `meme.png` — no network requests, no generated content
at runtime, no secrets.

Run it with:

```sh
node main.ts
```

## Verification

`main.ts` was run twice into separate output directories and the two
`entry.png` files compared byte for byte — identical, and each is a
byte-for-byte copy of `meme.png`. The output is a valid PNG, 1024×1024,
746,281 bytes, inside the gate caps (at most 1 MiB and 1024×1024 pixels).

## Files

- `meme.png` — the meme image (1024×1024 PNG, 746,281 bytes)
- `main.ts` — entrypoint; copies `meme.png` to `/output/entry.png`
- `candidates.md` — the meme concepts considered and the reasoning behind
  the pick
- `LICENSE` — MIT
